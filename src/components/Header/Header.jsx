import React from 'react';
import './Header.css';
import logo from '../../images/logo.svg';
import account from '../../images/account-1.svg';

import { Routes, Route, Link } from 'react-router-dom';

export const Header = () => {
	return (

		<header className="header">
			<div className="header__container">
				<div className='header__navigation'>
					<Link to="#" className='header__link'>
						<img src={logo} alt="Логотип" className="header__logo" />
					</Link>
					{/* Авторизованный пользователь */}
					{/* <Link to="#" className="header__link">Фильмы</Link>
					<Link to="#" className="header__link">Сохранённые фильмы</Link> */}
				</div>
				{/* <Link to="#" className="header__link-account">
					<img src={account} alt="Аккаунт" className='header__account-icon' />
				</Link> */}


				<div className='header__authorization'>
					<Link to="#" className="header__link-authorization">Регистрация</Link>
					<Link to="#" className="header__link-authorization header__link-authorization_theme_green">Войти</Link>
				</div>
			</div>

		</header>
	)
}