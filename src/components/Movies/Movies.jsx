import React from 'react';
import './Movies.css';
import { SearchForm } from '../SearchForm/SearchForm';
import { MoviesCardList } from '../MoviesCardList/MoviesCardList';

export const Movies = ({ movies }) => {

	return (
		<div className="movies">
			<div className='form-container'>
				<SearchForm></SearchForm>
			</div>
			<MoviesCardList
				movies={movies}>
			</MoviesCardList>
		</div>
	);
}
