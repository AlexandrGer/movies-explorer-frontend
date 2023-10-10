import React from 'react';
import './AboutMe.css';
import photo from '../../images/sudentPhoto.jpg';

export const AboutMe = () => {
	return (

		<section className="about-me" id='student'>
			<div className='section section_size_s'>
				<h2 className='section__title'>Студент</h2>
				<div className='about-me__container'>
					<div className='about-me__container-description'>
						<h3 className='about-me__title'>Александр</h3>
						<p className='about-me__subtitle'>Фронтенд-разработчик, 26 лет</p>
						<p className='about-me__description'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
							С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
						<a href="https://github.com/AlexandrGer" target='blank' className='about-me__link'>Github</a>
					</div>
					<img src={photo} alt="Фото студента" className='about-me__photo' />
				</div>
				<h4 className='portfolio__title'>Портфолио</h4>
				<ul className='portfolio'>
					<li className='portfolio__item'>
						<a href="https://github.com/AlexandrGer" target='blank' className='portfolio__link'>Статичный сайт
							<span className='portfolio__icon'>&#8599;</span>
						</a>
					</li>
					<li className='portfolio__item'>
						<a href="https://github.com/AlexandrGer" target='blank' className='portfolio__link'>Адаптивный сайт
							<span className='portfolio__icon'>&#8599;</span>
						</a>
					</li>
					<li className='portfolio__item'>
						<a href="https://github.com/AlexandrGer" target='blank' className='portfolio__link'>Одностраничное приложение
							<span className='portfolio__icon'>&#8599;</span>
						</a>
					</li>
				</ul>
			</div>
		</section>

	)
}