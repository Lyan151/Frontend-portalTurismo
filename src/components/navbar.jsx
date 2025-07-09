import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Verifica se há um token (ou usuário) no localStorage
        const user = localStorage.getItem('user');
        setIsAuthenticated(!!user);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem('user');
        setIsAuthenticated(false);
        window.location.href = '/'; // redireciona para Home
    };

    const menuLinks = (
        <>
            <a href="/" className="text-white hover:text-green-100 transition-colors duration-300 text-lg font-medium">Home</a>
            <a href="/about" className="text-white hover:text-green-100 transition-colors duration-300 text-lg font-medium">Sobre</a>
            <a href="/service" className="text-white hover:text-green-100 transition-colors duration-300 text-lg font-medium">Serviços</a>
            <a href="/contact" className="text-white hover:text-green-100 transition-colors duration-300 text-lg font-medium">Contato</a>
            {isAuthenticated ? (
                <>
                    <a href="/profile" className="text-white hover:text-green-100 transition-colors duration-300 text-lg font-medium">Perfil</a>
                    <button onClick={handleLogout} className="text-white hover:text-green-100 transition-colors duration-300 text-lg font-medium">Sair</button>
                </>
            ) : (
                <a href="/login" className="text-white hover:text-green-100 transition-colors duration-300 text-lg font-medium">Login</a>
            )}
        </>
    );

    return (
        <>
            <nav className="bg-yellow-300 px-4 py-3">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="text-white text-2xl font-bold">
                    <a href="/">Nova Serra Verde</a>
                </div>

                {/* Botão mobile */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        ☰
                    </button>
                </div>

                {/* Menu desktop */}
                <div className="hidden md:flex gap-6">
                    {menuLinks}
                </div>
            </div>

            {/* Menu mobile */}
            {isMenuOpen && (
                <div className="md:hidden mt-2 px-2">
                    {menuLinks}
                </div>
            )}
        </nav>
        </>
    );
};

export default Navbar;
