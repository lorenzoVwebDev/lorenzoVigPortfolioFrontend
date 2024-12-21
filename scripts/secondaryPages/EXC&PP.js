import { templatesGallery } from "../Data/Arrays.js";
import { templates } from "../utils/resume.js"

function renderProjects() {
let portfolioSectionRender = '';

templatesGallery.forEach((project) => {
  portfolioSectionRender += `
    <div class="port-box mix all ${project.type}">
    <div class="port-image">
      <img src="./images/templates/${project.image}" alt="">
    </div>
    <div class="port-content">
      <h3>${project.header}</h3>
      <div class="description-link">
        <p>
          ${project.description}
        </p>
        <button class="js-templates-button" data-url="${project.href}"><i class='bx bx-download'></i></button>
      </div>
    </div>
  </div>
`
});

 document.querySelector('.js-projects-gallery').innerHTML = portfolioSectionRender;
 document.querySelectorAll('.js-templates-button').forEach((button) => {

  button.addEventListener('click', () => {
    const url = button.dataset.url;
    console.dir(url)
    templates(url);
  })
 })
};

renderProjects();

mixitup('.container');
