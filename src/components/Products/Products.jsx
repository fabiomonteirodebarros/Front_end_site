import React from 'react';
import { useCart } from '../Cart/CartContext';

export function Produtos() {
    const { addToCart } = useCart();
    const produtos = [
        { id: 1, nome: '1x BIONUTRI COCADA VEGANA (40g)', preco: 10.00, imagem: 'src/assets/barra_verde_sem_fundo.png' },
        { id: 2, nome: '1x BIONUTRI COCADA VEGANA (60g)', preco: 12.00, imagem: 'src/assets/barra_verde_sem_fundo.png' },
        { id: 3, nome: '12x BIONUTRI COCADA VEGANA (40g)', preco: 115.00, imagem: 'src/assets/barra_verde_sem_fundo.png' },
        { id: 4, nome: '12x BIONUTRI COCADA VEGANA (60g)', preco: 135.00, imagem: 'src/assets/barra_verde_sem_fundo.png' },
        { id: 5, nome: '1x BIONUTRI BROWNIE & CRISPIES (40g)', preco: 10.00, imagem: 'src/assets/barra_roxa_sem_fundo.png' },
        { id: 8, nome: '1x BIONUTRI BROWNIE & CRISPIES (60g)', preco: 12.00, imagem: 'src/assets/barra_roxa_sem_fundo.png' },
        { id: 9, nome: '12x BIONUTRI BROWNIE & CRISPIES (40g)', preco: 115.00, imagem: 'src/assets/barra_roxa_sem_fundo.png' },
        { id: 10, nome: '12x BIONUTRI BROWNIE & CRISPIES (60g)', preco: 135.00, imagem: 'src/assets/barra_roxa_sem_fundo.png' },
        { id: 11, nome: ' 1x BIONUTRI PAÇOCA & CHOCOLATE (40g)', preco: 10.00, imagem: 'src/assets/barra_amarela_sem_fundo.png' },
        { id: 12, nome: '1x BIONUTRI PAÇOCA & CHOCOLATE (60g)', preco: 12.00, imagem: 'src/assets/barra_amarela_sem_fundo.png' },
        { id: 13, nome: '12x BIONUTRI PAÇOCA & CHOCOLATE (40g)', preco: 115.00, imagem: 'src/assets/barra_amarela_sem_fundo.png' },
        { id: 14, nome: '12x BIONUTRI PAÇOCA & CHOCOLATE (60g)', preco: 135.00, imagem: 'src/assets/barra_amarela_sem_fundo.png' },
        { id: 15, nome: '1x BIONUTRI COOKIES & CREAM (40g)', preco: 10.00, imagem: 'src/assets/barra_azul_sem_fundo.png' },
        { id: 16, nome: '1x BIONUTRI COOKIES & CREAM (60g)', preco: 12.00, imagem: 'src/assets/barra_azul_sem_fundo.png' },
        { id: 17, nome: '12x BIONUTRI COOKIES & CREAM (40g)', preco: 115.00, imagem: 'src/assets/barra_azul_sem_fundo.png' },
        { id: 18, nome: '12x BIONUTRI COOKIES & CREAM (60g)', preco: 135.00, imagem: 'src/assets/barra_azul_sem_fundo.png' },
        { id: 19, nome: '1x BIONUTRI BOMBOM CROCANTE (40g)', preco: 10.00, imagem: 'src/assets/barra_marrom_sem_fundo.png' },
        { id: 20, nome: '1x BIONUTRI BOMBOM CROCANTE (60g)', preco: 12.00, imagem: 'src/assets/barra_marrom_sem_fundo.png' },
        { id: 21, nome: '12x BIONUTRI BOMBOM CROCANTE (40g)', preco: 115.00, imagem: 'src/assets/barra_marrom_sem_fundo.png' },
        { id: 22, nome: '12x BIONUTRI BOMBOM CROCANTE (60g)', preco: 135.00, imagem: 'src/assets/barra_marrom_sem_fundo.png' },
        { id: 23, nome: 'BIONUTRI CAIXA MISTA (40g)', preco: 115.00, imagem: 'src/assets/caixa_mista_sem_fundo.png' },
        { id: 24, nome: 'BIONUTRI CAIXA MISTA (60g)', preco: 135.00, imagem: 'src/assets/caixa_mista_sem_fundo.png' },
        { id: 25, nome: '1x BIOWHEYFER MORANGO (35g)', preco: 8.00, imagem: 'src/assets/barra_rosa.png' },
        { id: 26, nome: '12x BIOWHEYFER MORANGO (35g)', preco: 80.00, imagem: 'src/assets/barra_rosa.png' },
        { id: 27, nome: '1x BIOWHEYFER CHOCOLATE (35g)', preco: 8.00, imagem: 'src/assets/barra_azul.png' },
        { id: 28, nome: '12x BIOWHEYFER CHOCOLATE (35g)', preco: 80.00, imagem: 'src/assets/barra_azul.png' },
        { id: 29, nome: '1x BIOWHEYFER BAUNILHA (35g)', preco: 8.00, imagem: 'src/assets/barra_vermelha.png' },
        { id: 30, nome: '12x BIOWHEYFER BAUNILHA (35g)', preco: 80.00, imagem: 'src/assets/barra_vermelha.png' },
        { id: 31, nome: '1x BIOWHEYFER BITES CHOCOLATE (90g)', preco: 12.00, imagem: 'src/assets/bites_pas.png' },
        { id: 32, nome: '12x BIOWHEYFER BITES CHOCOLATE (90g)', preco: 130.00, imagem: 'src/assets/bites_pas.png' },
        { id: 33, nome: '1x BIOWHEYFER BITES BAUNILHA (90g)', preco: 130.00, imagem: 'src/assets/bites.png' },
        { id: 32, nome: '12x BIOWHEYFER BITES BAUNILHA (90g)', preco: 130.00, imagem: 'src/assets/bites.png' },

    ];

    return (
        <section id="produtos">
            <div className="produtos-container">
                {produtos.map(produto => (
                    <div key={produto.id} className="produto">
                        <img src={produto.imagem} className="produto-imagem" alt={produto.nome} />
                        <div className="produto-descricao">
                            <h3>{produto.nome}</h3>
                            <p>R${produto.preco.toFixed(2)}</p>
                        </div>
                        <button className="produto-button" onClick={() => addToCart(produto)}>
                            <i className="bx bxs-cart-add"></i> ADICIONAR
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}
