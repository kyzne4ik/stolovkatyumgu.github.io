import { useContext } from "react"

import { MyContext } from './MyContext';

import tg from "./tgApp/tgApp.js"

import cart from "./cart"

export const basket = new cart()

function addProduct(event){
	const id = event.target.className
	basket.addCart(id)
}
function removeProduct(event){
	const id = event.target.className
	basket.remove(id)
}
function magicEditor(id,editableElement,tempValue,setFunction){
	let updatedElement = editableElement.map((item, index) => index === parseInt(id) ? tempValue : item);
	setFunction(updatedElement);
}

const animationCountProduct = async (index,controls,name) => {
    if (name==='add-button'){
        // Запуск анимации уменьшения
        await controls[index].start({
          scale: 1.3,
          transition: { duration: 0.2 }
        });
        // Запуск анимации увеличения
        controls[index].start({
          scale: 1,
          transition: { duration: 0.2 }
        });
    }
    else if(name==='remove-button'){
        // Запуск анимации уменьшения
        await controls[index].start({
          scale: 0.7,
          transition: { duration: 0.2 }
        });
        // Запуск анимации увеличения
        controls[index].start({
          scale: 1,
          transition: { duration: 0.2 }
        });
    }

};
const Handles = () => {

    const {
        showElement, 
        setShowElement,
        countProduct, 
        setCountProduct,
        clicked, 
        setClicked,
        textButton, 
        setTextButton,
        controls,
    } = useContext(MyContext);
	
    const handleButtonClick = (event) => {
        const id = event.target.className;
        const name = event.target.name;
        if(basket.get(id) === null){
	        addProduct(event);
	        magicEditor(id,countProduct,basket.get(id).countProduct,setCountProduct)
	        magicEditor(id,showElement,true,setShowElement)
        }
        else{
	        addProduct(event);
			magicEditor(id,countProduct,basket.get(id).countProduct,setCountProduct)
        }
        magicEditor(id,clicked,true,setClicked)
        magicEditor(id,textButton,'+',setTextButton)

        animationCountProduct(id,controls,name)
        if (basket.getAllObjects().length>0){ //если кнопка показана 
            tg.MainButton.show() //показываем 
        }
        else{
            tg.MainButton.hide() //скрываем кнопку 
        }
    };

    const handleButtonClickRemove = (event) => {
        const id = event.target.className;
        const name = event.target.name;
        removeProduct(event);
        if (basket.get(id) === null) {
            magicEditor(id,clicked,false,setClicked)
            magicEditor(id,textButton,'ADD',setTextButton)
            magicEditor(id,showElement,false,setShowElement)
            magicEditor(id,countProduct,0,setCountProduct)
        } else {
            magicEditor(id,countProduct,basket.get(id).countProduct,setCountProduct)
        }

        animationCountProduct(id,controls,name)
        if (basket.getAllObjects().length>0){ //если кнопка показана 
            tg.MainButton.show() //показываем 
        }
        else{
            tg.MainButton.hide() //скрываем кнопку 
        }

    };
    return {
    	handleButtonClick,
    	handleButtonClickRemove,
        basket,
    }
}

export default Handles;