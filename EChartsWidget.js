(function() { 
	let template = document.createElement("template");

	class ColoredBox extends HTMLElement {
		constructor() {
			super(); 
            console.log("hello? 뭐임");
			// this.appendChild(template.content.cloneNode(true));
			// this.addEventListener("click", event => {
			// 	var event = new Event("onClick");
			// 	this.dispatchEvent(event);
			// });
			// this._props = {};
		}
	}

	customElements.define("com-sap-sample-echarts", ColoredBox);
})();
