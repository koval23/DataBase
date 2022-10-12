
class AuthorCotroller {
	static get(req, resp) {
		resp.send('getAuthor')
	}
	static getOne(req, resp) {
		resp.send('getOneAuthor')
	}
	static registration(req, resp) {
		resp.send('getOneAuthor')
	}
}

module.exports = AuthorCotroller;