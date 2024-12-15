export  let messages = JSON.parse(localStorage.getItem('messages')) || [];

export class Contact {
  name;
  email;
  address;
  phone;
  message;
  contactQuery;
  form;

  constructor(contactContent) {
    this.name = contactContent[0];
    this.email = contactContent[1];
    this.address = contactContent[2];
    this.phone = contactContent[3];
    this.message = contactContent[4];
  };

  formCompiled() {
    alert(`Thank you so much for contacting me! You will get a response within the next few days!`);
  }
};

export function saveData(name, data) {
  localStorage.setItem(name, JSON.stringify(data))
}


export function contactsQuery() {
  let form = [];
  document.querySelectorAll('.js-contact').forEach((contact, index) => {
    form[index] = contact.value;
  })  



    for (let i = 0; i < form.length-1; i++) {
      if (form[i] === '') {
        alert('Please compile each form\'s query');
        return false;
      }

      document.getElementById('contact').addEventListener('submit', (event) => {
        event.preventDefault();
      });
    };
    console.log(form)
    const contactQuery = new Contact(form)
    messages.push(contactQuery);
    saveData('messages', messages)
    return messages;
};
 
