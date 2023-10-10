import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import '../FormAuth/FormAuth.css';

export const Register = () => {

	const [isValid, setIsValid] = useState(false);

	function handleSubmit(e) {
		e.preventDefault();
	}

	return (

		<section className='form'>
			<div className='form__container'>
				<Link to='/' className='form__link'>
					<img className='form__logo' src={logo} alt="Логотип" />
				</Link>
				<h1 className='form__title'>Добро пожаловать!</h1>
				<form className='form__auth' name='form-reg' onSubmit={handleSubmit}>
					<div className='form__wrapper'>
						<p className='form__caption'>Имя</p>
						<input
							// className={isValid ? 'form__input' : 'form__input form__input_error'}
							className='form__input'
							name='name'
							type='text'
							placeholder='Имя'
							required />
						<span className={isValid ? 'form__error form__error_hidden' : 'form__error'}></span>
					</div>
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
					<span className='form__error form__error_type_server form__error_hidden'>При регистрации пользователя произошла ошибка.</span>
					<button
						className={isValid ? 'button form__button' : 'button form__button form__button_disable'}
						type='submit'
						aria-label='Зарегистрироваться'
						disabled={isValid ? false : true}
					>Зарегистрироваться</button>
				</form>
				<p className='form__text'>
					Уже зарегистрированы?
					<Link to="/signin" className="form__link-footer">
						Войти
					</Link>
				</p>
			</div>
		</section>

	)

}