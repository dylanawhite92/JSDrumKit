const sliderImages = document.querySelectorAll(".slide-in");

// Prevent checkSlide from running 100 times a second
function debounce(func, wait = 40, immediate = true) {
	var timeout;

	return function() {
		var context = this, args = arguments;

		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};

		var callNow = immediate && !timeout;

		clearTimeout(timeout);
		timeout = setTimeout(later, wait);

		if (callNow) func.apply(context, args);
	};
};

function checkSlide(e) {
    console.count(e);
}

window.addEventListener("scroll", debounce(checkSlide));
