import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import AboutHero from "../components/aboutHero";
import bg from "../assets/imagens/bg.png";
const AboutPage = () => {
    return (
        <>
            <div className="flex flex-col min-h-screen w-full h-full">
                <Navbar />
            <div>
                <div className="content-wrap">
                    <AboutHero img = {bg}/>
                </div>
            </div>
                <Footer />
            </div>
        </>
    )
}
export default AboutPage;