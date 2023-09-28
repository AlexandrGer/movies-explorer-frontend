import React from 'react';
import './Footer.css';

export const Footer = () => {
	return (

		<footer className="footer">
			<div className='section__container'>
				<p className='footer__text'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
				<div className='footer__container'>
					<p className='footer__copyright'>© 2023</p>
					<div className='footer__links'>
						<a href="/" className='footer__link'>Яндекс.Практикум</a>
						<a href="/" className='footer__link'>Github</a>
					</div>
				</div>
			</div>
		</footer>

	)
}