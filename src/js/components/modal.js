"use strict";

class Modal {
	
	constructor(element){
		this.element = document.querySelector(element);	

		var toggle = this.element.getAttribute('data-toggle');
		if(toggle){
			this.element.addEventListener('click', (event) => {
				if (event.target === this.element){
					this.modal(false);
				}
			});
		}

		var closes = this.element.querySelectorAll('[data-close]');
		if(closes){
			closes.forEach((value) => {
				value.addEventListener('click', () => {
					this.modal(false);
				});
			}, this);
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
		var oldClass = this.element.className;
		var event;

		if(bool === true){
			//this.element.style.display = 'block';
			this.element.classList.add('active');
			
			event = new CustomEvent('modal-show', {});
   			window.dispatchEvent(event);
		}else{
			//this.element.style.display = 'none';
			this.element.classList.remove('active');

			event = new CustomEvent('modal-hide', {});
   			window.dispatchEvent(event);
		}
	}

	eventHide(callback) {
		window.addEventListener('modal-hide', (e) => {
			callback();
		});
	}

	eventShow(callback) {
		window.addEventListener('modal-show', (e) => {
			callback();
		});
	}
}