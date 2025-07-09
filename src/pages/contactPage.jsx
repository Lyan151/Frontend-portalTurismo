import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ContactForm from "../components/contactForm";

const ContactPage = () => {
    return(
        <>
        <div className="flex flex-col min-h-screen">
             <Navbar/>
           <div>
            <ContactForm/>
          </div>
            <Footer/>
        </div>
        </>
    )
}
export default ContactPage;