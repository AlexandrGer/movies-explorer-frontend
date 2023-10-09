import React from 'react';
import { Link } from 'react-router-dom';
import './NavAuth.css';


export const NavAuth = () => {

	return (
		<nav className="nav-auth">
			<ul className='nav-auth__items'>
				<li className='nav-auth__item'>
					<Link to="/signup" className="nav-auth__link">Регистрация</Link>
				</li>
				<li className='nav-auth__item'>
					<Link to="/signin" className="nav-auth__link nav-auth__link_theme_green">Войти</Link>
				</li>
			</ul>
		</nav>
	);
}
