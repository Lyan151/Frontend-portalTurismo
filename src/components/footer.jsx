import React from "react";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
const Footer = () => {
    return (
        <>
            <footer className="w-full bg-gradient-to-r from-green-200 to-orange-400 text-black py-2 px-3 shadow-lg mt-auto">
                <div>
                    <div className="w-full mx-auto flex flex-col justify-between items-center ">
                        <div className="text-center md: mb-4 md:mb-0">
                            <p className="text-sm text-black">Nova serra verde. Todos os direitos reservados</p>
                        </div>

                           <div className="flex space-x-10">
                            <a href="#" className="hover:text-blue-500"><FaSquareInstagram /></a>
                            <a href="#" className="hover:text-blue-900"><FaFacebook /></a>
                            <a href="#" className="hover:text-yellow-300"><IoLogoWhatsapp /></a>
                         </div>  
                    </div>
                </div>


            </footer>
           
        </>
    )

}

export default Footer