import React from 'react';
import './NavTab.css';

export const NavTab = () => {
	return (

		<section className="nav-tab">
			<div className='nav-tab__container'>
				<a href="#about-project" className='nav-tab__link'>О проекте</a>
				<a href="#technology" className='nav-tab__link'>Технологии</a>
				<a href="#student" className='nav-tab__link'>Студент</a>
			</div>
		</section>

	)
}