import React from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';

export const MoviesCard = ({ movie, savedMovies, onLikeMovie, onDeleteMovie }) => {
	const { pathname } = useLocation();
	const duration = movie.duration;

	const moviesDuration = (duration) => {
		const hour = Math.floor(duration / 60);
		const minute = (duration % 60);

		if (hour === 0) {
			return (`${minute}м`);
		} else if (minute === 0) {
			return (`${hour}ч`);
		} else {
			return (`${hour}ч ${minute} м`);
		}
	}

	const time = moviesDuration(duration);



	const isLiked = savedMovies.some((saveMovie) => saveMovie.movieId === movie.id)

	function handleLike() {
		if (isLiked === true) {
			const savedMovieId = savedMovies.find(
				(item) => item.movieId === movie.id
			);
			onDeleteMovie(savedMovieId);
		} else {
			onLikeMovie(movie)
		}
	}

	function handleDelete() {
		onDeleteMovie(movie)
	}

	return (
		<li className="movies-card">
			<a className='movies-card__link' href={movie.trailerLink} target='blank' rel="noreferrer">
				<img
					src={movie.image.url ? `https://api.nomoreparties.co/${movie.image.url}` : movie.image}
					alt={movie.nameRU}
					className='movies-card__img' />
			</a >
			<div className='movies-card__container'>
				<h2 className='movies-card__name'>{movie.nameRU}</h2>
				{pathname === '/saved-movies' ? (
					<button
						className='button movies-card__button movies-card__button_delete'
						type='button'
						aria-label='Удалить'
						onClick={handleDelete} />
				) : (
					<button
						className={isLiked ? 'button movies-card__button movies-card__button_active' : ' button movies-card__button'}
						type='button'
						aria-label='Лайкнуть/Убрать лайк'
						onClick={handleLike}
					></button>
				)}
				<span className='movies-card__time'>{time}</span>
			</div>
		</li >
	);
}
