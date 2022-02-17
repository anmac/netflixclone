const carousel = document.querySelector(".carousel__images");
const movies = document.querySelectorAll(".carousel__image");
const pages = Math.ceil(movies.length / 5);
const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");

rightArrow.addEventListener("click", () => {
  carousel.scrollLeft += carousel.offsetWidth;
  const activeIndicator = document.querySelector(".active");
  if (activeIndicator.nextSibling) {
    activeIndicator.nextSibling.classList.add("active");
    activeIndicator.classList.remove("active");
  }
});

leftArrow.addEventListener("click", () => {
  carousel.scrollLeft -= carousel.offsetWidth;
  const activeIndicator = document.querySelector(".active");
  if (activeIndicator.previousSibling) {
    activeIndicator.previousSibling.classList.add("active");
    activeIndicator.classList.remove("active");
  }
});

for (let i = 0; i < pages; i++) {
  const indicator = document.createElement("button");
  indicator.classList.add("carousel__indicator");

  if (i === 0) {
    indicator.classList.add("active");
  }
  document.querySelector(".carousel__indicators").appendChild(indicator);

  indicator.addEventListener("click", (e) => {
    carousel.scrollLeft = i * carousel.offsetWidth;

    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
  });
}

movies.forEach((movie) => {
  movie.addEventListener("mouseenter", (e) => {
    const element = e.currentTarget;
    setTimeout(() => {
      movies.forEach((movie) => movie.classList.remove("hover"));
      element.classList.add("hover");
    }, 300);
  });
});

carousel.addEventListener("mouseleave", () => {
  movies.forEach((movie) => movie.classList.remove("hover"));
});
