import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import '../FormAuth/FormAuth.css';
import { useFormWithValidation } from '../../hooks/useFormValidator';

export const Login = ({ onLogin, onError, isLoading }) => {

	const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

	function handleSubmit(e) {
		e.preventDefault();

		onLogin({
			email: values.email,
			password: values.password
		})

		resetForm();
	}

	return (

		<section className='form'>
			<div className='form__container'>
				<Link to='/' className='form__link'>
					<img className='form__logo' src={logo} alt="Логотип" />
				</Link>
				<h1 className='form__title'>Рады видеть!</h1>
				<form className='form__auth' name='form-login' onSubmit={handleSubmit} noValidate>
					<div className='form__wrapper'>
						<p className='form__caption'>E-mail</p>
						<input
							className={errors.email ? 'form__input form__input_error' : 'form__input'}
							name='email'
							type='email'
							placeholder='E-mail'
							value={values.email || ''}
							onChange={handleChange}
							required
							pattern='^[a-zA-Z0-9_.+\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-.]+$'
							autoComplete='off'
							disabled={isLoading} />
						<span className={errors.email ? 'form__error' : 'form__error'}>{errors.email}</span>
					</div>
					<div className='form__wrapper'>
						<p className='form__caption'>Пароль</p>
						<input
							className={errors.password ? 'form__input form__input_error' : 'form__input'}
							name='password'
							type='password'
							placeholder='Пароль'
							value={values.password || ''}
							onChange={handleChange}
							required
							autoComplete='off'
							disabled={isLoading} />
						<span className={errors.password ? 'form__error' : 'form__error'}>{errors.password}</span>
					</div>
					<span className='form__error form__error_type_server form__error_margin'>{onError}</span>
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