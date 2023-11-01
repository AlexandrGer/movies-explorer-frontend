const authOptions = {
	url: 'https://api.movies-player.nomoredomainsrocks.ru',
	headers: {
		'Content-Type': 'application/json'
	}
}

class Auth {
	constructor(config) {
		this._url = config.url;
		this._headers = config.headers;
	}

	_handleResponse(res) {
		if (res.ok) {
			return res.json();
		} else {
			return (res.json())
				.then((err) => {
					const error = new Error(err.message);
					error.status = res.status;
					throw error;
				})
		}
	}


	register({ name, email, password }) {
		return fetch(`${this._url}/signup`, {
			method: 'POST',
			headers: this._headers,
			body: JSON.stringify({
				name: name,
				password: password,
				email: email
			})
		}).then(this._handleResponse)
	}

	authorize({ email, password }) {
		return fetch(`${this._url}/signin`, {
			method: 'POST',
			headers: this._headers,
			body: JSON.stringify({
				email: email,
				password: password
			})
		}).then(this._handleResponse);
	}

	checkToken(token) {
		return fetch(`${this._url}/users/me`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			}
		}).then(this._handleResponse)
	}
}

export const auth = new Auth(authOptions);