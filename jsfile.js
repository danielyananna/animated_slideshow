
const myslide = document.querySelectorAll('.myslide'),
	  dot = document.querySelectorAll('.dot');
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 8000);
function autoSlide() {
	counter += 1;
	slidefun(counter);
}

// ayy, ays <> kochakneri hamar a 
function plusSlides(n) {
	counter += n;
	slidefun(counter);
	resetTimer();
}


//taki klorakneri hamar a

function currentSlide(n) {
	counter = n;
	slidefun(counter);
	resetTimer();
}

function resetTimer() {
	clearInterval(timer);
	timer = setInterval(autoSlide, 8000);
}

function slidefun(n) {
	
	for(let i = 0; i<myslide.length; i++){
		myslide[i].style.display = "none";
	}
	for(let i = 0; i<dot.length; i++) {
		dot[i].className = dot[i].className.replace(' active', '');
	}
	if(n > myslide.length){
	   counter = 1;
	   }
	if(n < 1){
	   counter = myslide.length;
	   }
	myslide[counter - 1].style.display = "block";
	dot[counter - 1].className += " active";
}