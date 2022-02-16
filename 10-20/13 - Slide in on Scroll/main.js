const slideImages = document.querySelectorAll(".slide-in");

// Prevent checkSlide from running 100 times a second
function debounce(func, wait = 20, immediate = true) {
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

function checkSlide() {
    // Determine when a picture is peeking out into the window 
    // and would be partially revealed before animating it onto the screen
    slideImages.forEach(slideImage => {
        const slideInAt = (window.scrollY + window.innerHeight) - 
        slideImage.height / 2;
        
        const imageBottom = slideImage.offsetTop + slideImage.height;
        const isHalfShown = slideInAt > slideImage.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;

        if (isHalfShown && isNotScrolledPast) {
            slideImage.classList.add("active");
        } else {
            slideImage.classList.remove("active");
        }
    });
}

window.addEventListener("scroll", debounce(checkSlide));
