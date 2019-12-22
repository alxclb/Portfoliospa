import React from "react";

function Contact(props) {

let contact = props.contactInfo;

  return (
    <div id="contact">
      <h1>Contact // Kontakt informacije</h1>
      <address>
        Written by{" "}
        <a href={contact.mailto}>{contact.name}</a>.
        <br></br>
         {contact.occupation}<br></br>
        {contact.github}<br></br>
        {contact.linkedin}<br></br>
        {contact.city}<br></br>
        {contact.state}
      </address>
    </div>
  );
}
export default Contact;
