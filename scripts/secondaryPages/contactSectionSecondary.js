import { reloadPage, saveData, sendNewContacts } from "../utils/utils.js";
import { messages, contactsQuery } from "../Data/contactSectiondata.js";

function importContacts() {

  const contactSection = `
    <div class="main-text">
        <span>ask me a question</span>
        <h2>Contact me</h2>
    </div>
      
    <form id="contactform" action="">
        <input class="js-contact" type="text" placeholder="Your Name">
        <input class="js-contact" type="text" placeholder="Your Email">
        <input class="js-contact" type="text" placeholder="Your Address">
        <input class="js-contact" type="text" placeholder="Phone Number">
        <textarea class="js-contact" name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
        <div class="btn-box formBtn">
          <button  type="submit" class="btn js-submit">Send Message</button>
        </div>
    </form>
  `
  document.querySelector('.js-contact-section').innerHTML = contactSection;

  document.querySelector('.js-submit').addEventListener('click', () => {
      const boolean = contactsQuery();
      if (boolean) {

        sendNewContacts(() => {
          reloadPage(); 
          saveData('messages', messages);
        })

      };
    });
  };

importContacts()