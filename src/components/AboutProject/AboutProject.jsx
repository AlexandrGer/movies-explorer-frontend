import React from 'react';
import './AboutProject.css';

export const AboutProject = () => {
	return (

		<section className="about-project" id='about-project'>
			<div className='section'>
				<h2 className='section__title'>О проекте</h2>
				<ul className='about-project-info'>
					<li className='about-project-info__cell'>
						<h3 className='about-project-info__heading'>Дипломный проект включал 5 этапов</h3>
						<p className='about-project-info__text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
					</li>
					<li className='about-project-info__cell'>
						<h3 className='about-project-info__heading'>На выполнение диплома ушло 5 недель</h3>
						<p className='about-project-info__text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
					</li>
				</ul>
				<ul className='deadlines'>
					<li className='deadlines__cell deadlines__cell_theme_green'>
						<p className='deadlines__text deadlines__text_theme_green'>1 неделя</p>
						<p className='deadlines__caption'>Back-end</p>
					</li>
					<li className='deadlines__cell'>
						<p className='deadlines__text'>4 недели</p>
						<p className='deadlines__caption'>Front-end</p>
					</li>
				</ul>
			</div>
		</section>

	)
}