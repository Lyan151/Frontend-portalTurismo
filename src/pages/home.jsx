import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import bg from "../assets/imagens/bg.png";
const Home = () => {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Navbar/>
                <div>
                    <Hero img = {bg} titulo = "Nova serra Verde" paragrafo="conheça nossas atrações" rota="#" botao="Saiba mais" />
                </div>
                    <Footer />
            </div>
        </>
    )

}

export default Home;