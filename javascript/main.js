const main = document.querySelector('.main');
const captain = document.querySelector('.s');
console.log(main);

(function resizeBackground() {
  main.style.height = `${window.innerHeight}px`;
  captain.style.height = `${window.innerHeight}px`;

}())
