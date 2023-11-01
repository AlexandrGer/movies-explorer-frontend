import React, { useEffect, useState, useCallback } from 'react';
import { Main } from '../Main/Main';
import './App.css';
import { Movies } from '../Movies/Movies';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
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




function App() {
	const navigate = useNavigate();
	const { pathname } = useLocation();
	const [burgerIsOpened, setBurgerIsOpened] = useState(false);

	const [currentUser, setCurrentUser] = useState({});

	const [serverErrorMessage, setServerErrorMessage] = useState('');
	const [serverSuccessMessage, setServerSuccessMessage] = useState('');

	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [savedMovies, setSavedMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(false);




	function burgerOpen() {
		setBurgerIsOpened(true);
	}

	function burgerClose() {
		setBurgerIsOpened(false);
	}

	function resetServerMessage() {
		setServerErrorMessage('');
	}

	useEffect(() => {
		resetServerMessage();
	}, [navigate]);


	// Регистрация пользователя
	function handleRegister({ name, email, password }) {
		setIsLoading(true);
		auth.register({ name, email, password }).then(() => {
			handleLogin({ email, password })
		}).catch((err) => {
			setServerErrorMessage(err.message);
		})
		setIsLoading(false);
	}

	// Пользователь авторизовался
	function handleLogin({ email, password }) {
		setIsLoading(true);
		auth.authorize({ email, password }).then((data) => {
			localStorage.setItem("jwt", data.token);
			setIsLoggedIn(true);
			navigate('/movies');
		}).catch((err) => {
			setServerErrorMessage(err.message);
		})
		setIsLoading(false);
	}

	// Проверка токена
	useEffect(() => {
		function handleTokenCheck() {
			const token = localStorage.getItem("jwt");
			if (token) {
				auth.checkToken(token)
					.then(() => {
						setIsLoggedIn(true);
						navigate(useLocation);
					})
					.catch((err) => {
						console.log(err.status);
					});
			}
		}
		handleTokenCheck();
	}, [])

	// Выход пользователя
	const handleOnSignOut = useCallback(() => {
		localStorage.clear();
		setIsLoggedIn(false);
		setCurrentUser('');
		navigate('/');
	}, [navigate]);

	useEffect(() => {
		if (isLoggedIn) {

			api.getUserData().then((user) => {
				setCurrentUser(user);
			}).catch((err) => console.log(`При загрузке данных Пользователя возникла ошибка: ${err}`))

			api.getSavedMovies().then((savedMovies) => {
				localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
				setSavedMovies(savedMovies);
			}).catch((err) => console.log(`При загрузке сохраненных фильмов возникла ошибка: ${err}`))
		}
	}, [isLoggedIn])

	useEffect(() => {
		isLoggedIn &&
			localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
	}, [savedMovies, isLoggedIn]);


	//Обновление данных о пользователе
	function handleEditUserInfo({ name, email }) {
		setIsLoading(true);
		api.sendUserData({ name, email }).then(() => {
			setCurrentUser({ name, email });
			setServerSuccessMessage('Данные успешно обновлены');
		}).catch((err) => {
			setServerErrorMessage(err.message);
		})
		setIsLoading(false);
	}

	// Добавить фильм в сохраненные
	function handleMovieLike(movie) {
		api.addMovie({
			country: movie.country,
			director: movie.director,
			duration: movie.duration,
			year: movie.year,
			description: movie.description,
			image: 'https://api.nomoreparties.co' + movie.image.url,
			trailerLink: movie.trailerLink,
			thumbnail: 'https://api.nomoreparties.co' + movie.image.formats.thumbnail.url,
			movieId: movie.id,
			nameRU: movie.nameRU,
			nameEN: movie.nameEN,
		}).then((newMovie) => {
			setSavedMovies([newMovie, ...savedMovies]);
		}).catch((err) => console.log(`При сохраненнии фильма возникла ошибка: ${err}`));
	}

	// Удалить фильм из сохраненных
	function handleMovieDelete(movie) {
		api.deleteMovie(movie._id).then(() => {
			setSavedMovies((savedMovies) => savedMovies.filter((item) => item.movieId !== movie.movieId));
		}).catch((err) => console.log(`При удалении фильма возникла ошибка: ${err}`))
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
							<Route path='/signup' element={<Register
								onRegister={handleRegister}
								onError={serverErrorMessage}
								isLoading={isLoading} />} />

							<Route path='/signin' element={<Login
								onLogin={handleLogin}
								onError={serverErrorMessage}
								isLoading={isLoading} />} />

							<Route path='/' element={<Main />} />

							<Route path='/movies' element={
								<ProtectedRoute
									element={Movies}
									isLoggedIn={isLoggedIn}
									savedMovies={savedMovies}
									onLikeMovie={handleMovieLike}
									onDeleteMovie={handleMovieDelete}
								/>} />

							<Route path='/saved-movies' element={
								<ProtectedRoute
									element={SavedMovies}
									isLoggedIn={isLoggedIn}
									savedMovies={savedMovies}
									onDeleteMovie={handleMovieDelete}
								/>} />

							<Route path='/profile' element={
								<ProtectedRoute
									element={Profile}
									isLoggedIn={isLoggedIn}
									onSignOut={handleOnSignOut}
									onEditUserInfo={handleEditUserInfo}
									onError={serverErrorMessage}
									onSuccess={serverSuccessMessage}
									isLoading={isLoading} />} />

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
