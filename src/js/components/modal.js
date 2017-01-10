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

	eventHide(callback) {
		window.addEventListener('modal-hide', function (e) {
			callback();
		});
	}

	eventShow(callback) {
		window.addEventListener('modal-show', function (e) {
			callback();
		});
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
		var event;

		if(bool == true){
			this.element.style.display = 'block';
			this.element.setAttribute('class', `${old} active`);
			
			event = new CustomEvent('modal-show', {});
   			window.dispatchEvent(event);
		}else{
			this.element.style.display = 'none';
			this.element.setAttribute('class', old);

			event = new CustomEvent('modal-hide', {});
   			window.dispatchEvent(event);
		}
	}
}