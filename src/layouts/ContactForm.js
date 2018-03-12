import React, { Component } from "react";
import FaMail from "react-icons/lib/fa/envelope";

class ContactForm extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleSubmit = e => {
		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: encode({ "form-name": "contact", ...this.state })
		})
			.then(() => alert("Success!"))
			.catch(error => alert(error));

		e.preventDefault();
	};

	render() {
		return (
			<form
				name="contact"
				method="post"
				action="/../layouts/thanks/"
				data-netlify="true"
				data-netlify-honeypot="bot-field"
				onSubmit={this.handleSubmit}
				id="contact-form"
			>
				<div className={"contact-form-section"}>
					<label>Ditt namn:</label>
					<input required type="text" name="name" onChange={this.handleChange}/>
				</div>
				<div className={"contact-form-section"}>
					<label>Din mail:</label>
					<input required type="email" name="email" onChance={this.handleChange}/>
				</div>
				<div className={"contact-form-section"}>
					<label>Ditt meddelande:</label>
					<textarea required name="message" cols="30" rows="3" onChance={this.handleChange}/>
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
