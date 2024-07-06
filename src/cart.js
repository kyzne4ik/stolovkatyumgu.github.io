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
			this.addObjectCart(product)
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
			console.log(this.list[i])
		}
	}
}

export default cart;