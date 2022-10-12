exports.search_purchase_order = async (event, context, callback) => {

    const { Client } = require('pg');

    const client = new Client({
        host: "postgresql.ch8wfucynpvq.us-east-1.rds.amazonaws.com",
        port: "5431",
        database: "procurement",
        user: "",
        password: ""
    });
    client.connect();
    const filters = event;
    let keysArr = Object.keys(filters);
    let valueArr = Object.values(filters);
    let abc;
    let objReturn = {
        code: 200,
        message: "purchase order search successfully",
        type: "object",
        object: []
    };

    try {
        if (JSON.stringify(event) === '{}') {

            abc = await client.query(`SELECT * FROM purchase_order`);
        } else if (event.id) {

            abc = await client.query(`SELECT * FROM purchase_order WHERE id=$1`, [event.id]);
        }
        else {

            for (let item of keysArr) {

                abc = await client.query(`SELECT * FROM purchase_order WHERE details->$1 @> $2`, [item, JSON.stringify(valueArr[keysArr.indexOf(item)])]);
            }

        }
        objReturn.object = abc.rows;
        client.end();

        return objReturn;
    } catch (e) {

        objReturn.code = 400;
        objReturn.message = e;
        client.end();
        return objReturn;

    }

};


