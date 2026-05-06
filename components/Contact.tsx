import "./Contact.css";

export default function Contact() {
    return (

        <section id="contact" className="contact">

            <div className="glass form-row">
                            <p>Contact us : </p>

                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="tel" placeholder="Mobile" />

                <button>Send</button>
            </div>
        </section>

    );
}