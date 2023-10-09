import React from 'react';
import './ShowMore.css';
import { useLocation } from 'react-router-dom';

export const ShowMore = ({ onClick }) => {
	const { pathname } = useLocation();
	return (
		<div className={pathname !== '/saved-movies' ? 'showMore' : 'showMore_disable'}>
			<button
				className='button showMore__button'
				type='button'
				onClick={onClick}
			>Ещё</button>
		</div>
	);
}
