"use strict";

class modal {
	
	constructor(element){
		this.element = document.querySelector(element);
	}

	show() {
		console.log(this.element);
		this.element.getElementsByClassName('overlay').get(0).setAttribute('class', 'overlay to-top active');
	}
}