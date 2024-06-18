const button = document.querySelector("button");
const winners = document.getElementById("wall-of-fame");

 

button.addEventListener('click', () => {
    scrollTo(0,850).winners({behaviour: "smooth"});
});