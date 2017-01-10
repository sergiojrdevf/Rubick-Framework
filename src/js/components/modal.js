"use strict";

class modal {
	
	contruct(element){
		this.element = document.querySelector(element);
	}

	show() {
		console.log(this.element);
	}
}