import React, { useState } from 'react';
import { Main } from '../Main/Main';
import './App.css';
import { Movies } from '../Movies/Movies';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ProtectedRoute } from '../ProtectedRoute';
import { SavedMovies } from '../SavedMovies/SavedMovies';
import { Register } from '../Register/Register';
import { Login } from '../Login/Login';
import { Header } from '../Header/Header';
import { Profile } from '../Profile/Profile';
import { PageNotFound } from '../PageNotFound/PageNotFound';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
// Временно
import { initialMovies } from '../moviesList';


function App() {

	const { pathname } = useLocation();
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [burgerIsOpened, setBurgerIsOpened] = useState(false);
	const [movies, setMovies] = useState(initialMovies);

	function burgerOpen() {
		setBurgerIsOpened(true);
	}

	function burgerClose() {
		setBurgerIsOpened(false);
	}


	return (
		<div className={pathname === '/' ? 'page' : 'page page_color_dark'}>
			<div className='page__container'>
				{pathname === '/' || pathname === '/movies' || pathname === '/saved-movies' || pathname === '/profile' ? (
					<Header isLoggedIn={isLoggedIn} onOpen={burgerOpen} onClose={burgerClose} />) : ('')}
				{isLoggedIn && <BurgerMenu onOpen={burgerIsOpened} onClose={burgerClose} />}
				<Routes>
					<Route path='/signup' element={<Register />} />
					<Route path='/signin' element={<Login />} />
					<Route path='/' element={<Main />} />
					<Route path='/movies' element={
						<ProtectedRoute
							element={Movies}
							isLoggedIn={isLoggedIn}
							movies={movies}
						/>}
					/>
					<Route path='/saved-movies' element={
						<ProtectedRoute
							element={SavedMovies}
							isLoggedIn={isLoggedIn}
							movies={movies}
						/>} />
					<Route path='/profile' element={
						<ProtectedRoute
							element={Profile}
							isLoggedIn={isLoggedIn}
						/>} />
					<Route path='*' element={<PageNotFound />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
