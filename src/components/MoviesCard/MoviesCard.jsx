import React from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';

export const MoviesCard = ({ name, img, duration }) => {
	const { pathname } = useLocation();
	const hour = Math.floor(duration / 60);
	const minute = (duration % 60);

	function toggleLike(evt) {
		evt.target.classList.toggle('moviesCard__button_active');
	}

	return (
		<li className="moviesCard">
			<img src={img} alt={name} className='moviesCard__img' />
			<div className='moviesCard__container'>
				<h2 className='moviesCard__name'>{name}</h2>
				{pathname === '/saved-movies' ? (
					<button
						className='button moviesCard__button moviesCard__button_delete'
						type='button'
						aria-label='Удалить' />
				) : (
					// <button className={isLiked ? 'moviesCard__button moviesCard__button_active' : 'moviesCard__button'}/>
					<button
						className='button moviesCard__button'
						type='button'
						aria-label='Лайкнуть/Убрать лайк'
						onClick={toggleLike} ></button>
				)}
				<time className='moviesCard__time'>{`${hour}ч ${minute}м`}</time>
			</div>
		</li>
	);
}
