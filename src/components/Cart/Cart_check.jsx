import React, { useState } from 'react';
import { useCart } from './CartContext';

export function Sacola() {
    const { cart, removeFromCart, incrementQuantity, decrementQuantity } = useCart();
    const [cep, setCep] = useState('');
    const [endereco, setEndereco] = useState('');
    const [complemento, setComplemento] = useState('');
    const [numero, setNumero] = useState('');
    const [andar, setAndar] = useState('');
    const [cupom, setCupom] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const [discountApplied, setDiscountApplied] = useState(false);

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

    const handleCupomChange = (event) => {
        setCupom(event.target.value);
        if (event.target.value === 'BIO2E1') {
            setDiscountApplied(true);
        } else {
            setDiscountApplied(false);
        }
    };

    const handleFinalizePurchase = () => {
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    const deliveryFee = 9.50;
    const subtotal = cart.reduce((total, item) => total + item.preco * item.quantity, 0);
    const discount = discountApplied ? subtotal * 0.5 : 0;
    const total = subtotal - discount + deliveryFee;

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
                <p>Subtotal <span>R${subtotal.toFixed(2)}</span></p>
                {discountApplied && <p>Desconto <span>-R${discount.toFixed(2)}</span></p>}
                {cep.length === 8 && endereco && (
                    <>
                        <p>Taxa de entrega <span>R${deliveryFee.toFixed(2)}</span></p>
                        <p className="total">Total <span>R${total.toFixed(2)}</span></p>
                    </>
                )}
            </div>
            <div className="cep-container">
                <input
                    type="text"
                    value={cep}
                    onChange={handleCepChange}
                    placeholder="Digite seu CEP"
                    maxLength="8"
                />
                {endereco && <p>Endereço de entrega: {endereco}</p>}
                {endereco && (
                    <>
                        <input
                            type="text"
                            value={numero}
                            onChange={(e) => setNumero(e.target.value)}
                            placeholder="Número"
                        />
                        <input
                            type="text"
                            value={complemento}
                            onChange={(e) => setComplemento(e.target.value)}
                            placeholder="Complemento"
                        />
                    </>
                )}
            </div>
            <div className="cupom-container">
                <input
                    type="text"
                    value={cupom}
                    onChange={handleCupomChange}
                    placeholder="Digite seu cupom de desconto"
                />
            </div>
            <div className="botoes">
                <button className="botao continuar">CONTINUAR COMPRANDO</button>
                <button className="botao finalizar" onClick={handleFinalizePurchase}>FINALIZAR COMPRA</button>
            </div>
            {showPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <h2>Obrigado pela sua compra!</h2>
                        <button onClick={closePopup}>Fechar</button>
                    </div>
                </div>
            )}
        </section>
    );
}
