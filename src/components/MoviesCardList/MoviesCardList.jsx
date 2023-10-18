import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCardList.css';
import { MoviesCard } from '../MoviesCard/MoviesCard';
import { ShowMore } from '../ShowMore/ShowMore';
import {
	MAX_WIDTH_TABLET,
	MAX_WIDTH_MOBILE,
	DESKTOP_MAX_MOVIES,
	TABLET_MAX_MOVIES,
	MOBILE_MAX_MOVIES,
	DESKTOP_MORE_STEP,
	TABLET_MORE_STEP
} from '../../utils/constants';

export const MoviesCardList = ({ movies, savedMovies, onLikeMovie, onDeleteMovie }) => {
	const { pathname } = useLocation();

	const [initialMovies, setInitialMovies] = useState([]);

	const [count, setCount] = useState(DESKTOP_MAX_MOVIES);
	const [moreCount, setMoreCount] = useState(DESKTOP_MORE_STEP);

	React.useEffect(() => {
		onResize()
		window.addEventListener("resize", onResize)

		return () => {
			window.removeEventListener("resize", onResize)
		}
	}, []);

	let timeout = null;

	function onResize() {
		timeout && clearTimeout(timeout);

		timeout = setTimeout(() => {
			const width = window.innerWidth;
			if (pathname === '/saved-movies') {
				setInitialMovies(movies);
			}
			if (width > MAX_WIDTH_TABLET) {
				setCount(DESKTOP_MAX_MOVIES)
				setMoreCount(DESKTOP_MORE_STEP)
			} else if (width > MAX_WIDTH_MOBILE) {
				setCount(TABLET_MAX_MOVIES)
				setMoreCount(TABLET_MORE_STEP)
			} else {
				setCount(MOBILE_MAX_MOVIES)
				setMoreCount(TABLET_MORE_STEP)
			}
		}, 100);
	}

	React.useEffect(() => {
		setInitialMovies(movies.slice(0, count))
	}, [movies, count]);

	function handleMoreClick() {
		const newArray = [
			...movies.slice(0, (count + moreCount))
		]
		setCount(count + moreCount);
		setInitialMovies(newArray);
	}

	return (
		<section className="card-list">
			{initialMovies.length > 0 ? (
				<>
					<ul className={`card-list__items ${pathname === '/saved-movies' ? 'card-list__items_size_b' : ''}`}>
						{initialMovies.map((movie) => (
							<MoviesCard
								key={movie.id || movie.movieId}
								movie={movie}
								savedMovies={savedMovies}
								onLikeMovie={onLikeMovie}
								onDeleteMovie={onDeleteMovie}
							/>
						))}
					</ul>
				</>
			) :
				(
					<p className='card-list__text'>Ничего не найдено</p>
				)}

			{initialMovies.length === movies.length ? '' :
				<ShowMore
					onClick={handleMoreClick}>
				</ShowMore>
			}
		</section>
	);
}
