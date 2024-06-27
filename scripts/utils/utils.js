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
    const advice = new Contact(xhr.response)
    advice.formCompiled()

    fun()
  });

  const lastContacts = JSON.stringify(messages[messages.length - 1])

  xhr.open('POST', 'https://lorenzovwebdev.github.io/lorenzoVigPortfolioBackend/contacts/sendcontacts/');
  xhr.setRequestHeader("Content-Type", "application/json")
  xhr.send(lastContacts);
};

