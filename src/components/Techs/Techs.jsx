import React from 'react';
import './Techs.css';

export const Techs = () => {
	return (

		<section className="technology" id='technology'>
			<div className='section'>
				<h2 className='section__title'>Технологии</h2>
				<h3 className='technology__title'>7 технологий</h3>
				<p className='technology__subtitle'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
				<ul className='stack'>
					<li className='stack__cell'>
						<p className='stack__text'>HTML</p>
					</li>
					<li className='stack__cell'>
						<p className='stack__text'>CSS</p>
					</li>
					<li className='stack__cell'>
						<p className='stack__text'>JS</p>
					</li>
					<li className='stack__cell'>
						<p className='stack__text'>React</p>
					</li>
					<li className='stack__cell'>
						<p className='stack__text'>Git</p>
					</li>
					<li className='stack__cell'>
						<p className='stack__text'>Express.js</p>
					</li>
					<li className='stack__cell'>
						<p className='stack__text'>mongoDB</p>
					</li>
				</ul>
			</div>
		</section>

	)
}