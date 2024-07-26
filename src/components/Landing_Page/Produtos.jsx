import React from 'react';
import { useNavigate } from 'react-router-dom';

export function Produtos() {
    let navigate = useNavigate()
    return (
        <section id="servicos">
    <div id="tratamentos">
        <div class="tratamento">
            <img src="src/assets/barra_roxa.webp" class="logo-servico" alt="Barra Roxa"></img>
        </div>
        <div class="tratamento">
            <img src="src/assets/barra_marrom.webp" class="logo-servico" alt="Barra Marrom"></img>
        </div>
        <div class="tratamento">
            <img src="src/assets/barra_azul.webp" class="logo-servico" alt="Barra Azul"></img>
        </div>
    </div>
    <div class="tratamentos-baixo">
        <div class="tratamento-baixo">
            <img src="src/assets/barra_amarela.webp" class="logo-servico-baixo" alt="Barra Amarela"></img>
        </div>
        <div class="tratamento-baixo">
            <img src="src/assets/barra_verde.webp" class="logo-servico-baixo" alt="Barra Verde"></img>
        </div>
    </div>
    <div class="section-button" onClick={() => navigate("/products")}>
        <button>MAIS VENDIDOS</button>
    </div>
</section>


    );
}