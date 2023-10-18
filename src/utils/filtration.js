import { DURATION_MOVIES } from "./constants";

export function filterSearchMovies(movies, movieName) {
	let filteredMovies = [...movies]
	filteredMovies = filteredMovies.filter((item) => item.nameRU.toLowerCase().includes(movieName.toLowerCase()) ||
		item.nameEN.toLowerCase().includes(movieName.toLowerCase()));

	return (filteredMovies);
}

export function filterMoviesDuration(movies) {
	return movies.filter((item) => {
		return item.duration <= DURATION_MOVIES
	})
}