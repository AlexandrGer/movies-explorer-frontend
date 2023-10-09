import React from 'react';
import './Footer.css';

export const Footer = () => {
	return (

		<footer className="footer">
			<div className='footer__wrapper'>
				<p className='footer__text'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
				<div className='footer__container'>
					<p className='footer__copyright'>© 2023</p>
					<div className='footer__links'>
						<a href="https://practicum.yandex.ru/" target='blank' className='footer__link'>Яндекс.Практикум</a>
						<a href="https://github.com/AlexandrGer" target='blank' className='footer__link'>Github</a>
					</div>
				</div>
			</div>
		</footer>

	)
}