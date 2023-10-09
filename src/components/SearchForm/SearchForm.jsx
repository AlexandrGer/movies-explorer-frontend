import React, { useState } from 'react';
import './SearchForm.css';
import { FilterCheckbox } from '../FilterCheckbox/FilterCheckbox';

export const SearchForm = () => {

	const [error, setError] = useState(false); // временное решение

	function handleSubmit(e) {
		e.preventDefault();
	}

	return (

		<form className="search-form" name='search-form' onSubmit={handleSubmit}>
			<div className='search-form__container'>
				<input
					className="search-form__input"
					name='movie'
					type='text'
					placeholder="Фильм"
					required />
				<span className={error ? 'search-form__error' : 'search-form__error search-form__error_hidden'}>Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</span>
				<button
					className="button search-form__button "
					type="submit"
					aria-label="Поиск" />
			</div>
			<FilterCheckbox></FilterCheckbox>
		</form >

	);
}
