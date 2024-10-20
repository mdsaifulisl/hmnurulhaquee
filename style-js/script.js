const ul = document.querySelector(".ul");
const removeList = document.querySelector(".navr");

const activeNav = document.querySelector('.bars');

activeNav.onclick = () =>{
    ul.classList.toggle("active");
}

removeList.onclick = () =>{
    ul.classList.remove("active");
}

window.onscroll = () => {
    ul.classList.remove("active");
}


const textElement = document.querySelector('.typing');
const texts = ["H.M. NURUL HAQUE", "A BUSINESSMAN"];
let index = 0;
let textIndex = 0;
const speed = 100; // Typing speed in milliseconds

function typeText() {
    if (index < texts[textIndex].length) {
        textElement.innerHTML += texts[textIndex].charAt(index);
        index++;
        setTimeout(typeText, speed);
    } else {
        setTimeout(() => {
            textElement.innerHTML = ""; // Clear current text
            index = 0;
            textIndex = (textIndex + 1) % texts.length; // Move to the next text
            typeText(); // Type the next text
        }, 1000); // Delay before moving to the next text
    }
}

typeText();

// Review
const sliderScrol = document.querySelector('.review-item');

sliderScrol.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    sliderScrol.scrollLeft += evt.deltaY;
});

// gallery

const myModel = document.querySelector('.mymodel');
const closes = document.querySelector('.closes');
const modalImage = document.querySelector('#modalImage');

document.querySelectorAll('.myimg img').forEach(image => {
    image.addEventListener("click", function() {
        myModel.style.display = "flex";
        if(modalImage !== null) {
            modalImage.src = this.src;
        }
        
    });
});


myModel.addEventListener("click", function(e) {
    if (e.target !== modalImage) {
        myModel.style.display = "none"; 
    }
});


// annimation start

const annimationTop = document.querySelectorAll('.annimation-top');
const annimationBottom = document.querySelectorAll('.annimation-bottom');
const annimationRight = document.querySelectorAll('.annimation-right');
const annimationLeft = document.querySelectorAll('.annimation-left');

const annimationShow = new IntersectionObserver(entries => {

    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
            annimationShow.unobserve(entry.target);
        }
    });
    }, {
    threshold: 0.1
});

annimationTop.forEach(element => {
    annimationShow.observe(element);
});
annimationBottom.forEach(element => {
    annimationShow.observe(element);
});
annimationRight.forEach(element => {
    annimationShow.observe(element);
});
annimationLeft.forEach(element => {
    annimationShow.observe(element);
});

// annimation end