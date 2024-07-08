import { 
	motion, 
	//useAnimation
	AnimatePresence, 
} from 'framer-motion';

import React from 'react';

import { useContext } from "react"
import { MyContext } from './MyContext';

const getAnimateExit = () => ({
	width:'25px',
	height:'25px',
	transform: 'scale(0.01)',
	x:0,
	y:0,
	}
);

export const AnimateComponent = ({index}) => {
	const {
			controls,
			countProduct,
			showElement,
	} = useContext(MyContext);

  return (
    <div>
    	<div style={{marginLeft: '84px',}}>
    		<AnimatePresence>
    		{showElement[index] && 
	          <motion.div
	            animate={controls[index]}
	            initial={{
	            	width:'25px',
					height:'25px', 
					scale: 0, 
				}}
	            exit={getAnimateExit()}
	            style={{
	            	position: 'absolute',
					backgroundColor: '#f8a917',
					display: 'inline-block',
					borderRadius: '25px',
					height: '25px',
					width: '25px',
					fontSize: '14px',
					lineHeight: '25px',
					textAlign: 'center',
					color: 'white',
					fontFamily: 'Helvetica',
					fontWeight: '900',
					}}
				transition={{
	            	duration: 0.2,
	        	}}
	          >
	           {countProduct[index]}
	          </motion.div>}
	        </AnimatePresence>
        </div>
    </div>
  );
};
