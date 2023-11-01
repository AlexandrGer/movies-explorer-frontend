import React, { useState } from 'react';
import './Movies.css';
import { SearchForm } from '../SearchForm/SearchForm';
import { MoviesCardList } from '../MoviesCardList/MoviesCardList';
import { moviesApi } from '../../utils/MoviesApi';
import { filterSearchMovies, filterMoviesDuration } from '../../utils/filtration';
import { Preloader } from '../Preloader/Preloader';

export const Movies = ({ savedMovies, onLikeMovie, onDeleteMovie }) => {
	const [movies, setMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [serverErrorMessage, setServerErrorMessage] = useState('');

	//Получаем список фильмов из localStorage, если их нет, делаем запрос на сервер и записываем их в localStorage когда пользователь делает запрос
	function getAllMovies(movieName, shortFilms) {
		setIsLoading(true);
		const allMovies = JSON.parse(localStorage.getItem('allMovies'));
		if (!allMovies) {
			return moviesApi
				.getAllMovies()
				.then((movies) => {
					localStorage.setItem('allMovies', JSON.stringify(movies));
					filterMovies(movieName, shortFilms);
				}).catch(() => {
					setServerErrorMessage('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
				}).finally(() => {
					setServerErrorMessage('');
				})
		}
		else {
			filterMovies(movieName, shortFilms);
		}
	}

	// Функция фильрации фильмов
	const filterMovies = (movieName, shortFilms) => {
		const allMovies = JSON.parse(localStorage.getItem('allMovies'));

		let filteredMovies = filterSearchMovies(allMovies, movieName);
		localStorage.setItem('filteredMovies', JSON.stringify(filteredMovies));
		filterDuration(shortFilms);
	};

	function filterDuration(shortFilms) {
		const filteredMovies = JSON.parse(localStorage.getItem('filteredMovies')) || [];

		const resultMovies = shortFilms
			? filterMoviesDuration(filteredMovies)
			: filteredMovies;

		setMovies(resultMovies)
		setIsLoading(false);
	}


	return (
		<div className="movies">
			<div className='form-container'>
				<SearchForm
					onSearch={getAllMovies}
					filterCheckbox={filterDuration}
					onError={serverErrorMessage}
				/>
			</div>
			{isLoading
				? <Preloader />
				: <MoviesCardList
					movies={movies}
					savedMovies={savedMovies}
					onLikeMovie={onLikeMovie}
					onDeleteMovie={onDeleteMovie}
				/>
			}
		</div>
	);
}
