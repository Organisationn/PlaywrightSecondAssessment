const mysql = require('mysql2/promise')
const  dotenv = require('dotenv')
dotenv.config({path : './.env'})


async function getConnection(){
    return await mysql.createConnection({
        host : process.env.DB_HOST,
        port : process.env.DB_PORT || 3306,
        user : process.env.DB_USER,
        password : process.env.DB_PASSWORD,
        database : process.env.DB_NAME_TWO
    })
}

async function getUserTestData(id=1){

    const connection = await getConnection()
    try {
        const [rows] = await connection.execute(
            'SELECT * from user_data_two where id=?', [id]);
        if (rows.length === 0)
            throw new Error(`no rows found for id=${id}`)
        return rows[0]
    }
    finally{
        await connection.end()
    }
}

module.exports = getUserTestData