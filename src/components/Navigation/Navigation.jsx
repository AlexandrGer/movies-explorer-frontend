import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navigation.css';

export const Navigation = ({ onClose }) => {
	return (

		<nav className='navigation'>
			<ul className='navigation__items'>
				<li className='navigation__item'>
					<NavLink to="/" className={({ isActive }) => `${isActive ? "navigation__link navigation__link_hiden navigation__link_active" : "navigation__link navigation__link_hiden"}`}
						onClick={onClose}>
						Главная
					</NavLink>
				</li>
				<li className='navigation__item'>
					<NavLink to="/movies" className={({ isActive }) => `${isActive ? "navigation__link navigation__link_active" : "navigation__link"}`}
						onClick={onClose}>
						Фильмы
					</NavLink>
				</li>
				<li className='navigation__item'>
					<NavLink to="/saved-movies" className={({ isActive }) => `${isActive ? "navigation__link navigation__link_active" : "navigation__link"}`}
						onClick={onClose}>
						Сохранённые фильмы
					</NavLink>
				</li>
			</ul>
			<Link to="/profile" className='navigation__link-account'>
				<button
					className="button navigation__button"
					type='button'
					aria-label="Аккаунт"
					onClick={onClose}>
				</button>
			</Link >
		</nav >

	)
}