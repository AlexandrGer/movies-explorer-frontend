import React from 'react';
import './BurgerButton.css';

export const BurgerButton = ({ onOpen }) => {

	return (

		<button
			className='button burger-button'
			type='button'
			aria-label="Бургер меню"
			onClick={onOpen} />

	)
}