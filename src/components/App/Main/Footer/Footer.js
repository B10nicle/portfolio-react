import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="contact-box">
        <div className="contact-box__image"/>
        <form className="contact-box__form"
              action="https://formsubmit.co/6fea598baf74642880b284fc5b3a57f7"
              method="POST">
          <h2 className="contact-box__title">Drop me a message</h2>
          <input type="hidden" name="_subject" value="Oleg Khilko | New Message"/>
          <input type="hidden" name="_captcha" value="false"/>
          <input type="hidden" name="_autoresponse"
                 value="Thank you for your message. I will revert with the answer shortly."/>
          <input className="contact-box__field contact-box__field_type_name" type="text"
                 placeholder="Name"
                 name="name"
                 required/>
          <input className="contact-box__field contact-box__field_type_email"
                 type="email"
                 placeholder="Email"
                 name="email"
                 required/>
          <textarea className="contact-box__field contact-box__field_type_message"
                    placeholder="Message" name="message"
                    required/>
          <button className="send-button" type="submit">Send</button>
        </form>
      </div>
    </footer>
  );
}

export default Footer;
