export function resume() {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://backend.lorenzo-viganego.com/templatesresume/resume', true); 
  xhr.responseType = 'blob'; 

  xhr.addEventListener('load', () => {
    if (xhr.status >= 200 && xhr.status < 300) {

      const blob = xhr.response; 
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = url;
      a.target = '__blank'; 
      document.body.appendChild(a); 
      a.click(); 
      document.body.removeChild(a); 

      window.URL.revokeObjectURL(url);
    } else {
      console.error('Request failed:', xhr.status, xhr.statusText);
    }
  });

  xhr.addEventListener('error', () => {
    console.error('Network error occurred while downloading the file.');
  });
  xhr.send();
}


export function templates(url) {
  const xhr = new XMLHttpRequest();
  console.log(url)


  

  xhr.addEventListener('load', () => {
    if (xhr.status >= 200 && xhr.status < 300) {

      const blob = xhr.response; 
      const urlOjbect = window.URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = urlOjbect;
      a.target = '__self'; 
      document.body.appendChild(a); 
      a.click(); 
      document.body.removeChild(a); 

      window.URL.revokeObjectURL(urlOjbect);
    } else {
      console.error('Request failed:', xhr.status, xhr.statusText);
    }
  });

  xhr.addEventListener('error', () => {
    console.error('Network error occurred while downloading the file.');
  });

  xhr.open('GET', url, true); 
  xhr.responseType = 'blob'; 
  xhr.send();
}


