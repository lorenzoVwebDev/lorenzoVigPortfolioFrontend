import { jobsDone } from "../Data/Arrays.js";

function renderServiceSection() {
let services = '';

jobsDone.forEach(job => {
  
  services += `
    
    <div class="service-box">
      <h3><i class='bx ${job.icon}'></i>${job.name}</h3>
    <p>
        ${job.slightDescription}
    </p>
    <div class="btn-box service-btn">
      <a class="btn" href="${job.href}">Read More</a>
    </div>
    </div>
  `
});

document.querySelector('.js-section-services').innerHTML = services;
};

renderServiceSection();
