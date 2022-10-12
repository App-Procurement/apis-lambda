exports.add_request = async (event, context, callback) => {

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
        message: "request added successfully",
        type: "object",
        object: []
    };
    try {
        if (JSON.stringify(event) === '{}') {
            return null;
        } else {

            await client.query(`insert into request ("details") VALUES ($1::jsonb)`, [event]);
        }

        client.end();

        return objReturn;
    } catch (e) {
        objReturn.code = 400;
        objReturn.message = e;
        client.end();
        return objReturn;
    }

};



