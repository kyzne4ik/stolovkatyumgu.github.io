import { useContext } from "react"

import { MyContext } from './MyContext';

import cart from "./cart"

const basket = new cart()

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

const animationCountProduct = async (index,controls) => {
    // Запуск анимации увеличения
    await controls[index].start({
      scale: 1.5,
      transition: { duration: 0.3 }
    });
    // Запуск анимации уменьшения
    controls[index].start({
      scale: 1,
      transition: { duration: 0.2 }
    });
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

        animationCountProduct(id,controls)
    };

    const handleButtonClickRemove = (event) => {
        const id = event.target.className;
        removeProduct(event);
        if (basket.get(id) === null) {
            magicEditor(id,clicked,false,setClicked)
            magicEditor(id,textButton,'ADD',setTextButton)
            magicEditor(id,showElement,false,setShowElement)
            magicEditor(id,countProduct,0,setCountProduct)
        } else {
            magicEditor(id,countProduct,basket.get(id).countProduct,setCountProduct)
        }

        animationCountProduct(id,controls)
    };
    return {
    	handleButtonClick,
    	handleButtonClickRemove,
    }
}

export default Handles;