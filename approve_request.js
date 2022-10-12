exports.approve_request = async (event, context, callback) => {

    const { Client } = require('pg');

    const client = new Client({
        host: "postgresql.ch8wfucynpvq.us-east-1.rds.amazonaws.com",
        port: "5431",
        database: "procurement",
        user: "",
        password: ""
    });
    client.connect();

    let objReturn = {
        code: 200,
        message: "request approved successfully",
        type: "object",
        object: []
    };

    const roleReturn = {
        admin: 1000,
        generalDirector: 5000,
        superAdmin: 2000
    };

    const roleNames = Object.keys(roleReturn);

    try {

        if (event.id && event.role && event.price) {


            if (roleNames.includes(event.role)) {

                if (roleReturn[event.role] >= event.price) {

                    const res = await client.query(`UPDATE request SET details = jsonb_set(details, '{state}', '"approved"') WHERE id=$1`, [event.id]);

                    if (res.rowCount == 1) {

                        return objReturn;

                    } else {

                        objReturn.code = 801;
                        objReturn.message = "id does not exist";

                        client.end();
                        return objReturn;
                    }



                } else {

                    objReturn.code = 401;
                    objReturn.message = "you are not authorised";

                    client.end();
                    return objReturn;

                }

            } else {
                objReturn.code = 400;
                objReturn.message = "role does not exist";

                client.end();
                return objReturn;
            }

        } else {
            objReturn.code = 802;
            objReturn.message = "input json must have an 'id' & 'role' & 'price' field";

            client.end();
            return objReturn;
        }

    } catch (e) {

        objReturn.code = 404;
        objReturn.message = e;
        client.end();
        return objReturn;
    }
};



