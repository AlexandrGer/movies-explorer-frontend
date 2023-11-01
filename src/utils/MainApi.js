const apiOptions = {
	url: 'https://api.movies-player.nomoredomainsrocks.ru',
}

class Api {
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

	_request(url, options) {
		return fetch(url, options).then(this._handleResponse)
	}

	// Получение данных о пользователе с сервера
	getUserData() {
		return this._request(`${this._url}/users/me`, {
			method: 'GET',
			headers: {
				'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
				'Content-Type': 'application/json'
			}
		})
	}

	// Отправка полученных данных о пользователе на сервер
	sendUserData({ name, email }) {
		return this._request(`${this._url}/users/me`, {
			method: 'PATCH',
			headers: {
				'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name: name,
				email: email
			})
		})
	}

	// Получить сохраненные пользователем фильмы
	getSavedMovies() {
		return this._request(`${this._url}/movies`, {
			method: 'GET',
			headers: {
				'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
				'Content-Type': 'application/json'
			}
		})
	}

	// Добавить фильм в сохраненные
	addMovie(movie) {
		return this._request(`${this._url}/movies`, {
			method: 'POST',
			headers: {
				'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(movie)
		})
	}

	// Удалить фильм из сохраненных
	deleteMovie(movieId) {
		return this._request(`${this._url}/movies/${movieId}`, {
			method: 'DELETE',
			headers: {
				'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
				'Content-Type': 'application/json'
			},
		})
	}
}

export const api = new Api(apiOptions);