import React, { createContext, useState } from "react"
import { useAnimation } from 'framer-motion';

export const MyContext = createContext();// контекст для состояний

export const MyProvider = ({ children }) => {
	const [showElement, setShowElement] = useState(Array.from({ length: 6 }).fill(false));
	const [countProduct, setCountProduct] = useState(Array.from({ length: 6 }).fill(0));
	const [clicked, setClicked] = useState(Array.from({ length: 6 }).fill(false));
	const [textButton, setTextButton] = useState(Array.from({ length: 6 }).fill('ADD'));
	const controls = [
		useAnimation(),
		useAnimation(),
		useAnimation(),
		useAnimation(),
		useAnimation(),
		useAnimation(),
	];

	return (
		<MyContext.Provider value={{
			showElement,
			setShowElement,
			countProduct,
			setCountProduct,
			clicked,
			setClicked,
			textButton,
			setTextButton,
			controls,
		}}>
			{children}
		</MyContext.Provider>
	);
};

// export default MyProvider;