import React from 'react';
import { Link } from 'react-router-dom';
import './PageNotFound.css';

export const PageNotFound = () => {

	return (

		<section className="notFound">
			<div className='notFound__container'>
				<h2 className='notFound__title'>404</h2>
				<p className='notFound__captipn'>Страница не найдена</p>
				<Link to='/' className='notFound__link'>Назад</Link>
			</div>
		</section>

	)
}