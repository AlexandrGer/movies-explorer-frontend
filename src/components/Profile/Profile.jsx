import React, { useState } from 'react';
import './Profile.css';

export const Profile = () => {

	const [isValid, setIsValid] = useState(true);
	const [isVisible, setIsVisible] = useState(false)

	function handleSubmit(e) {
		e.preventDefault();
	}

	function changeVisibility() {
		setIsVisible(true);
	}

	return (

		<section className="profile">
			<div className='profile__container'>
				<h2 className='profile__title'>Привет, Виталий!</h2>
				<form className='profile__form' name='form-profile' onSubmit={handleSubmit}>
					<div className='profile__wrapper'>
						<p className='profile__caption'>Имя</p>
						<input
							className='profile__input'
							name='name'
							type="text"
							placeholder='Имя'
							disabled={isVisible ? false : true} />
					</div>
					<span className={isValid ? 'profile__error profile__error_hidden' : 'profile__error'}></span>  {/* profile__error_margin*/}
					<div className='profile__wrapper'>
						<p className='profile__caption'>E-mail</p>
						<input
							className='profile__input'
							name='email'
							type="email"
							placeholder='E-mail'
							disabled={isVisible ? false : true} />
					</div>
					<span className={isValid ? 'profile__error profile__error_hidden' : 'profile__error'}>Что-то пошло не так...</span>
					<div className='profile__container-button'>
						{isVisible ? (<>
							<span className={isValid ? 'profile__error profile__error_type_server profile__error_hidden' : 'profile__error profile__error_type_server'}>При обновлении профиля произошла ошибка.</span>
							<button
								className={isValid ? 'button profile__button profile__button_type_save' : 'button profile__button profile__button_type_save profile__button_disable'}
								type='submit'
								aria-label='Сохранить'
								disabled={isValid ? false : true}>
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
								aria-label='Выход'>
								Выйти из аккаунта
							</button>
						</>)}
					</div>
				</form>
			</div>
		</section>

	)
}