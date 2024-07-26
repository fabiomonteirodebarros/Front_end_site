import React from 'react';

export function Footer() {
    return (
        <section class="footer">
        <div class="container2">
            <ul>
                <h3>BIONUTRI</h3>
                <p> Nossos alimentos nutritivos são feitos com ingredientes selecionados para garantir saúde, energia e sabor. Experimente e sinta a diferença no seu bem-estar diário!</p>
                <div class="redes-sociais">
                    <a><i class='bx bxl-facebook-circle' ></i></a>
                    <a><i class='bx bxl-whatsapp' ></i></a>
                    <a><i class='bx bxl-instagram' ></i></a>
                    <a><i class='bx bxl-linkedin-square' ></i></a>
                </div>
            </ul>
            <ul>
                <h3>Link</h3>
                <li><a href="#">Início</a></li>
                <li><a href="#team">Equipe</a></li>
                <li><a href="#servicos">Alimentos</a></li>
            </ul>
            <ul>
                <h3>Suporte</h3>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Como funciona</a></li>
                <li><a href="#">Características</a></li>
                <li><a href="#">Contato</a></li>
            </ul>
            <ul>
                <h3>Contatos</h3>
                <li>
                    <p>+55 (11)3754-2959</p>
                </li>
                <li>
                    <p>suporte@bionutri.com.br</p>
                </li>
                <li>
                    <p>Brasil</p>
                </li>
            </ul>
        </div>
    </section>
    );
}