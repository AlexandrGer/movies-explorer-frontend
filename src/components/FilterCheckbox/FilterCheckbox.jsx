import React from 'react';
import './FilterCheckbox.css';

export const FilterCheckbox = () => {

	return (
		<div className="filterCheckbox">
			<label class="filterCheckbox__switch">
				<input
					className='filterCheckbox__input'
					name='shortFilms'
					type="checkbox" />
				<div class="filterCheckbox__slider"></div>
			</label>
			<p className="filterCheckbox__text">Короткометражки</p>
		</div>
	);
}