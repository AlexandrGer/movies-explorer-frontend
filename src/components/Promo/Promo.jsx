import React from 'react';
import './Promo.css';
import logoPromo from '../../images/logo-promo.svg';

export const Promo = () => {
	return (

		<section className="promo">
			<h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
			<img src={logoPromo} alt="Промо" className='logo-promo' />

		</section>

	)
}