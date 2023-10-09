import React, { useState } from 'react';
import './SearchForm.css';
import { FilterCheckbox } from '../FilterCheckbox/FilterCheckbox';

export const SearchForm = () => {

	const [error, setError] = useState(false); // временное решение

	function handleSubmit(e) {
		e.preventDefault();
	}

	return (

		<form className="searchForm" name='searchForm' onSubmit={handleSubmit}>
			<div className='searchForm__container'>
				<input
					className="searchForm__input"
					name='movie'
					type='text'
					placeholder="Фильм"
					required />
				<span className={error ? 'searchForm__error' : 'searchForm__error searchForm__error_hidden'}>Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</span>
				<button
					className="button searchForm__button "
					type="submit"
					aria-label="Поиск" />
			</div>
			<FilterCheckbox></FilterCheckbox>
		</form >

	);
}
