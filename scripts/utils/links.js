export function renderProjects(hrefType) {
  window.location.href+=`?href=${hrefType}`;
  const url = window.location.href;
  const cleanUrl = url.replace('#portfolio', ''); 
  const urlParams = new URL(cleanUrl);
  console.log(urlParams)
  const paramObject =Object.fromEntries(urlParams.searchParams.entries());
  let plainUrl = Object.entries(paramObject)[0][1];

  function getProjects(resolve, url) {
    const xhr = new XMLHttpRequest();

    xhr.addEventListener('error', (error)=> {
      alert('We are sorry: projects are currently unavailable');
    })

    xhr.addEventListener('load', () => {
      if (xhr.status >= 200 && xhr.status <= 304) {
      resolve(xhr.response);
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
    getProjects((response) => {
      responseArray.push(response)
      //console.log(plainUrl)
      getProjects((response) => {
        let plainUrlClean = plainUrl.replace("/css",'/');
        //console.log(plainUrlClean)
        responseArray.push(response);
        getProjects((response) => {
          responseArray.push(response);
          //console.log(responseArray);
          resolve(responseArray)
        }, plainUrlClean+=endpoints[1])
      }, plainUrl+=endpoints[0])
    }, plainUrl);
  }).then((responseArray) => {
    renderProject(responseArray)
/*     urlParams.searchParams.delete('href')
    window.location.href = urlParams.href + '#portfolio';  */
  })
}

function renderProject(responseArray) {
  const project = window.open('', '_blank');
  project.document.write(responseArray[0]);
  const css = project.document.querySelector('.css');
  css.innerHTML = responseArray[1];
  const js = project.document.querySelector('.js')
  js.innerHTML = responseArray[2]
  console.log(document)
  document.close();
// Insert HTML content into the new window
// Close the document to ensure the content is rendered
} 


// Open a new window

