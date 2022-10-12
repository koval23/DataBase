
const { Client } = require('pg')

//! SQL 
//Спрятать все данные
//! JSON, XML - Подробно
//! Реализовать запросы на получение всех авторов. Реализовать табличку авторов и добавить несколько записей
//! ** Попробовать реализовать запрос на добавление автора. Логин и пароль отпрвляются в query (POST)


const config = {
	user: process.env.DB_NAME_USER,
	host: process.env.DB_HOST,
	database: process.env.DB_NAME_DB,
	password: process.env.DB_PASWORD,
	port: process.env.DB_PORT,
}

const client = new Client(config)

module.exports = client

