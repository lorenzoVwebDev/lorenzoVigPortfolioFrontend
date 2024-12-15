import { Contact, messages } from "../Data/contactSectiondata.js";
const backEndUrl = 'https://backend.lorenzo-viganego.com/';
const backEndUrlNoProxy = 'http://172.232.217.98:3000/';
const localHost = 'http://localhost:3000/';

export function reloadPage() {
    window.location.reload()
};

export function saveData(name, data) {
  localStorage.setItem(name, JSON.stringify(data))
}

export function sendNewContacts(fun) {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener('error', (error) => {
   alert('We are sorry, an error has occured. We\'ll fix the problem as soon as possible!')
  })

  xhr.addEventListener('load', () => {
    if (xhr.status >= 200 && xhr.status <= 300) {
/*       const advice = new Contact(xhr.response)
      advice.formCompiled() */
      alert('Thank you so much for contacting me! You\'ll be respondend within the next few days!');
      
      fun()
    } else {
      alert(`Request failed with status: ${xhr.status} - ${xhr.response}`);
    }
  });

  const lastContacts = JSON.stringify(messages[messages.length - 1])
  console.log(lastContacts)

  xhr.open('POST', `${backEndUrl}contacts/sendcontacts`);
  xhr.setRequestHeader('Content-Type', 'application/json'); 
  xhr.send(lastContacts);
};
