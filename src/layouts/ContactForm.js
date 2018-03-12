import React, { Component } from "react";
import FaMail from "react-icons/lib/fa/envelope";

class ContactForm extends Component {
	render() {
		return (
			<form
				name="contact"
				method="POST"
				action="thank-you"
				netlify
				id="contact-form"
			>
				<div className={"contact-form-section"}>
					<label>Ditt namn:</label>
					<input required type="text" name="namn" />
				</div>
				<div className={"contact-form-section"}>
					<label>Din mail:</label>
					<input required type="email" name="mail" />
				</div>
				<div className={"contact-form-section"}>
					<label>Ditt meddelande:</label>
					<textarea required name="meddelande" cols="30" rows="3" />
				</div>
				<div netlify-recaptcha />
				<div className={"contact-form-section"}>
					<button type="submit"><FaMail /> Skicka</button>
				</div>
			</form>
		);
	}
}

export default ContactForm;

/* <form name="contact" method="POST" action="thank-you" netlify>
  <div>
    <label>Email: <input type="text" name="name"></label>
  </div>
  <div>
    <label>Message: <textarea name="message"></textarea></label>
  </div>
  <div netlify-recaptcha></div>
  <div>
    <button type=”submit”>Send</button>
  </div>
</form> */
