import React from 'react';
import './NavTab.css';

export const NavTab = () => {
	return (

		<section className="navTab">
			<div className='navTab__container'>
				<a href="#aboutProject" className='navTab__link'>О проекте</a>
				<a href="#technology" className='navTab__link'>Технологии</a>
				<a href="#student" className='navTab__link'>Студент</a>
			</div>
		</section>

	)
}