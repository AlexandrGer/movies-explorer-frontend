import React from 'react';
import './BurgerMenu.css';
import { Navigation } from '../Navigation/Navigation';

export const BurgerMenu = ({ onOpen, onClose }) => {
	return (
		<section className={`burgerMenu ${onOpen ? 'burgerMenu_opened' : ''}`}>
			<div className="burgerMenu__container">
				<button
					className="button burgerMenu__button"
					type="button"
					aria-label="Закрыть"
					onClick={onClose} />
				<div className="burgerMenu__navigation">
					<Navigation onClose={onClose} />
				</div>
			</div>
		</section>
	)
}