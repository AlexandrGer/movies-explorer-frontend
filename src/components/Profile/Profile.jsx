import React, { useState, useContext, useEffect, useCallback } from 'react';
import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useFormWithValidation } from '../../hooks/useFormValidator';

export const Profile = ({ onSignOut, onEditUserInfo, onError }) => {

	const [isVisible, setIsVisible] = useState(false)
	const [isDisable, setIsDisable] = useState(false);
	const [error, setError] = useState('');
	const currentUser = useContext(CurrentUserContext);

	const { values, setValues, handleChange, errors, isValid, resetForm } = useFormWithValidation();

	// Берем данные из контекста и вставляем в инпуты
	useEffect(() => {
		setValues(currentUser)
	}, [setValues, currentUser])

	// Проверяем чтобы новые значения не совпадали со старыми
	useEffect(() => {
		if (currentUser.name !== values.name || currentUser.email !== values.email) {
			setIsDisable(true)
		} else {
			setIsDisable(false);
		}
	}, [currentUser.name, currentUser.email, values.name, values.email])

	function handleSubmit(e) {
		e.preventDefault();

		onEditUserInfo({
			name: values.name,
			email: values.email
		})

		resetForm();
	}

	function changeVisibility() {
		setIsVisible(true);
	}

	return (

		<section className="profile">
			<div className='profile__container'>
				<h1 className='profile__title'>Привет, {currentUser.name}!</h1>
				<form className='profile__form' name='form-profile' onSubmit={handleSubmit} noValidate>
					<div className='profile__wrapper'>
						<p className='profile__caption'>Имя</p>
						<input
							className='profile__input'
							name='name'
							type="text"
							placeholder='Имя'
							value={values.name || ''}
							onChange={handleChange}
							required
							disabled={isVisible ? false : true} />
					</div>
					<span className={errors.name ? 'profile__error profile__error_margin' : 'profile__error'}>{errors.name}</span>
					<div className='profile__wrapper'>
						<p className='profile__caption'>E-mail</p>
						<input
							className='profile__input'
							name='email'
							type="email"
							placeholder='E-mail'
							value={values.email || ''}
							onChange={handleChange}
							required
							disabled={isVisible ? false : true} />
					</div>
					<span className={errors.email ? 'profile__error' : 'profile__error'}>{errors.email}</span>
					<div className='profile__container-button'>
						{isVisible ? (<>
							<span className='profile__error profile__error_type_server' >{onError || error}</span>
							<button
								className={!isValid || !isDisable ? 'button profile__button profile__button_type_save profile__button_disable' : 'button profile__button profile__button_type_save '}
								type='submit'
								aria-label='Сохранить'
								disabled={isValid && isDisable ? false : true}>
								Сохранить
							</button>
						</>) : (<>
							<button
								className='button profile__button profile__button_type_edit'
								type='button'
								aria-label='Редактировать'
								onClick={changeVisibility}>
								Редактировать
							</button>
							<button
								className='button profile__button profile__button_type_exit'
								type='button'
								aria-label='Выход'
								onClick={onSignOut}>
								Выйти из аккаунта
							</button>
						</>)}
					</div>
				</form>
			</div>
		</section>

	)
}