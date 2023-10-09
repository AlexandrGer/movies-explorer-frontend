import React from 'react';
import './AboutMe.css';
import photo from '../../images/sudentPhoto.jpg';

export const AboutMe = () => {
	return (

		<section className="aboutMe" id='student'>
			<div className='section section_size_s'>
				<h3 className='section__title'>Студент</h3>
				<div className='aboutMe__container'>
					<div className='aboutMe__container-description'>
						<h2 className='aboutMe__title'>Александр</h2>
						<h3 className='aboutMe__subtitle'>Фронтенд-разработчик, 26 лет</h3>
						<p className='aboutMe__description'>Я родился в городе Набережные Челны республики Татарстан. Живу в Москве, закончил институт экономики и управления АПК в РГАУ-МСХА им. К.А. Тимирязева. У меня есть жена. Я люблю слушать музыку, а ещё увлекаюсь сериалами. Недавно начал кодить. Раньше работал в компании ЗАО «Incarnet». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
						<a href="https://github.com/AlexandrGer" target='blank' className='aboutMe__link'>Github</a>
					</div>
					<img src={photo} alt="Фото студента" className='aboutMe__photo' />
				</div>
				<ul className='portfolio'> Портфолио
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