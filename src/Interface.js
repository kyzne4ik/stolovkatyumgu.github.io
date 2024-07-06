import { useContext } from "react"
import { MyContext } from './MyContext';

import Showcase from "./Showcase"
import Buttons from "./Buttons"


const Interface = ({index}) => {
	const {
			//showElement, 
			countProduct, 
	} = useContext(MyContext);
	return (
	<div>
		<div>
			<Showcase
				index={index}
				countProduct={countProduct}
			/>
		</div>
		<div>
			<Buttons 
				index={index} 
				name="remove-button" 
			/>
		</div>
		<div>
			<Buttons 
				index={index} 
				name="add-button" 
			/>
		</div>
	</div>
	);
};
export default Interface;