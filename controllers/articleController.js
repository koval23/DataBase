const client = require('../models/db')

class ArticleController {
	static get(req, resp) {
		client.connect(err => {
			if (err) return resp.status(500).json({ status: "ERROR", message: "Server now not work" })
		})

		const sql = 'SELECT * FROM Article'
		client.query(sql, (err, respSQL) => {
			if (err) return resp.status(500).json({ status: "ERROR", message: "ServerError" })
			client.end()
			resp.json({ status: "OK", message: respSQL.rows })
		})
	}
	static getOne(req, resp) {
		resp.send('getOneArticle')
	}
	static registration(req, resp) {
		resp.send('registration')
	}
}

module.exports = ArticleController;