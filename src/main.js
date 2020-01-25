let counter = 0;

let z = 3;

// Event listeners
function next() {
  const cards = Array.from(document.querySelectorAll("#img-slider img"));
  const current = cards.filter(card => card.classList.contains("current"))[0];
  let next = counter < cards.length - 1 ? ++counter : (counter -= counter);

  cards[next].classList.add("current");
  cards[next].style.animation = `moveIn 500ms`;
  cards[next].style.zIndex = 3;

  cards.forEach(card => {
    card.style.zIndex -= 1;
  });

  current.style.animation = "";
  current.classList.remove("current");
}

function prev() {
  const cards = Array.from(document.querySelectorAll("#img-slider img"));
  const current = cards.filter(card => card.classList.contains("current"))[0];
  let prev = counter === 0 ? (counter += cards.length - 1) : (counter -= 1);

  cards[prev].classList.add("current");
  cards[prev].style.animation = `moveOut 500ms`;
  cards[prev].style.zIndex = 3;

  cards.forEach(card => {
    card.style.zIndex -= 1;
  });

  current.style.animation = "";
  current.classList.remove("current");
}

// Adding event listeners to arrows
const rightArrow = document.querySelector(".right");

rightArrow.addEventListener("click", next);

const leftArrow = document.querySelector(".left");

leftArrow.addEventListener("click", prev);
