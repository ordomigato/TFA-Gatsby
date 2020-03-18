import React from "react"

import Layout from '../components/Layout'
import CoolButton from '../components/CoolButton'
import './contact.scss'


const ContactPage = () => {
    return (
        <Layout>
            <div className="navbar-fix">
                <div className="contact-page-header">
                    <h1>Need to Contact Us?</h1>
                    <p className="contact-page-caption">If you wish to purchase any merchandise with cash, request a custom build, or have any other inquiry, feel free to send us a message</p>
                </div>
                <form className="contact-form" name="contact" method="POST" netlify>
                    <div className="contact-dual">
                        <input className="input-field" type="text" name="name" placeholder="Your Name*" />
                        <input className="input-field" type="text" name="email" placeholder="Your Email" />
                    </div>
                    <textarea className="input-field" rows="4" name="message" placeholder="Message..."></textarea>
                    <div data-netlify-recaptcha="true"></div>
                    <CoolButton 
                        text="Send"
                    />
                </form>
            </div>
        </Layout>
    )
}

export default ContactPage