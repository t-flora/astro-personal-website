// @ts-check
export default function ContactForm() {
    return (
        <form 
            className="contact-form"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            name="contact"
            method="POST"
            action="/success"
        >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
                <label>
                    Don&apos;t fill this out: <input name="bot-field" />
                </label>
            </p>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" required className="form-field"/>

            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" required className="form-field"/>

            <label htmlFor="contact-message">Message</label>
            <textarea name="contact-message" id="contact-message" wrap="soft" required className="form-field"/>
            <button type="submit" className="submit-button">Send</button>
        </form>
    );
}