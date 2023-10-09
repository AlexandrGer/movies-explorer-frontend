import React from 'react';
import { Link } from 'react-router-dom';
import './PageNotFound.css';

export const PageNotFound = () => {

	return (

		<section className="not-found">
			<div className='not-found__container'>
				<h2 className='not-found__title'>404</h2>
				<p className='not-found__captipn'>Страница не найдена</p>
				<Link to='/' className='not-found__link'>Назад</Link>
			</div>
		</section>

	)
}