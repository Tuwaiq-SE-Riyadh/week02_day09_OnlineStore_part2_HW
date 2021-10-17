// Carousel JS ----------------------
const carousel = document.querySelector(".carouselInnerContainer");
const prevSlide = document.querySelector(".prevSlide");
const nextSlide = document.querySelector(".nextSlide");
const carImages = document.querySelectorAll(".craouselItem img");
let carouselCounter = 1;
let carouseImgSize = document.querySelectorAll(".craouselItem")[0].clientWidth;
let slideNumber = document.querySelector("#slideNumber");
document.querySelector(".carouselOuterContainer").style.width = 1.5 * carouseImgSize;
carousel.style.transform = `translateX(-${(carouseImgSize * carouselCounter)}px)`;
/*Next And Previous handling */
nextSlide.addEventListener("click", () => {
    for (let x of carImages) {
        x.style.animation = "carouselImgAnimate 1s ease-in-out backwards";
    }
    if ((carouselCounter < 6) && (carouselCounter >= 1)) {
        carouselCounter++;
        slideNumber.innerHTML = carouselCounter;
        carousel.style.transform = `translateX(-${(carouseImgSize * carouselCounter)}px)`;
    }
    else {
        carouselCounter = 1;
        slideNumber.innerHTML = carouselCounter;
        carousel.style.transform = `translateX(-${(carouseImgSize * carouselCounter)}px)`;
    }
});
prevSlide.addEventListener("click", () => {
    for (let x of carImages) {
        x.style.animation = "carouselImgAnimate 1s ease-in-out backwards";
    }
    if ((carouselCounter <= 6) && (carouselCounter > 1)) {
        carouselCounter--;
        slideNumber.innerHTML = carouselCounter;
        carousel.style.transform = `translateX(-${(carouseImgSize * carouselCounter)}px)`;
    }
    else {
        carouselCounter = 6;
        slideNumber.innerHTML = carouselCounter;
        carousel.style.transform = `translateX(-${(carouseImgSize * carouselCounter)}px)`;
    }
});
