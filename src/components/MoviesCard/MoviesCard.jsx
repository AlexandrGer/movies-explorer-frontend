import React from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';

export const MoviesCard = ({ name, img, duration }) => {
	const { pathname } = useLocation();
	const hour = Math.floor(duration / 60);
	const minute = (duration % 60);

	function toggleLike(evt) {
		evt.target.classList.toggle('movies-card__button_active');
	}

	return (
		<li className="movies-card">
			<img src={img} alt={name} className='movies-card__img' />
			<div className='movies-card__container'>
				<h2 className='movies-card__name'>{name}</h2>
				{pathname === '/saved-movies' ? (
					<button
						className='button movies-card__button movies-card__button_delete'
						type='button'
						aria-label='Удалить' />
				) : (
					// <button className={isLiked ? 'movies-card__button movies-card__button_active' : 'movies-card__button'}/>
					<button
						className='button movies-card__button'
						type='button'
						aria-label='Лайкнуть/Убрать лайк'
						onClick={toggleLike} ></button>
				)}
				<span className='movies-card__time'>{`${hour}ч ${minute}м`}</span>
			</div>
		</li >
	);
}
