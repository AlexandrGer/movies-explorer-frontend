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
			return Promise.reject(`Возникла ошибка: ${res.status}`)
		}
	}

	register(data) {
		return fetch(`${this._url}/signup`, {
			method: 'POST',
			headers: this._headers,
			body: JSON.stringify({
				name: data.name,
				password: data.password,
				email: data.email
			})
		}).then(this._handleResponse)
	}

	authorize(password, email) {
		return fetch(`${this._url}/signin`, {
			method: 'POST',
			headers: this._headers,
			body: JSON.stringify({
				password,
				email
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