import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import bgCachoeira from "../assets/imagens/bgCachoeira.png";
import Carousel from "../components/carousel";
const ServicePages = () => {
     return(
        <>
        <div className="flex flex-col min-h-screen">
              <Navbar/>
              <div>
                 <Hero img = {bgCachoeira} titulo = "Portal de Serviços" paragrafo="Venha conhecer os mais diversos" rota="#" botao="Saiba mais" />
                 <div>
                    <Footer/>
                    <div>
                    <Carousel/>
                    </div>
                 </div>
              </div>
        </div>
        </>
     )
}
export default ServicePages;