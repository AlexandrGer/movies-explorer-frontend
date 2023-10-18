import React, { useState, useEffect } from 'react';
import './SearchForm.css';
import { FilterCheckbox } from '../FilterCheckbox/FilterCheckbox';
import { useLocation } from 'react-router-dom';

export const SearchForm = ({ onSearch, filterCheckbox, onError }) => {
	const [error, setError] = useState('');
	const { pathname } = useLocation();

	const [shortFilms, setShortFilms] = useState(false);
	const [movieName, setMovieName] = useState('');

	// Отслеживаем изменения инпута
	const handleMovieChange = (e) => {
		setMovieName(e.target.value);
	};

	// Отправляем инпут с запросом 
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!movieName) {
			setError('Нужно ввести поисковой запрос');
			return;
		}
		setError('');
		if (pathname === '/movies') {
			localStorage.setItem('movieName', movieName);
		}
		onSearch(movieName, shortFilms)

	};

	// Отслеживаем изменения чекбокса
	const handleShortFilmsChange = () => {
		setShortFilms(!shortFilms);
		if (!movieName) {
			return;
		}
		filterCheckbox(!shortFilms);
		if (pathname === '/movies') {
			localStorage.setItem('shortFilms', !shortFilms);
		}
	};

	// После перезагрузки страницы, если фильтры были установлены и фильмы были найдены - выведи их
	useEffect(() => {
		if (pathname === '/movies') {
			const filterMovieName = localStorage.getItem('movieName');
			const filterShortFilms = JSON.parse(localStorage.getItem('shortFilms'));
			setMovieName(filterMovieName);
			setShortFilms(filterShortFilms);
			if (filterMovieName || filterShortFilms === true) {
				onSearch(filterMovieName, filterShortFilms);
			}
		}
	}, []);


	return (

		<form className="search-form" name='search-form'
			onSubmit={handleSubmit}
			noValidate>
			<div className='search-form__container'>
				<input
					className="search-form__input"
					id="search-query"
					name="movieName"
					type='text'
					placeholder="Фильм"
					required
					value={movieName || ''}
					autoComplete='off'
					onChange={handleMovieChange}
				/>
				{onError ? <span className='search-form__error'>{onError}</span> : <span className='search-form__error'>{error}</span>}
				<button
					className="button search-form__button "
					type="submit"
					aria-label="Поиск" />
			</div>
			<FilterCheckbox
				value={shortFilms} onChange={handleShortFilmsChange}
			/>
		</form >

	);
}
