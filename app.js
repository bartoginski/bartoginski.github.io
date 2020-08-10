//window.scrollY
// 714
const aboutBtn = document.querySelector(".about-btn");
const aboutSection = document.querySelector(".about");

aboutBtn.addEventListener("click", seeMoreAbout);

function seeMoreAbout() {
  aboutSection.style.display = "flex";
}

const skillsBtn = document.querySelector(".skills-btn");
const skillsSection = document.querySelector(".skills");

skillsBtn.addEventListener("click", seeMoreSkills);

function seeMoreSkills() {
  skillsSection.style.display = "flex";
}
