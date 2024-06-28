import { templatesGallery } from "../Data/Arrays.js";

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
        <a href="${project.href}" target=""><i class='bx bx-download'></i></i></a>
      </div>
    </div>
  </div>
`
});

 document.querySelector('.js-projects-gallery').innerHTML = portfolioSectionRender;
};

renderProjects();

mixitup('.container');
