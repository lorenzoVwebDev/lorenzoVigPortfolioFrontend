import { reloadPage, sendNewContacts } from "../utils/utils.js";
import { messages, contactsQuery } from "../Data/contactSectiondata.js";

import {resume} from "../utils/resume.js"

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
          <button  type="submit" class="btn js-submit-contacts">Send Message</button>
        </div>
    </form>
  `
  document.querySelector('.js-contact-section').innerHTML = contactSection;

  document.querySelector('.js-submit-contacts').addEventListener('click', () => {
      const boolean = contactsQuery();
      if (boolean) {
          sendNewContacts(() => {
            reloadPage();
          })
      };
    });
  };

  document.querySelector('.js-cvbutton').addEventListener('click', () => {
    resume();
  })

importContacts()