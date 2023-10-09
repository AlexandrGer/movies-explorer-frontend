import React from 'react';
import './FilterCheckbox.css';

export const FilterCheckbox = () => {

	return (
		<div className="filter-checkbox">
			<label class="filter-checkbox__switch">
				<input
					className='filter-checkbox__input'
					name='shortFilms'
					type="checkbox" />
				<div class="filter-checkbox__slider"></div>
			</label>
			<p className="filter-checkbox__text">Короткометражки</p>
		</div>
	);
}