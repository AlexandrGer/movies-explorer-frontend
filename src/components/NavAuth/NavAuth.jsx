import React from 'react';
import { Link } from 'react-router-dom';
import './NavAuth.css';


export const NavAuth = () => {

	return (
		<nav className="navAuth">
			<ul className='navAuth__items'>
				<li className='navAuth__item'>
					<Link to="/signup" className="navAuth__link">Регистрация</Link>
				</li>
				<li className='navAuth__item'>
					<Link to="/signin" className="navAuth__link navAuth__link_theme_green">Войти</Link>
				</li>
			</ul>
		</nav>
	);
}
