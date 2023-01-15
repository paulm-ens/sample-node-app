const { Client } = require('pg')
require('dotenv').config();

const client = new Client({
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
    ssl: true,
})

execute()

async function execute() {
    try {
        await client.connect()
        console.log("Connected to db")
        console.log("If you see this message the project runs as intended, good job!")
    }
    catch (ex) {
        console.log(`Something is not quite right ${ex}`)
    }
    finally {
        await client.end()
        console.log("Client disconnected")
    }

}