import React, { Component } from "react";
import FaMail from "react-icons/lib/fa/envelope";

class ContactForm extends Component {
	render() {
		return (
			<form
				name="contact"
				id="contact-form"
				method="POST"
				data-netlify="true"
			>
				<div className={"contact-form-section"}>
					<label>Ditt namn:</label>
					<input required type="text" name="name" />
				</div>
				<div className={"contact-form-section"}>
					<label>Din mail:</label>
					<input required type="email" name="email" />
				</div>
				<div className={"contact-form-section"}>
					<label>Ditt meddelande:</label>
					<textarea required name="message" cols="30" rows="3" />
				</div>
				<div netlify-recaptcha />
				<div className={"contact-form-section"}>
					<button type="submit">
						<FaMail /> Skicka
					</button>
				</div>
			</form>
		);
	}
}

export default ContactForm;