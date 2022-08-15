const dotenv = require('dotenv').config()

const pg = require('pg');
const client = new pg.Client({
    host: 'localhost',
    user: 'postgres',
    password: 'password',
    database: 'food-app'
})

client.connect()

async function allUsers () {
    return client.query('select * from public.user')
}


module.exports = allUsers