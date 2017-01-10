"use strict";

class Modal {
	
	constructor(element){
		this.element = document.querySelector(element);	

		var toggle = this.element.getAttribute('data-toggle');
		if(toggle){
			this.element.onclick = (event) => {
				if (event.target === this.element){
					this.show(false);
				}
			}
		}
	}
	
	on(event, element) {
		if(!element) return false;

		var elements = document.querySelectorAll(element);
		elements.forEach((value) => {
			value.addEventListener(event, () => {
				this.show(true);
			});
		}, this);
	}

	show(bool = true) {	
		if(bool == true){
			this.element.setAttribute('class', 'modal-overlay to-top active');
		}else{
			this.element.setAttribute('class', 'modal-overlay');
		}
	}
}