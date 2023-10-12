const moviesApiOptions = {
	url: 'https://api.nomoreparties.co/beatfilm-movies',
	headers: {
		'Content-Type': 'application/json'
	}
}
class MoviesApi {
	constructor(config) {
		this._url = config.url;
		this._headers = config._headers;
	}

	_handleResponse(res) {
		if (res.ok) {
			return res.json();
		} else {
			return Promise.reject(`Возникла ошибка: ${res.status}`)
		}
	}

	getAllMovies() {
		return fetch(`${this._url}`, {
			method: 'GET',
			headers: this._headers
		})
			.then(this._handleResponse);
	}
}

export const moviesApi = new MoviesApi(moviesApiOptions);