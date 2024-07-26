import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function ProdutosQuantidade() {
    let navigate = useNavigate()
    const produtosIniciais = [
        { nome: 'BIONUTRI Cocada Vegana', imagem: 'src/assets/barra_verde_sem_fundo.png', descricao: '1x BIONUTRI COCADA VEGANA (20g)', preco: 'R$ 10,00', quantidade: 1 },
        { nome: 'BIONUTRI Paçoca & Chocolate', imagem: 'src/assets/barra_verde_sem_fundo.png', descricao: '1x BIONUTRI COCADA VEGANA (40g)', preco: 'R$ 12,00', quantidade: 1 },
        { nome: 'BIONUTRI Cookies & Cream', imagem: 'src/assets/barra_verde_sem_fundo.png', descricao: '12x BIONUTRI COCADA VEGANA (20g)', preco: 'R$ 115,00', quantidade: 1 },
        { nome: 'BIONUTRI Bombom Crocante', imagem: 'src/assets/barra_verde_sem_fundo.png', descricao: '12x BIONUTRI COCADA VEGANA (40g)', preco: 'R$ 135,00', quantidade: 1 },
        { nome: 'BIONUTRI Brownie & Crispies', imagem: 'src/assets/barra_roxa_sem_fundo.png', descricao: '1x BIONUTRI BROWNIE & CRISPIES (20g)', preco: 'R$ 10,00', quantidade: 1 },
        { nome: 'BIONUTRI Caixa Mista', imagem: 'src/assets/barra_roxa_sem_fundo.png', descricao: '1x BIONUTRI BROWNIE & CRISPIES (40g)', preco: 'R$ 12,00', quantidade: 1 },
        { nome: 'BIONUTRI Caixa Mista', imagem: 'src/assets/barra_roxa_sem_fundo.png', descricao: '12x BIONUTRI BROWNIE & CRISPIES (20g)', preco: 'R$ 115,00', quantidade: 1 },
        { nome: 'BIONUTRI Caixa Mista', imagem: 'src/assets/barra_roxa_sem_fundo.png', descricao: '12x BIONUTRI BROWNIE & CRISPIES (40g)', preco: 'R$ 135,00', quantidade: 1 },
        { nome: 'BIONUTRI Paçoca & Chocolate', imagem: 'src/assets/barra_amarela_sem_fundo.png', descricao: '1x BIONUTRI PAÇOCA & CHOCOLATE (20g)', preco: 'R$ 10,00', quantidade: 1 },
        { nome: 'BIONUTRI Paçoca & Chocolate', imagem: 'src/assets/barra_amarela_sem_fundo.png', descricao: '1x BIONUTRI PAÇOCA & CHOCOLATE (40g)', preco: 'R$ 12,00', quantidade: 1 },
        { nome: 'BIONUTRI Paçoca & Chocolate', imagem: 'src/assets/barra_amarela_sem_fundo.png', descricao: '12x BIONUTRI PAÇOCA & CHOCOLATE (20g)', preco: 'R$ 115,00', quantidade: 1 },
        { nome: 'BIONUTRI Paçoca & Chocolate', imagem: 'src/assets/barra_amarela_sem_fundo.png', descricao: '12x BIONUTRI PAÇOCA & CHOCOLATE (40g)', preco: 'R$ 135,00', quantidade: 1 },
        { nome: 'BIONUTRI Cookies & Cream', imagem: 'src/assets/barra_azul_sem_fundo.png', descricao: '1x BIONUTRI COOKIES & CREAM (20g)', preco: 'R$ 10,00', quantidade: 1 },
        { nome: 'BIONUTRI Cookies & Cream', imagem: 'src/assets/barra_azul_sem_fundo.png', descricao: '1x BIONUTRI COOKIES & CREAM (40g)', preco: 'R$ 12,00', quantidade: 1 },
        { nome: 'BIONUTRI Cookies & Cream', imagem: 'src/assets/barra_azul_sem_fundo.png', descricao: '12x BIONUTRI COOKIES & CREAM (20g)', preco: 'R$ 115,00', quantidade: 1 },
        { nome: 'BIONUTRI Cookies & Cream', imagem: 'src/assets/barra_azul_sem_fundo.png', descricao: '12x BIONUTRI COOKIES & CREAM (40g)', preco: 'R$ 135,00', quantidade: 1 },
        { nome: 'BIONUTRI Bombom Crocante', imagem: 'src/assets/barra_marrom_sem_fundo.png', descricao: '1x BIONUTRI BOMBOM CROCANTE (20g)', preco: 'R$ 10,00', quantidade: 1 },
        { nome: 'BIONUTRI Bombom Crocante', imagem: 'src/assets/barra_marrom_sem_fundo.png', descricao: '1x BIONUTRI BOMBOM CROCANTE (40g)', preco: 'R$ 12,00', quantidade: 1 },
        { nome: 'BIONUTRI Bombom Crocante', imagem: 'src/assets/barra_marrom_sem_fundo.png', descricao: '12x BIONUTRI BOMBOM CROCANTE (20g)', preco: 'R$ 115,00', quantidade: 1 },
        { nome: 'BIONUTRI Bombom Crocante', imagem: 'src/assets/barra_marrom_sem_fundo.png', descricao: '12x BIONUTRI BOMBOM CROCANTE (40g)', preco: 'R$ 135,00', quantidade: 1 },
        { nome: 'BIONUTRI Caixa Mista', imagem: 'src/assets/caixa_mista_sem_fundo.png', descricao: 'BIONUTRI CAIXA MISTA (20g)', preco: 'R$ 115,00', quantidade: 1 },
        { nome: 'BIONUTRI Caixa Mista', imagem: 'src/assets/caixa_mista_sem_fundo.png', descricao: 'BIONUTRI CAIXA MISTA (40g)', preco: 'R$ 135,00', quantidade: 1 },
        { nome: 'BIOWHEYFER MORANGO', imagem: 'src/assets/barra_rosa.png',descricao: '1x BIOWHEYFER MORANGO (35g)', preco: 'R$ 8,00', quantidade: 1 },
        { nome: 'BIOWHEYFER MORANGO', imagem: 'src/assets/barra_rosa.png',descricao: '12x BIOWHEYFER MORANGO (35g)', preco: 'R$ 80,00', quantidade: 1 },
        { nome: 'BIOWHEYFER CHOCOLATE', imagem: 'src/assets/barra_azul.png',descricao: '1x BIOWHEYFER CHOCOLATE (35g)', preco: 'R$ 8,00', quantidade: 1  },
        { nome: 'BIOWHEYFER CHOCOLATE', imagem: 'src/assets/barra_azul.png',descricao: '12x BIOWHEYFER CHOCOLATE (35g)', preco: 'R$ 80,00', quantidade: 1  },
        { nome: 'BIOWHEYFER BAUNILHA', imagem: 'src/assets/barra_vermelha.png',descricao: '1x BIOWHEYFER BAUNILHA (35g)', preco: 'R$ 8,00', quantidade: 1  },
        { nome: 'BIOWHEYFER BAUNILHA', imagem: 'src/assets/barra_vermelha.png',descricao: '12x BIOWHEYFER BAUNILHA (35g)', preco: 'R$ 80,00', quantidade: 1  },
        { nome: 'BIOWHEYFER  BITES CHOCOLATE', imagem: 'src/assets/bites_pas.png',descricao: '1x BIOWHEYFER BITES (35g)', preco: 'R$ 8,00', quantidade: 1  },
        { nome: 'BIOWHEYFER  BITES CHOCOLATE', imagem: 'src/assets/bites_pas.png',descricao: '12x BIOWHEYFER BAUNILHA (35g)', preco: 'R$ 80,00', quantidade: 1  },
        { nome: 'BIOWHEYFER  BITES BAUNILHA', imagem: 'src/assets/bites.png',descricao: '1x BIOWHEYFER BAUNILHA (35g)', preco: 'R$ 8,00', quantidade: 1  },
        { nome: 'BIOWHEYFER BITES BAUNILHA', imagem: 'src/assets/bites.png',descricao: '12x BIOWHEYFER BAUNILHA (35g)', preco: 'R$ 80,00', quantidade: 1  },
    ];

    const [produtos, setProdutos] = useState(produtosIniciais);

    const incrementar = (index) => {
        const novosProdutos = [...produtos];
        novosProdutos[index].quantidade += 1;
        setProdutos(novosProdutos);
    };

    const decrementar = (index) => {
        const novosProdutos = [...produtos];
        if (novosProdutos[index].quantidade > 1) {
            novosProdutos[index].quantidade -= 1;
            setProdutos(novosProdutos);
        }
    };

    const salvar = () => {
        alert('Produtos salvos com sucesso!');
    };

    return (
        <section id="produtos">
            <div className="produtos-container">
                {produtos.map((produto, index) => (
                    <div className="produto" key={index}>
                        <img src={produto.imagem} className="produto-imagem" alt={produto.nome} />
                        <div className="produto-descricao">
                            <h3>{produto.descricao}</h3>
                            <p>{produto.preco}</p>
                        </div>
                        <div className="quantidade-controle">
                            <button className="quantidade-button" onClick={() => decrementar(index)}>-</button>
                            <span className="quantidade-valor">{produto.quantidade}</span>
                            <button className="quantidade-button" onClick={() => incrementar(index)}>+</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="salvar-container">
                <button className="salvar-button" onClick={() => navigate("/func")}>SALVAR</button>
            </div>
        </section>
    );
}
