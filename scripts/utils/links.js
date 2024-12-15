const backEndUrl = 'https://backend.lorenzo-viganego.com/';
const backEndUrlNoProxy = 'http://172.232.217.98:3000/';
const localHost = 'http://localhost:3000/';
const awardSpaceUrl = 'http://lorenzovdev.atwebpages.com/';

export function renderProjects() {
  const url = window.location.href; 
  const urlParams = new URL(url);
  const paramObject =Object.fromEntries(urlParams.searchParams.entries());
  let plainUrl = Object.entries(paramObject)[0][1];

  function getProjects(response, url) {
    const xhr = new XMLHttpRequest();

    xhr.addEventListener('error', (error)=> {
      alert('We are sorry: projects are currently unavailable');
/*       urlParams.searchParams.delete('href')
      window.location.href = urlParams.href + '#portfolio';  */
    })

    xhr.addEventListener('load', () => {
      if (xhr.status >= 200 && xhr.status <= 304) {
        const header = xhr.getResponseHeader('project-type')
        response(xhr.response, header);
      } else {
        alert('We are sorry: projects are currently unavailable');
/*         urlParams.searchParams.delete('href')
        window.location.href = urlParams.href + '#portfolio';  */
      } 
  })

  xhr.open('GET', url);
  xhr.send();
}

  new Promise((resolve) => {
    const endpoints = [
      'css',
      'js'
    ];
    const responseArray = [];
    getProjects((response, header) => {
      responseArray.push(header)
      responseArray.push(response)
      //console.log(plainUrl)
      getProjects((response) => {
        let plainUrlClean = plainUrl.replace("/css",'/');
        //console.log(plainUrlClean)
        responseArray.push(response);
        getProjects((response) => {
          responseArray.push(response);
          //console.log(responseArray);
          //console.log(responseArray)
          resolve(responseArray)
        }, plainUrlClean+=endpoints[1])
      }, plainUrl+=endpoints[0])
    }, plainUrl);
  }).then((responseArray) => {
    renderProject(responseArray)
  }).finally(() => {
/*     urlParams.searchParams.delete('href')
    window.location.href = urlParams.href + '#portfolio';  */
  })
}

async function  renderProject(responseArray) {
    if (responseArray[0]!= 'including-images') {
    const project = window.open('', '_self');
    project.document.write(responseArray[1]);
    const css = project.document.querySelector('.css');
    //console.log(responseArray[2])
    css.innerHTML = responseArray[2];
    const js = project.document.querySelector('.js')
    js.innerHTML = responseArray[3]
    //console.log(document)
    project.document.close();

  } else {
    
    //calling images
    const rockImage = await fetch(`${backEndUrl}projects/rockpaperscissor/rockimage`).then((response) => {
      return response.blob()})
    const paperImage = await fetch(`${backEndUrl}projects/rockpaperscissor/paperimage`).then((response) => {
      return response.blob()})
    const scissorsImage = await fetch(`${backEndUrl}projects/rockpaperscissor/scissorsimage`).then((response) => {
      return response.blob()})
    //creating images' URLs

    const rockImageURL = URL.createObjectURL(rockImage)
    const paperImageURL = URL.createObjectURL(paperImage)
    const scissorsImageURL = URL.createObjectURL(scissorsImage)
    const urlsForJS = `
      const rockImageURL = "${rockImageURL}";
      const paperImageURL = "${paperImageURL}";
      const scissorsImageURL = "${scissorsImageURL}";
    `;
    //creating new document
    const project = window.open('', '_self');
    project.document.write(responseArray[1]);

    //adding css
    const css = document.querySelector('.css');
    css.innerHTML = responseArray[2];

    // adding urlsForJS to main js
    const script = urlsForJS + responseArray[3];
    //console.log(script);
    const js = project.document.querySelector('.js');
    js.innerHTML = script;
    //rockImageCreation
    const rockButton = project.document.querySelector('.js-rock-button');
    const rImage = rockButton.appendChild(project.document.createElement("img"));
    rImage.src= rockImageURL;
    rImage.className= "move-icon";
    //paperImageCreation
    const paperButton = project.document.querySelector('.js-paper-button');
    const pImage = paperButton.appendChild(project.document.createElement("img"));
    pImage.src= paperImageURL;
    pImage.className= "move-icon";
    //scissorsImageCreation
    const scissorsButton = project.document.querySelector('.js-scissor-button');
    const sImage = scissorsButton.appendChild(project.document.createElement("img"));
    sImage.src= scissorsImageURL;
    sImage.className= "move-icon";
    project.document.close();
  }
// Insert HTML content into the new window
// Close the document to ensure the content is rendered
} 

document.addEventListener('DOMContentLoaded', function () {
  renderProjects()
})
//hello


// Open a new window

