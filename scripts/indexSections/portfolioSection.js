import {portGallery} from "../Data/Arrays.js";
import "../StyleScript/mixitup.min.js";
import {renderProjects} from "../utils/links.js";

function renderProjectsSection() {
  let projectsSectionRender = '';
  function case2 (linkType, href) {
    switch (linkType) {
      case 'newtab':
      return `<a href="${href}" target="_blank"><i class='bx bx-link-external'></i></a>`;
      case 'params':
      return `<button class="project-link" data-href-type="${href}"><i class='bx bx-link-external'></i></button>`;
      case 'internal':
      return `<a href="./WebProjects/${href}" target="_blank"><i class='bx bx-link-external'></i></a>` ;
      default:
      return `<a ${href}"><i class='bx bx-link-external'></i></a>`
    }

  }

  portGallery.forEach((project) => {

    projectsSectionRender += `
      <div class="port-box mix all ${project.type}">
        <div class="port-image">
          <img src="./images/${project.image}" alt="">
        </div>
        <div class="port-content">
          <h3>${project.header}</h3>
          <p>
            ${project.description}
          </p>
          ${case2(project.linkType, project.href)}
        </div>
      </div>
    `
  });

  document.querySelector('.js-portfolio-gallery').innerHTML = projectsSectionRender;
  document.querySelectorAll('.project-link').forEach(button => {
    const { hrefType } = button.dataset;
    button.addEventListener('click', () => {
      const newUrl = window.location.href.replace('index.html#portfolio', '')
      console.log(newUrl)
      window.location.href = newUrl + 'render/render.html'+`?href=${encodeURI(hrefType)}`

    })
  })
}  


renderProjectsSection();



mixitup('.container');

/* const strg = 'http://localhost:3500/contacts/sendcontacts/'
console.log(strg.split('//')[0]) */

/* ${project.href === 'EXC&PP.html' ? project.href : project.href.split('//')[0] === 'https:'  || project.href.split('//')[0] === 'http:'  ? project.href : `./WebProjects/${project.href}`} */