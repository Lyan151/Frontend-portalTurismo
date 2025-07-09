import React from "react";

const AboutHero = (props) => {
    return (
        <>
            <div
                className="bg-white h-[900px] m-8 mt-16"
                style={{ backgroundImage: `url(${props.img})` }}
            >
                <div />
                <div className="w-425 h-175 bg-white bg-opacity-80 text-black flex items-center justify-center rounded shadow-lg z-20">
                    <p className="text-center text-lg font-medium p-4">
                           A construção desta página está sendo bem complicada pois eu pesquiso no chatgpt e ele não me mostra a resposta certa, entao assim fica bem complicado. 
                    </p>
                </div>
                <div className="relative z-10 text-center p-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                        {props.titulo}
                    </h1>
                    <p className="text-lg md:text-x2 mb-6 max-w-3xl mx-auto drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                        {props.paragrafo}
                    </p>
                   
                </div>
            </div>
        </>
    )
}

export default AboutHero;