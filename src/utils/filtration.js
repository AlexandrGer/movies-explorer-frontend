import { DURATION_MOVIES } from "./constants";

export function filterSearchMovies(movies, movieName, shortFilms) {
	if (!movies) {
		return [];
	}

	let filteredMovies = [...movies]

	if (movieName) {
		filteredMovies = filteredMovies.filter((item) => item.nameRU.toLowerCase()
			.includes(movieName.toLowerCase()));
	}

	if (shortFilms) {
		return filteredMovies.filter((item) => item.duration <= DURATION_MOVIES);
	}

	return (filteredMovies);
}