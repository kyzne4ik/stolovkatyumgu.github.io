import { Beer, Burger, Drink, HotDog, Pizza, Soup } from "./svg/pageIcon"

import React from 'react';

import {AnimateComponent} from "./AnimateComponent.js"

const getStyleSpan = () => {
	return {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: '14px',
	}
}

const variantsImage = () => ({
    0: <Beer/>,
    1: <Drink/>,
    2: <Burger/>,
    3: <HotDog/>,
    4: <Pizza/>,
    5: <Soup/>,
});const componentsImage = variantsImage();

const variantsText = () => ({
    0: 'Beer',
    1: 'Drink',
    2: 'Burger',
    3: 'HotDog',
    4: 'Pizza',
    5: 'Soup',
});const componentsText = variantsText();

const Showcase = ({index,name}) => {
	return (
		<div>
			<AnimateComponent
				index={index}
			/>
			<div style={{
				marginLeft: '6px'
			}}>
				{componentsImage[index]}
			</div>
			<div>
				{<span style={getStyleSpan()}>
					{componentsText[index]}
				</span>}
			</div>
		</div>
	);
};

export default Showcase;