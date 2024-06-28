import {portGallery} from "../Data/Arrays.js";
import "../StyleScript/mixitup.min.js";

function renderProjectsSection() {
  let projectsSectionRender = '';

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
          <a href="${project.href === 'EXC&PP.html' ? project.href : project.href.split('//')[0] === 'https:' ? project.href : `./WebProjects/${project.href}`}" target="${project.href === 'EXC&PP.html' ? '' :'_blank'}"><i class='bx bx-link-external'></i></a>
        </div>
      </div>
    `
  });
    
  document.querySelector('.js-portfolio-gallery').innerHTML = projectsSectionRender;
};
  
renderProjectsSection();

mixitup('.container');

const strg = 'http://localhost:3500/contacts/sendcontacts/'
console.log(strg.split('//')[0])