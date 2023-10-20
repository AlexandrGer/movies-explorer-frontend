import React from 'react';
import './Main.css';
import { Promo } from '../Promo/Promo';
import { NavTab } from '../NavTab/NavTab';
import { AboutProject } from '../AboutProject/AboutProject';
import { Techs } from '../Techs/Techs';
import { AboutMe } from '../AboutMe/AboutMe';

export const Main = () => {

	return (
		<>
			<Promo></Promo>
			<NavTab></NavTab>
			<AboutProject></AboutProject>
			<Techs></Techs>
			<AboutMe></AboutMe>
		</>
	)
}