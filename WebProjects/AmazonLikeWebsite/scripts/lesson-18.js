/*
const xhr = new XMLHttpRequest();

xhr.addEventListener('load', () => {
  //console.log(xhr.response)
})

xhr.open('GET', "https://supersimplebackend.dev/documentation");
xhr.send();
*/

//18.b

/*
function greetingFetch() {
fetch('https://supersimplebackend.dev/greeting').then((response) => {
  return response.text()
}).then((text) => {
  return text;
})
};


//18.c

async function loadGreetings() {
  const response = await fetch('https://supersimplebackend.dev/greeting')

  const text = await response.text();

  console.log(text)
}

loadGreetings();

//18.d

async function postGreetings() {
  const response = await fetch('https://supersimplebackend.dev/greeting', {
    method: 'POST',
    headers: {
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify({
      name: 'Lorenzo Viganego'
    })
  });

  const text = await response.text();

  console.log(text);
};

postGreetings();
*/

//18.e

/*
function amazonRequest(fun) {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener('load', () => {
    const response = xhr.response;
    fun(response);
  });

  xhr.open('GET', 'https://amazon.com');
  xhr.send();
}

new Promise((resolve) => {
  amazonRequest((response) => {
    resolve(response);
  });
}).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(`An error is occurring: ${error.message}`);
  });
  

  async function amazonRequest() {
    try {
      const response = await fetch('https://amazon.com');

      const text = await response.text();
      console.log(text)
    } catch (error) {
      console.log('CORS error. You request was blocked by the backend.');
    }
  }

  amazonRequest()


function loadProductsFetch() {
    fetch('https://amazon.com').then((response) => {
      return response.text()
    }).then((text) => {
      console.log(text)
    }).catch((error) => {
      console.log('Unexpected error. Please try again later.')
    })
  };
  
  loadProductsFetch()

  function amazonRequest(fun) {
    const xhr = new XMLHttpRequest();
  
    xhr.addEventListener('load', () => {
      const response = xhr.response;
      fun(response);
    });

    xhr.addEventListener('error', () => {})
  
    xhr.open('GET', 'https://amazon.com');
    xhr.send();
  }
  
  new Promise((resolve) => {
    amazonRequest((response, error) => {
      resolve(response);
    });
  }).then((response) => {
      console.log(response);
  }).catch((error) => {
      console.log(`An error is occurring: ${error.message}`);
  });

  */

  //18g

  async function postGreeting() {
    try {
      const request = await fetch('https://supersimplebackend.dev', {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json'
        }
      });

      if (request.status >= 400) {
        throw request;
      }
    } catch (error) {
      if (error.status === 400) {
        const errorMessage = await error.json();
        console.log(errorMessage);
      } else {
        console.log('Nerwork error. Please try again later.')
      }
    }
  }

  postGreeting()