const card = document.querySelector(".card");
const container = document.querySelector(".container");

const title = document.querySelector(".title");
const Btr = document.querySelector(".Btr img");
const sizes = document.querySelector(".sizes");
const seeCharacter = document.querySelector("seeCharacter");
const description = document.querySelector("info h3");

container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;

    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

container.addEventListener("mouseenter", (e) => {
    card.style.transition = "none";

    title.style.transform = "translateZ(150px)";
    Btr.style.transform = "translateZ(200px) rotateZ(-45deg)";
    sizes.style.transform = "translateZ(150px)";
    seeCharacter.style.transform = "translateZ(150px)";
    description.style.transform = "translateZ(150px)";
});

container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all .5s ease";
    card.style.transform = `rotateY(0deg) rotateX(-0)`;

    title.style.transform = "translateZ(0)";
    Btr.style.transform = "translateZ(0) rotateZ(-0)";
    sizes.style.transform = "translateZ(0)";
    seeCharacter.style.transform = "translateZ(0)";
    description.style.transform = "translateZ(0)";
});