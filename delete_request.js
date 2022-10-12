exports.delete_request = async (event, context, callback) => {

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
        message: "request delete successfully",
        type: "object",
        object: []
    };

    try {
        if (event.id) {

            const res = await client.query(`DELETE FROM request WHERE id = $1`, [event.id]);

            if (res.rowCount == 1) {

                return objReturn;

            } else {

                objReturn.code = 801;
                objReturn.message = "id does not exist";

                client.end();
                return objReturn;
            }

        } else {

            objReturn.code = 802;
            objReturn.message = "input json must have an 'id' field";

            client.end();
            return objReturn;
        }


    } catch (e) {
        objReturn.code = 400;
        objReturn.message = e;
        client.end();
        return objReturn;
    }

};


