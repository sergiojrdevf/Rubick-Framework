"use strict";

class Modal {
	
	constructor(element){
		this.element = document.querySelector(element);	

		var toggle = this.element.getAttribute('data-toggle');
		if(toggle){
			this.element.onclick = (event) => {
				if (event.target === this.element){
					this.modal(false);
				}
			}
		}
	}
	
	onShow(event, element) {
		if(!element) return false;

		var elements = document.querySelectorAll(element);
		elements.forEach((value) => {
			value.addEventListener(event, () => {
				this.modal(true);
			});
		}, this);
	}

	modal(bool = true) {	
		var old = this.element.className;
		if(bool == true){
			this.element.style.display = 'block';
			this.element.setAttribute('class', `${old} active`);
		}else{
			this.element.style.display = 'none';
			this.element.setAttribute('class', old);
		}
	}
}