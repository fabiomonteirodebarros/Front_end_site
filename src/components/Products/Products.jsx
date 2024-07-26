import React from 'react';
import { useCart } from '../Cart/CartContext';

export function Produtos() {
    const { addToCart } = useCart();
    const produtos = [
        { id: 1, nome: 'BIONUTRI Cocada Vegana', preco: 10.00, imagem: 'src/assets/barra_verde_sem_fundo.png' },
        { id: 2, nome: 'BIONUTRI Paçoca & Chocolate', preco: 12.00, imagem: 'src/assets/barra_verde_sem_fundo.png' },
        { id: 3, nome: 'BIONUTRI Cookies & Cream', preco: 115.00, imagem: 'src/assets/barra_verde_sem_fundo.png' },
        { id: 4, nome: 'BIONUTRI Bombom Crocante', preco: 135.00, imagem: 'src/assets/barra_verde_sem_fundo.png' },
        { id: 5, nome: 'BIONUTRI Brownie & Crispies', preco: 10.00, imagem: 'src/assets/barra_roxa_sem_fundo.png' },
        { id: 8, nome: 'BIONUTRI Brownie & Crispies (40g)', preco: 12.00, imagem: 'src/assets/barra_roxa_sem_fundo.png' },
        { id: 9, nome: 'BIONUTRI Brownie & Crispies (20g)', preco: 115.00, imagem: 'src/assets/barra_roxa_sem_fundo.png' },
        { id: 10, nome: 'BIONUTRI Brownie & Crispies (40g)', preco: 135.00, imagem: 'src/assets/barra_roxa_sem_fundo.png' },
        { id: 11, nome: 'BIONUTRI Paçoca & Chocolate (20g)', preco: 10.00, imagem: 'src/assets/barra_amarela_sem_fundo.png' },
        { id: 12, nome: 'BIONUTRI Paçoca & Chocolate (40g)', preco: 12.00, imagem: 'src/assets/barra_amarela_sem_fundo.png' },
        { id: 13, nome: 'BIONUTRI Paçoca & Chocolate (20g)', preco: 115.00, imagem: 'src/assets/barra_amarela_sem_fundo.png' },
        { id: 14, nome: 'BIONUTRI Paçoca & Chocolate (40g)', preco: 135.00, imagem: 'src/assets/barra_amarela_sem_fundo.png' },
        { id: 15, nome: 'BIONUTRI Cookies & Cream (20g)', preco: 10.00, imagem: 'src/assets/barra_azul_sem_fundo.png' },
        { id: 16, nome: 'BIONUTRI Cookies & Cream (40g)', preco: 12.00, imagem: 'src/assets/barra_azul_sem_fundo.png' },
        { id: 17, nome: 'BIONUTRI Cookies & Cream (20g)', preco: 115.00, imagem: 'src/assets/barra_azul_sem_fundo.png' },
        { id: 18, nome: 'BIONUTRI Cookies & Cream (40g)', preco: 135.00, imagem: 'src/assets/barra_azul_sem_fundo.png' },
        { id: 19, nome: 'BIONUTRI Bombom Crocante (20g)', preco: 10.00, imagem: 'src/assets/barra_marrom_sem_fundo.png' },
        { id: 20, nome: 'BIONUTRI Bombom Crocante (40g)', preco: 12.00, imagem: 'src/assets/barra_marrom_sem_fundo.png' },
        { id: 21, nome: 'BIONUTRI Bombom Crocante (20g)', preco: 115.00, imagem: 'src/assets/barra_marrom_sem_fundo.png' },
        { id: 22, nome: 'BIONUTRI Bombom Crocante (40g)', preco: 135.00, imagem: 'src/assets/barra_marrom_sem_fundo.png' },
        { id: 23, nome: 'BIONUTRI Caixa Mista (20g)', preco: 115.00, imagem: 'src/assets/caixa_mista_sem_fundo.png' },
        { id: 24, nome: 'BIONUTRI Caixa Mista (40g)', preco: 135.00, imagem: 'src/assets/caixa_mista_sem_fundo.png' },
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
