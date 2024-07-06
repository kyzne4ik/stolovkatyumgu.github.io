import { 
	motion, 
	//useAnimation 
} from 'framer-motion';

import React from 'react';

import { useContext } from "react"
import { MyContext } from './MyContext';

export const AnimateComponent = ({index}) => {
  // Создаем массив контроллеров анимации с помощью хука useAnimation
	const {
			controls, 
			countProduct,
	} = useContext(MyContext);

  return (
    <div>
    	<div>
          <motion.div
            animate={controls[index]}
            initial={{ scale: 1 }}
            style={{
            	//position: 'absolute',
				backgroundColor: '#f8a917',
				display: 'inline-block',
				borderRadius: '25px',
				height: '25px',
				width: '25px',
				fontSize: '14px',
				fontWeight: 'bolder',
				lineHeight: '25px',
				textAlign: 'center',
				color: 'white',
				marginLeft: '94px',
			}}
          >
            {countProduct[index]}
          </motion.div>
        </div>
    </div>
  );
};
