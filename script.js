const projectsContainer = document.querySelector(".projects");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

let index = 0;
const projectWidth = document.querySelector(".project_card").offsetWidth + 20; // Largeur + espace entre les cartes

nextBtn.addEventListener("click", () => {
    if (index < projectsContainer.children.length - 1) {
        index++;
        projectsContainer.style.transform = `translateX(-${index * projectWidth}px)`;
    }
});

prevBtn.addEventListener("click", () => {
    if (index > 0) {
        index--;
        projectsContainer.style.transform = `translateX(-${index * projectWidth}px)`;
    }
});
