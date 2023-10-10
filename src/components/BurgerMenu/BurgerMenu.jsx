import React from 'react';
import './BurgerMenu.css';
import { Navigation } from '../Navigation/Navigation';

export const BurgerMenu = ({ onOpen, onClose }) => {
	return (
		<section className={`burger-menu ${onOpen ? 'burger-menu_opened' : ''}`}>
			<div className="burger-menu__container">
				<button
					className="button burger-menu__button"
					type="button"
					aria-label="Закрыть"
					onClick={onClose} />
				<div className="burger-menu__navigation">
					<Navigation onClose={onClose} />
				</div>
			</div>
		</section>
	)
}