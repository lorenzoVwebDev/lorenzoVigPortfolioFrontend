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
    this.name = contactContent[0].value;
    this.email = contactContent[1].value;
    this.address = contactContent[2].value;
    this.phone = contactContent[3].value;
    this.message = contactContent[4].value;
  };

  formCompiled() {
    alert(`Thank you so much for contacting me! You will get a response within the next few days!`);
  }
};

export function contactsQuery() {
  let contactQuery;
  let form = Array.from(document.querySelectorAll('.js-contact'))

    for (let i = 0; i < form.length; i++) {
      if (form[i].value === '') {
        alert('Please compile each form\'s query');
        return;
      }

      document.getElementById('contact').addEventListener('submit', (event) => {
        event.preventDefault();
      });
    };

    for (let i = 0; i <= form.length; i++) {
      contactQuery = new Contact(form)
    };

    messages.push(contactQuery);
/*     contactQuery.formCompiled(); */

    return true;
};
 
/* export function saveData(messages) {
  localStorage.setItem('messages', JSON.stringify(messages))
};
 */


console.log(messages[messages.length - 1]) 