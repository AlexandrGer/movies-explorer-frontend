import React from 'react';
import './NavTab.css';

export const NavTab = () => {
	return (

		<section className="navigation">
			<div className='navigation__container'>
				<a href="/" className='navigation__link'>О проекте</a>
				<a href="/" className='navigation__link'>Технологии</a>
				<a href="/" className='navigation__link'>Студент</a>
			</div>
		</section>

	)
}