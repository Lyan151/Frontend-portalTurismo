import React from "react";
import CardService from "./cardService";
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import imagem1 from "../assets/imagens/imagem1.png"
import imagem2 from "../assets/imagens/imagem2.png"
import imagem3 from "../assets/imagens/imagem3.png"
import imagem4 from "../assets/imagens/imagem4.png"
import imagem5 from "../assets/imagens/imagem5.png"
import imagem6 from "../assets/imagens/imagem6.png"


const tourist_places = [
    { Image: imagem1, title: "lugar1", descrition: " Ponto turistico " },
    { Image: imagem2, title: "lugar2", descrition: " Ponto turistico " },
    { Image: imagem3, title: "lugar3", descrition: " Ponto turistico " },
    { Image: imagem4, title: "lugar4", descrition: " Ponto turistico " },
    { Image: imagem5, title: "lugar5", descrition: " Ponto turistico " },
    { Image: imagem6, title: "lugar6", descrition: " Ponto turistico " },
]



// Componente funcional Carousel que renderiza o carrossel dos pontos turísticos
const Carousel = () => {

    return (
        <>
            {/* Container principal com z-index alto para sobreposição */}
            <div className=" relative z-10 ">
                {/* Título principal da seção */}
                <h1 className=" text-3xl font-bold text-center mt-32 text-black drop-shadow-lg">
                    Pontos turísticos locais mais visitados
                </h1>

                <div>
                    {/* Condicional para verificar se há mais de 3 pontos turísticos */}
                    {tourist_places.length > 3 ? (
                        // Caso tenha mais de 3, exibe o Swiper configurado para mostrar 2 ou 3 cards conforme a largura da tela
                        <Swiper
                            slidesPerView={2}  // Número inicial de slides visíveis
                            spaceBetween={20}  // Espaçamento entre os slides
                            loop={true}        // Faz o carrossel loopar infinitamente
                            breakpoints={{     // Configuração responsiva dos slides por view e espaçamento
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                            }}
                        >
                            {/* Mapeia cada ponto turístico para um slide */}
                            {tourist_places.map((place, index) => (
                                <SwiperSlide key={index}>
                                    {/* Renderiza o card do ponto turístico */}
                                    <CardService
                                        img={place.Image}
                                        alt={place.description}
                                        titulo={place.title}
                                        descricao={place.description}
                                        link="#"
                                        botao="Saiba Mais"
                                    
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        
                    ) : (
                        // Caso tenha 3 ou menos pontos turísticos, configura o Swiper para mostrar menos cards
                        <Swiper
                            slidesPerView={2}  // Número inicial de slides visíveis
                            spaceBetween={20}  // Espaçamento entre os slides
                            loop={true}        // Loop infinito
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,  // Em telas pequenas mostra só 1 slide
                                    spaceBetween: 20,
                                },
                                1024: {
                                    slidesPerView: 2,  // Em telas maiores mostra 2 slides
                                    spaceBetween: 30,
                                },
                            }}
                        >
                            {tourist_places.map((place, index) => (
                                <SwiperSlide key={index}>
                                    <CardService
                                        img={place.Image}
                                        alt={place.description}
                                        titulo={place.title}
                                        descricao={place.description}
                                        link="#"
                                        botao="Saiba Mais"
                                    />
                                </SwiperSlide>
                                
                            ))}
                        </Swiper>

                    )}
                </div>
            </div>
        </>
    )
}

export default Carousel  // Exporta o componente para uso externo

