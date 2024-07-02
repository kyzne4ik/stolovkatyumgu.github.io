import React from "react"
import {useState} from "react"
import * as ReactDOMClient from "react-dom/client"
import { Beer, Burger, Drink, HotDog, Pizza, Soup } from "./svg/pageIcon.jsx";

import "./css/main.css"

const root = ReactDOMClient.createRoot(document.getElementById("root"))

class commodity{
	constructor(countProduct,idProduct){
		this.countProduct = countProduct
		this.idProduct = idProduct
	}
}
class cart{
	constructor(){
		this.list = []
	}
	get(id){
		for(let i=0;i<this.list.length;i++){
			if(this.list[i].idProduct===id){
				return this.list[i]
			}
		}
		return null
	}
	addObjectCart(product){
		this.list.push(product)
	}
	addCart(id){
		const existingProduct = this.get(id)
		if(existingProduct!=null){
			existingProduct.countProduct+=1
		}
		else{
			const product = new commodity(1,id)
			basket.addObjectCart(product)
		}
	}
	remove(id){
		const existingProduct = this.get(id)
		if(existingProduct!=null){
			if(existingProduct.countProduct>1){
				existingProduct.countProduct-=1
			}else{this.list.splice(this.list.indexOf(existingProduct),1)}
		}
	}
	view(){
		for(let i=0;i<this.list.length;i++){
			console.log((this.list)[i])
		}
	}
}

const basket = new cart()

function addProduct(event){
	const id = event.target.className
	basket.addCart(id)
}

function removeProduct(event){
	const id = event.target.className
	basket.remove(id)
}

class Buttons extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            showElement: Array.from({ length: 6 }).fill(false),
            countProduct: Array.from({ length: 6 }).fill(0),
            clicked: Array.from({ length: 6 }).fill(false),
            textButton: Array.from({ length: 6 }).fill('ADD'),
        }
    }

    handleButtonClick = (event) => {
    	const id = event.target.className
    	if(basket.get(id)===null){
    		addProduct(event)
			let updatedCountProduct = [...this.state.countProduct]
			updatedCountProduct[parseInt(id)] = basket.get(id).countProduct
			this.setState({countProduct: updatedCountProduct})

			let updatedShowElement = [...this.state.showElement]
			updatedShowElement[parseInt(id)] = true
			this.setState({ showElement: updatedShowElement })
    	}
    	else{
    		addProduct(event)
			let updatedCountProduct = [...this.state.countProduct]
			updatedCountProduct[parseInt(id)] = basket.get(id).countProduct
			this.setState({countProduct: updatedCountProduct})
    	}
		let updatedClicked = [...this.state.clicked]
		updatedClicked[parseInt(id)] = true
		this.setState({clicked: updatedClicked})
		let updatedTextButton = [...this.state.textButton]
		updatedTextButton[parseInt(id)] = '+'
		this.setState({textButton: updatedTextButton})
    }

    handleButtonClickRemove = (event) => {
    	const id = event.target.className
    	removeProduct(event)
    	if(basket.get(id)===null){
			let updatedClicked = [...this.state.clicked]
			updatedClicked[parseInt(id)] = false
			this.setState({clicked: updatedClicked})
			let updatedTextButton = [...this.state.textButton]
			updatedTextButton[parseInt(id)] = 'ADD'
			this.setState({textButton: updatedTextButton})
			let updatedShowElement = [...this.state.showElement]
			updatedShowElement[parseInt(id)] = false
			this.setState({ showElement: updatedShowElement })
			let updatedCountProduct = [...this.state.countProduct]
			updatedCountProduct[parseInt(id)] = 0
			this.setState({countProduct: updatedCountProduct})
    	}
    	else{
			let updatedCountProduct = [...this.state.countProduct]
			updatedCountProduct[parseInt(id)] = basket.get(id).countProduct
			this.setState({countProduct: updatedCountProduct})
    	}
    }

	render(){
		return (
			<div>
			<table>
			<tr>
			<td>
			<span className="countProduct">{this.state.countProduct[0]}</span>
			<div className="image"><Beer/></div>
			<span style={{
				margin: "50px"
			}}>Beer</span>
			<div className="container">
				{this.state.showElement[0] && 
				<button 
					onClick={this.handleButtonClickRemove} 
					className="0" 
					name="remove-button"
					style={{
						height: '70px',
						width: '62.5px',
						transform: this.state.clicked[0] ? 'scale(1)' : 'scale(0.5)',
						transition: 'all 1s',
					}}
				>-</button>}
			</div>
			<div className="container">
				<button 
					onClick={this.handleButtonClick} 
					className="0" 
					name="add-button" 
					style={{
						height: '70px',
						transformOrigin: 'right top',
						width: this.state.clicked[0] ? '62.5px' : '130px',
						marginLeft: this.state.clicked[0] ? '68px' : '0px',
						//transform: this.state.clicked[0] ? 'translateX(-100%)' : '',
						zIndex: '5',
				}}>{this.state.textButton[0]}</button>
			</div>
			</td>
			<td>
			<span className="countProduct">{this.state.countProduct[1]}</span>
			<div className="image"><Burger/></div>
			<span style={{margin: "41px"}}>Burger</span>
			<div className="container">
				{this.state.showElement[1] && 
				<button 
					onClick={this.handleButtonClickRemove} 
					className="1" 
					name="remove-button"
					style={{
						height: '70px',
						width: '62.5px',
						left: '178px',
						//transform: this.state.clicked[0] ? 'scale(1)' : 'scale(0.5)',
						//transition: 'all 1s',
					}}
				>-</button>}
			</div>
			<div className="container">
				<button 
					onClick={this.handleButtonClick} 
					className="1" 
					name="add-button" 
					style={{
						height: '70px',
						transformOrigin: 'right top',
						width: this.state.clicked[1] ? '62.5px' : '130px',
						marginLeft: this.state.clicked[1] ? '68px' : '0px',
						//transform: this.state.clicked[0] ? 'translateX(-100%)' : '',
						zIndex: '5',
				}}>{this.state.textButton[1]}</button>
			</div>
			</td>
			</tr>
			<tr>
			<td>
			<span className="countProduct">{this.state.countProduct[2]}</span>
			<div className="image"><Drink/></div>
			<span style={{margin: "45px"}}>Drink</span>
			<div className="container">
				{this.state.showElement[2] && 
				<button 
					onClick={this.handleButtonClickRemove} 
					className="2" 
					name="remove-button"
					style={{
						height: '70px',
						width: '62.5px',
						//transform: this.state.clicked[0] ? 'scale(1)' : 'scale(0.5)',
						//transition: 'all 1s',
					}}
				>-</button>}
			</div>
			<div className="container">
				<button 
					onClick={this.handleButtonClick} 
					className="2" 
					name="add-button" 
					style={{
						height: '70px',
						transformOrigin: 'right top',
						width: this.state.clicked[2] ? '62.5px' : '130px',
						marginLeft: this.state.clicked[2] ? '68px' : '0px',
						//transform: this.state.clicked[0] ? 'translateX(-100%)' : '',
						zIndex: '5',
				}}>{this.state.textButton[2]}</button>
			</div>
			</td>
			<td>
			<span className="countProduct">{this.state.countProduct[3]}</span>
			<div className="image"><HotDog/></div>
			<span style={{margin: "39px"}}>HotDog</span>
			<div className="container">
				{this.state.showElement[3] && 
				<button 
					onClick={this.handleButtonClickRemove} 
					className="3" 
					name="remove-button"
					style={{
						height: '70px',
						width: '62.5px',
						left: '178px',
						//transform: this.state.clicked[0] ? 'scale(1)' : 'scale(0.5)',
						//transition: 'all 1s',
					}}
				>-</button>}
			</div>
			<div className="container">
				<button 
					onClick={this.handleButtonClick} 
					className="3" 
					name="add-button" 
					style={{
						height: '70px',
						transformOrigin: 'right top',
						width: this.state.clicked[3] ? '62.5px' : '130px',
						marginLeft: this.state.clicked[3] ? '68px' : '0px',
						//transform: this.state.clicked[0] ? 'translateX(-100%)' : '',
						zIndex: '5',
				}}>{this.state.textButton[3]}</button>
			</div>
			</td>
			</tr>
			<tr>
			<td>
			<span className="countProduct">{this.state.countProduct[4]}</span>
			<div className="image"><Pizza/></div>
			<span style={{margin: "48px"}}>Pizza</span>
			<div className="container">
				{this.state.showElement[4] && 
				<button 
					onClick={this.handleButtonClickRemove} 
					className="4" 
					name="remove-button"
					style={{
						height: '70px',
						width: '62.5px',
						//transform: this.state.clicked[0] ? 'scale(1)' : 'scale(0.5)',
						//transition: 'all 1s',
					}}
				>-</button>}
			</div>
			<div className="container">
				<button 
					onClick={this.handleButtonClick} 
					className="4" 
					name="add-button" 
					style={{
						height: '70px',
						transformOrigin: 'right top',
						width: this.state.clicked[4] ? '62.5px' : '130px',
						marginLeft: this.state.clicked[4] ? '68px' : '0px',
						//transform: this.state.clicked[0] ? 'translateX(-100%)' : '',
						zIndex: '5',
				}}>{this.state.textButton[4]}</button>
			</div>
			</td>
			<td>
			<span className="countProduct">{this.state.countProduct[5]}</span>
			<div className="image"><Soup/></div>
			<span style={{margin: "48px"}}>Soup</span>
			<div className="container">
				{this.state.showElement[5] && 
				<button 
					onClick={this.handleButtonClickRemove} 
					className="5" 
					name="remove-button"
					style={{
						height: '70px',
						width: '62.5px',
						left: '178px',
						//transform: this.state.clicked[0] ? 'scale(1)' : 'scale(0.5)',
						//transition: 'all 1s',
					}}
				>-</button>}
			</div>
			<div className="container">
				<button 
					onClick={this.handleButtonClick} 
					className="5" 
					name="add-button" 
					style={{
						height: '70px',
						transformOrigin: 'right top',
						width: this.state.clicked[5] ? '62.5px' : '130px',
						marginLeft: this.state.clicked[5] ? '68px' : '0px',
						//transform: this.state.clicked[0] ? 'translateX(-100%)' : '',
						zIndex: '5',
				}}>{this.state.textButton[5]}</button>
			</div>
			</td>
			</tr>
			</table>
			</div>
		)
	}
}

root.render(
	<div>
	<Buttons/>
	</div>
)