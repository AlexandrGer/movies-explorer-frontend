import React from 'react';
import './Movies.css';
import { SearchForm } from '../SearchForm/SearchForm';
import { Footer } from '../Footer/Footer';
import { MoviesCardList } from '../MoviesCardList/MoviesCardList';
import { Preloader } from '../Preloader/Preloader';

export const Movies = ({ movies }) => {

	return (
		<div className="movies">
			<div className='form-container'>
				<SearchForm></SearchForm>
			</div>
			<MoviesCardList
				movies={movies}>
			</MoviesCardList>
			<Footer></Footer>
		</div>
	);
}
