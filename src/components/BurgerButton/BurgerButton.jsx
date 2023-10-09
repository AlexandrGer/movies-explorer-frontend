import React from 'react';
import './BurgerButton.css';

export const BurgerButton = ({ onOpen }) => {

	return (

		<button
			className='button burgerButton'
			type='button'
			aria-label="Бургер меню"
			onClick={onOpen} />

	)
}