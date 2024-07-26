import React, { useState } from 'react';
import { useCart } from './CartContext';

export function Sacola() {
    const { cart, removeFromCart, incrementQuantity, decrementQuantity } = useCart();
    const [cep, setCep] = useState('');
    const [endereco, setEndereco] = useState('');
    const [complemento, setComplemento] = useState('');
    const [numero, setNumero] = useState('');
    const [andar, setAndar] = useState('');

    const handleCepChange = async (event) => {
        const newCep = event.target.value;
        setCep(newCep);
        if (newCep.length === 8) {
            try {
                const response = await fetch(`https://viacep.com.br/ws/${newCep}/json/`);
                const data = await response.json();
                if (!data.erro) {
                    setEndereco(`${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`);
                } else {
                    setEndereco('CEP inválido.');
                }
            } catch (error) {
                setEndereco('Erro ao buscar o CEP.');
            }
        } else {
            setEndereco('');
        }
    };

    return (
        <section className="sacola-container">
            <h1 className="sacola-title">SACOLA</h1>
            {cart.map(item => (
                <div key={item.id} className="sacola-item">
                    <img src={item.imagem} className="item-imagem" alt={item.nome} />
                    <div className="item-descricao">
                        <h3>{item.nome}</h3>
                        <p>R${item.preco.toFixed(2)}</p>
                    </div>
                    <div className="item-quantidade">
                        <i className='bx bxs-trash' onClick={() => removeFromCart(item.id)}></i>
                        <span>{item.quantity}</span>
                        <i className='bx bxs-plus-circle' onClick={() => incrementQuantity(item.id)}></i>
                        <i className='bx bxs-minus-circle' onClick={() => decrementQuantity(item.id)}></i>
                    </div>
                </div>
            ))}
            <div className="resumo">
                <h3>Resumo dos valores</h3>
                <p>Subtotal <span>R${cart.reduce((total, item) => total + item.preco * item.quantity, 0).toFixed(2)}</span></p>
                <p>Taxa de entrega <span>R$9.50</span></p>
                <p className="total">Total <span>R${(cart.reduce((total, item) => total + item.preco * item.quantity, 0) + 9.50).toFixed(2)}</span></p>
            </div>
            <div className="cep-container">
                <input
                    type="text"
                    value={cep}
                    onChange={handleCepChange}
                    placeholder="Digite seu CEP"
                    maxLength="8"
                />
                {endereco && <p>O produto será entregue na {endereco}</p>}
                {endereco && (
                    <>
                        <input
                            type="text"
                            value={complemento}
                            onChange={(e) => setComplemento(e.target.value)}
                            placeholder="Complemento"
                        />
                        <input
                            type="text"
                            value={numero}
                            onChange={(e) => setNumero(e.target.value)}
                            placeholder="Número"
                        />
                        <input
                            type="text"
                            value={andar}
                            onChange={(e) => setAndar(e.target.value)}
                            placeholder="Andar"
                        />
                    </>
                )}
            </div>
            <div className="botoes">
                <button className="botao continuar">CONTINUAR COMPRANDO</button>
                <button className="botao finalizar">FINALIZAR COMPRA</button>
            </div>
        </section>
    );
}
