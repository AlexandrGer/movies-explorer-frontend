import React from 'react';
import './NavTab.css';

export const NavTab = () => {
	return (

		<section className="nav-tab">
			<ul className='nav-tab__items'>
				<li className='nav-tab__item'>
					<a href="#about-project" className='nav-tab__link'>О проекте</a>
				</li>
				<li className='nav-tab__item'>
					<a href="#technology" className='nav-tab__link'>Технологии</a>
				</li>
				<li className='nav-tab__item'>
					<a href="#student" className='nav-tab__link'>Студент</a>
				</li>
			</ul>
		</section>

	)
}