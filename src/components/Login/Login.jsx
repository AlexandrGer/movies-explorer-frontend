import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import '../FormAuth/FormAuth.css';

export const Login = () => {

	const [isValid, setIsValid] = useState(true);

	function handleSubmit(e) {
		e.preventDefault();
	}

	return (

		<section className='form'>
			<div className='form__container'>
				<Link to='/' className='form__link'>
					<img className='form__logo' src={logo} alt="Логотип" />
				</Link>
				<h2 className='form__title'>Рады видеть!</h2>
				<form className='form__auth' name='form-login' onSubmit={handleSubmit}>
					<div className='form__wrapper'>
						<p className='form__caption'>E-mail</p>
						<input
							// className={isValid ? 'form__input' : 'form__input form__input_error'}
							className='form__input'
							name='email'
							type='email'
							placeholder='E-mail'
							required />
						<span className={isValid ? 'form__error form__error_hidden' : 'form__error'}></span>
					</div>
					<div className='form__wrapper'>
						<p className='form__caption'>Пароль</p>
						<input
							className={isValid ? 'form__input' : 'form__input form__input_error'}
							name='password'
							type='password'
							placeholder='Пароль'
							required />
						<span className={isValid ? 'form__error form__error_hidden' : 'form__error'}>Что-то пошло не так...</span>
					</div>
					<span className='form__error form__error_type_server form__error_margin form__error_hidden'>Вы ввели неправильный логин или пароль.</span>
					<button
						className={isValid ? 'button form__button' : 'button form__button form__button_disable'}
						type='submit'
						aria-label='Войти'
						disabled={isValid ? false : true}>
						Войти
					</button>
				</form>
				<p className='form__text'>
					Ещё не зарегистрированы?
					<Link to="/signup" className="form__link-footer">
						Регистрация
					</Link>
				</p>
			</div>
		</section>

	)
}