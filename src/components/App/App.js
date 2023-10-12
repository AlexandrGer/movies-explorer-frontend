import React, { useEffect, useState, useCallback } from 'react';
import { Main } from '../Main/Main';
import './App.css';
import { Movies } from '../Movies/Movies';
import { Routes, Route, useLocation, Navigate, useNavigate } from 'react-router-dom';
import { ProtectedRoute } from '../ProtectedRoute';
import { SavedMovies } from '../SavedMovies/SavedMovies';
import { Register } from '../Register/Register';
import { Login } from '../Login/Login';
import { Header } from '../Header/Header';
import { Profile } from '../Profile/Profile';
import { PageNotFound } from '../PageNotFound/PageNotFound';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { Footer } from '../Footer/Footer';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { auth } from '../../utils/AuthApi';
import { api } from '../../utils/MainApi';
import { moviesApi } from '../../utils/MoviesApi';
import { filterMovieDuration, filterMovieName } from '../../utils/filtration';



function App() {
	const navigate = useNavigate();
	const { pathname } = useLocation();
	const [burgerIsOpened, setBurgerIsOpened] = useState(false);

	const [currentUser, setCurrentUser] = React.useState({

	});

	const [serverError, setServerError] = useState('');

	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [isLoading, setIsLoading] = React.useState(false);

	const [movies, setMovies] = useState([]);


	function burgerOpen() {
		setBurgerIsOpened(true);
	}

	function burgerClose() {
		setBurgerIsOpened(false);
	}

	function resetServerMessage() {
		setServerError('');
	}

	useEffect(() => {
		resetServerMessage();
	}, [navigate]);


	// Регистрация пользователя
	function handleRegister({ name, email, password }) {
		auth.register({ name, email, password }).then(() => {
			handleLogin({ email, password })
		}).catch((err) => {
			setServerError(err.message);
		})
	}

	// Пользователь авторизовался
	function handleLogin({ email, password }) {
		auth.authorize({ email, password }).then((data) => {
			localStorage.setItem("jwt", data.token);
			setIsLoggedIn(true);
			navigate('/movies');
		}).catch((err) => {
			setServerError(err.message);
		})
	}

	// Проверка токена
	useEffect(() => {
		function handleTokenCheck() {
			const token = localStorage.getItem("jwt");
			if (token) {
				auth.checkToken(token)
					.then(() => {
						setIsLoggedIn(true);
						navigate('/movies');
					})
					.catch((err) => {
						console.log(err.status);
					});
			}
		}
		handleTokenCheck();
	}, [])

	// Выход пользователя
	function handleOnSignOut() {
		localStorage.removeItem("jwt");
		setCurrentUser('');
		setIsLoggedIn(false);
		navigate('/');
	}

	useCallback(() => {
		handleOnSignOut();
	}, [navigate])

	useEffect(() => {
		if (isLoggedIn) {

			api.getUserData().then((user) => {
				setCurrentUser(user);
			}).catch((err) => console.log(`При загрузке данных Пользователя возникла ошибка: ${err}`))
		}
	}, [isLoggedIn])

	//Обновление данных о пользователе
	function handleEditUserInfo({ name, email }) {
		api.sendUserData({ name, email }).then(() => {
			setCurrentUser({ name, email });
			setServerError('Данные успешно обновлены');
		}).catch((err) => {
			setServerError(err.message);
		})
	}





	return (
		<CurrentUserContext.Provider value={currentUser}>
			<div className={pathname === '/' ? 'page' : 'page page_color_dark'}>
				<div className='page__container'>
					{pathname === '/' || pathname === '/movies' || pathname === '/saved-movies' || pathname === '/profile' ? (
						<Header isLoggedIn={isLoggedIn} onOpen={burgerOpen} onClose={burgerClose} />) : ('')}
					{isLoggedIn && <BurgerMenu onOpen={burgerIsOpened} onClose={burgerClose} />}
					<main>
						<Routes>
							<Route path='/signup' element={<Register onRegister={handleRegister} onError={serverError} />} />
							<Route path='/signin' element={<Login onLogin={handleLogin} onError={serverError} />} />
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
								/>} />
							<Route path='/profile' element={
								<ProtectedRoute
									element={Profile}
									isLoggedIn={isLoggedIn}
									onSignOut={handleOnSignOut}
									onEditUserInfo={handleEditUserInfo}
									onError={serverError}
								/>} />
							<Route path='*' element={<PageNotFound />} />
						</Routes>
					</main>
					{pathname === '/' || pathname === '/movies' || pathname === '/saved-movies' ? (<Footer></Footer>) : ''}

				</div>
			</div>
		</CurrentUserContext.Provider>
	);
}

export default App;
