// Slider Width
var Input = document.querySelector('#input1');
Input.style.setProperty("--value", (Input.value*3));
if (Input) {
	var w = parseInt(window.getComputedStyle(Input, null).getPropertyValue('width'));
	Input.addEventListener("input", function(evt) {
		Input.style.setProperty("--value", (Input.value*3));
	},false);
	//para la etiqueta
	var etq = document.querySelector('.etiqueta');
	if (etq) {
		etq.innerHTML = Input.value; 
		etq.style.left = ((Input.value * 4) - 15) + 'px';
		Input.addEventListener('input', function() {
			etq.innerHTML = Input.value;
			etq.style.left = ((Input.value * 4) - 15) + 'px';
		}, false);
	}
}
// Slider Color
var valorColor = document.querySelector('#valorColor');
valorColor.style.setProperty("--value", (valorColor.value*100));
if(valorColor)
{
	var width = parseInt(window.getComputedStyle(valorColor, null).getPropertyValue('width'));
	valorColor.addEventListener("input", function(evt) {
		valorColor.style.setProperty("--value", (valorColor.value*100));
	},false);
	var etiqueta = document.querySelector('.etiqueta2');
	if(etiqueta){
		etiqueta.innerHTML = valorColor.value; 
		etiqueta.style.left = ((valorColor.value * 100) - 15) + 'px';
		valorColor.addEventListener('input', function() {
			etiqueta.innerHTML = valorColor.value;
			etiqueta.style.left = ((valorColor.value * 100) - 15) + 'px';
		}, false);
	}
}





// Variables
let txtArea=document.getElementById('txtArea');
let btn = document.createElement("div");

// Operaciones
txtArea.innerHTML = "-webkit-border-radius: 0px;\n-moz-border-radius: 0px;\nborder-radius: 0px;";
btn.innerHTML = "Submit";
btn.style.backgroundColor="#FFFFFF";
document.textarea.appendChild(btn);






