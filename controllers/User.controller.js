//!тест start
const db = require('../models/db');

class UserController {
	async createUser(req, resp) {
		const { name, surname } = req.body
		const newPerson = await db.query(`INSERT INTO author (name, surname) values($1, $2) RETURNING *`, [name, surname]);
		resp.json(newPerson)

	}
	async getUser(reg, resp) {

	}
	async getOneUser(reg, resp) {

	}
	async updateUser(reg, resp) {

	}
	async deleteUser(reg, resp) {

	}
}
module.exports = new UserController();


//!тест finish