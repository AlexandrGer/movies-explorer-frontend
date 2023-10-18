import React, { useEffect, useState } from 'react';
import '../Movies/Movies.css';
import { SearchForm } from '../SearchForm/SearchForm';
import { MoviesCardList } from '../MoviesCardList/MoviesCardList';
import { filterSearchMovies, filterMoviesDuration } from '../../utils/filtration';


export const SavedMovies = ({ savedMovies, onDeleteMovie }) => {

	const [movies, setMovies] = useState(JSON.parse(localStorage.getItem('savedMovies')));

	function handleSearchMovies(movieName, shortFilms) {
		const savedMovies = JSON.parse(localStorage.getItem('savedMovies'));
		let filteredMovies = filterSearchMovies(savedMovies, movieName);
		localStorage.setItem('filteredSavedMovies', JSON.stringify(filteredMovies));
		filter(shortFilms);
	}

	function filter(shortFilms) {
		const filteredMovies = JSON.parse(localStorage.getItem('filteredSavedMovies')) || [];

		const resultMovies = shortFilms
			? filterMoviesDuration(filteredMovies)
			: filteredMovies;

		setMovies(resultMovies);
	}


	return (
		<div className="movies">
			<div className='form-container'>
				<SearchForm
					onSearch={handleSearchMovies}
					filterCheckbox={filter}
				/>
			</div>
			<MoviesCardList
				movies={movies}
				savedMovies={savedMovies}
				onDeleteMovie={onDeleteMovie}
			/>
		</div>
	);
}
