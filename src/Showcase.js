import { Beer, Burger, Drink, HotDog, Pizza, Soup, Taco, Sushi, Cake } from "./svg/pageIcon"

import React from 'react';
import {AnimateComponent} from "./AnimateComponent.js"

const variantsImage = () => ({
    0: <Beer/>,
    1: <Drink/>,
    2: <Burger/>,
    3: <HotDog/>,
    4: <Pizza/>,
    5: <Soup/>,
    6: <Taco/>,
    7: <Sushi/>,
    8: <Cake/>,
});const componentsImage = variantsImage();

const variantsText = () => ({
    0: 'Beer • 160₽',
    1: 'Drink • 120₽',
    2: 'Burger • 240₽',
    3: 'HotDog • 100₽',
    4: 'Pizza • 200₽',
    5: 'Soup • 250₽',
    6: 'Taco • 100₽',
    7: 'Sushi • 300₽',
    8: 'Cake • 400₽',
});const componentsText = variantsText();

const Showcase = ({index,name}) => {
	return (
		<div className="showcaseContainer">
			<AnimateComponent
				className="showcaseCountProduct"
				index={index}
			/>
			<div 
				className="showcaseImageProduct">
				{componentsImage[index]}
			</div>
			<div 
				className="showcaseNameProduct">
				{<span>
					{componentsText[index]}
				</span>}
			</div>
		</div>
	);
};

export default Showcase;