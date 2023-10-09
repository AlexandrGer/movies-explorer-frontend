import React from 'react';
import './Header.css';
import logo from '../../images/logo.svg';
import { Navigation } from '../Navigation/Navigation';
import { Link, useLocation } from 'react-router-dom';
import { NavAuth } from '../NavAuth/NavAuth';
import { BurgerButton } from '../BurgerButton/BurgerButton';

export const Header = ({ isLoggedIn, onOpen, onClose }) => {
	const { pathname } = useLocation();

	return (
		<header className={pathname === '/' ? 'header header_color_blue' : 'header'}>
			< div className="header__container" >
				<Link to="/" className='header__link'>
					<img src={logo} alt="Логотип" className="header__logo" />
				</Link>
				<div className='header__wrapper'>
					{isLoggedIn ?
						<>
							<div className='header__navigation'>
								<Navigation onClose={onClose} />
							</div>
							<BurgerButton onOpen={onOpen} />
						</> : <NavAuth />}
				</div>
			</div>
		</header >
	)
}