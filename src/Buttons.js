import { useContext } from "react"
import { AnimatePresence,motion } from "framer-motion"

import Handles from "./Handles"
import { MyContext } from './MyContext';

function getStyles(name){
	const global = {
		display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
		color: 'white',
		borderRadius: '18px',
		border: 'none',
		cursor: 'pointer',
		overflow: 'hidden',
		fontFamily: 'Helvetica',
		fontWeight: 'bolder',
		userSelect: 'none',
		WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
		fontSize: '29px',
	}
	if(name==='add-button'){
		return {
			...global,
            position: 'relative',
            backgroundColor:'#f8a917',
        }
	}
	else if(name==='remove-button'){
		return {
			...global,
			position: 'absolute',
			backgroundColor:'#e64d44',
            transformOrigin: 'center',
        }
	}
	else{
		return undefined
	}
}

function getAnimate(name,isClicked){
	if(name==='add-button'){
		return {
        	width: isClicked ? 54 : 108,
        	x: isClicked ? 54 : 0,
        	height: 45,
        }
	}
	else if(name==='remove-button'){
		return {
        	width: 54,
        	height: 45,
        	transform: 'scale(1)',
        }
	}
	else{
		return undefined
	}
}

function getInitial(name){
	if(name==='add-button'){
		return {
        	width:'108px',
        	height:'45px',
        	x:0,
        	y:0,
        }
	}
	else if(name==='remove-button'){
		return {
        	width:'54px',
        	height:'45px',
        	transform: 'scale(0.5)',
        	x:0,
        	y:0,
        }
	}
	else{
		return undefined
	}
}

function getAnimateExit(name){
    if(name==='remove-button'){
        return {
        	width:'54px',
        	height:'45px',
        	transform: 'scale(0.5)',
        	x:0,
        	y:0,
        }
    }
    else{
        return {}
    }
}

function getStyleTap(name){
	if(name==='add-button'){
		return {
			backgroundColor:'#EA7900',
        }
	}
	else if(name==='remove-button'){
		return {
			backgroundColor:'#D50000',
        }
	}
	else{
		return undefined
	}
}
const Buttons = ({index, name}) => {

	const { 
		clicked,
		textButton, 
		showElement,
	} = useContext(MyContext);

	const {
		handleButtonClick,
		handleButtonClickRemove,
	} = Handles();

	return (
		<div>
			<AnimatePresence>
			    {((name==='remove-button') ? showElement[index] : true) && 
			    (<motion.button 
			        key={index}
			        layout
			        onClick={(name==='add-button') ? handleButtonClick : handleButtonClickRemove}
			        className={index}
			        name={name}
			        whileTap={getStyleTap(name)}
			        initial={getInitial(name)}
			        animate={getAnimate(name,clicked[index])}
			        exit={getAnimateExit(name)}
			        transition={{
			            duration: 0.2,
			        }}
			        style={getStyles(name)}
			    >{(name==='add-button') ? textButton[index] : '-'}
			    </motion.button>)}
			</AnimatePresence>
	    </div>
    );
};

export default Buttons;
