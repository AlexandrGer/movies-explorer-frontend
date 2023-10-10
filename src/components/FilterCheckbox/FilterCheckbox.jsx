import React from 'react';
import './FilterCheckbox.css';

export const FilterCheckbox = () => {

	return (
		<div className="filter-checkbox">
			<label className="filter-checkbox__switch" >
				<input
					className='filter-checkbox__input'
					id='checkbox'
					name='shortFilms'
					type="checkbox" />
				<span className="filter-checkbox__slider"></span>
			</label>
			<label className="filter-checkbox__text" htmlFor="checkbox">Короткометражки</label>
		</div>
	);
}