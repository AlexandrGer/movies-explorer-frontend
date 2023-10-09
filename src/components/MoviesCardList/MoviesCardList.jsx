import React from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCardList.css';
import { MoviesCard } from '../MoviesCard/MoviesCard';
import { ShowMore } from '../ShowMore/ShowMore';

export const MoviesCardList = ({ movies }) => {
	const { pathname } = useLocation();

	return (
		<section className="card-list">
			{movies.length > 0 ? (
				<>
					<ul className={`card-list__items ${pathname === '/saved-movies' ? 'card-list__items_size_b' : ''}`}>
						{movies.map((movie) => (
							<MoviesCard
								key={movie._id}
								name={movie.nameRU}
								img={movie.image}
								duration={movie.duration}
							/>
						))}
					</ul>
					<ShowMore></ShowMore>
				</>
			) : (
				<p className='card-list__text'>Ничего не найдено</p>
			)}


		</section>
	);
}
