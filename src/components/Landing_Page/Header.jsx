import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Header() {
    const [showMenu, setShowMenu] = useState(false);
    const navigate = useNavigate();

    return (
        <header className="navbar">
            <div className="logo">
                <img src="src/assets/logo.png" alt="Logo" onClick={() => navigate("/init")} />
            </div>
            <ul className={`nav-menu ${showMenu ? 'active' : ''}`}>
                <li className="nav-item" onClick={() => navigate("/init")}><a href="#" >INÍCIO</a></li>
                <li className="nav-item"><a href="#team">EQUIPE</a></li>
                <li className="nav-item" onClick={() => navigate("/products")}><a href="#servicos">PRODUTOS</a></li>
                <li className="nav-item" onClick={() => navigate("/cadastro")}><a href="#"><i className='bx bx-user'></i></a></li>
                <li className="nav-item" onClick={() => navigate("/cart")}><a href="#"><i className='bx bx-cart'></i></a></li>
            </ul>
            <div className="hamburger" onClick={() => setShowMenu(prev => !prev)}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </header>
    );
}
