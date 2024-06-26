import { jobsDone } from "../Data/Arrays.js";
//put the array above into the backend

let renderJobsDone = '' 

jobsDone.forEach((job) => {
  renderJobsDone += `
  <div id="${job.id}" class=job>
    <div class="about-content">
      <h1>${job.name}</h1>
      <p>
        ${job.description}
      </p>
    </div>

    <div class="img-about scroll-scale">
      <img src="./images/jobs/${job.image}" alt="">
    </div>
  </div> 
  `
});

document.querySelector('.js-about').innerHTML = renderJobsDone;

