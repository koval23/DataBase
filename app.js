require('dotenv').config();

const express = require('express')

const router = require('./routes/index')

const app = express(router)
//тест
app.use(express.json())

//тест

app.use('/api/v1', router) // routes какие нам доступны новыне пути

const PORT = process.env.PORT || process.env.PORT_RESER



const startServer = () => {
	try {
		app.listen(PORT, () => {
			console.log(`server start on port ${PORT}`);
		})
	} catch (e) {
		console.log(e.message)
	}
}

startServer()

//http://localhost:4000/api/v1


//restful api app + mvc //http://localhost:8080/api/v1/services?fdig=#
//backend classic + mvc //https://localhost:8080/home


// rest-api
// Углубленное понятие обработок и генераций ошибок try catch finish
// async await -

// SQL


