import { Contact, messages } from "../Data/contactSectiondata.js";

export function reloadPage() {
    window.location.reload()
};

export function saveData(name, data) {
  localStorage.setItem(name, JSON.stringify(data))
}

export function sendNewContacts(fun) {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener('error', (error) => {
    alert(`We are sorry, an ${error} has occured`)
  });

  xhr.addEventListener('load', () => {
    if (xhr.status >= 200 && xhr.status <= 300) {
      const advice = new Contact(xhr.response)
      advice.formCompiled()
  
      fun()
    } else {
      alert(`Request failed with status: ${xhr.status} - ${xhr.statusText}`);
    }
  });

  const lastContacts = JSON.stringify(messages[messages.length - 1])

  xhr.open('POST', 'https://192.168.1.101:3500/contacts/sendcontacts');
  xhr.setRequestHeader("Content-Type", "application/json")
  xhr.send(lastContacts);
};

