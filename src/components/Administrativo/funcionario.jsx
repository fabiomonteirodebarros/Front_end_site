import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Dashboard() {
    let navigate = useNavigate()
    const initialData = [
        { name: 'Carlos Henrique Penteado', product: '3x BIONUTRI Cookies & Cream', value: 'R$ 318,00', address: 'R. Quatá, 200 - SP' },
        { name: 'Miguel Costa Neto', product: '2x BIONUTRI Cocada Vegana, 1x BIONUTRI Brownie & Crispies', value: 'R$ 318,00', address: 'R. Dom Paulo Pedrosa 611 - SP' },
        { name: 'Thiago Regenga', product: '12x BIONUTRI Cocada Vegana', value: 'R$ 1272,00', address: 'R. Dom Pedro II, 258 - RS' },
        { name: 'Alexandre Marques', product: '4x BIONUTRI Paçoca & Chocolate', value: 'R$ 424,00', address: 'R. Caetano Cavalcante, 50 - CE' },
        { name: 'Helena Santos', product: '6x BIONUTRI Bombom Crocante', value: 'R$ 636,00', address: 'Av. Dr. Hélio Ribeiro, 487 - MT' },
    ];

    const [payments, setPayments] = useState(initialData);

    const removePayment = (index) => {
        setPayments(payments.filter((_, i) => i !== index));
    };

    return (
        <section className="dashboard-container">
            <div className="info-cards">
                <div className="info-card">
                    <div className="info-content">
                        <img src="src/assets/receita.png" alt="Receita" />
                        <h1>R$35,000.00</h1>
                        <h3>RECEITA</h3>
                    </div>
                </div>
                <div className="info-card" onClick={() => navigate("/est")}>
                    <div className="info-content">
                        <img src="src/assets/estoque.png" alt="Estoque" />
                        <h1>15,000</h1>
                        <h3>ESTOQUE</h3>
                    </div>
                </div>
                <div className="info-card">
                    <div className="info-content">
                        <img src="src/assets/vendas.png" alt="Vendas Diárias" />
                        <h1>9.2%</h1>
                        <h3>VENDAS DIÁRIAS</h3>
                    </div>
                </div>
            </div>
            <div className="payment-table">
                <h2>Pagamentos Recentes</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Produto</th>
                            <th>Valor</th>
                            <th>Endereço</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payments.map((payment, index) => (
                            <tr key={index}>
                                <td>{payment.name}</td>
                                <td>{payment.product}</td>
                                <td>{payment.value}</td>
                                <td>{payment.address}</td>
                                <td><button onClick={() => removePayment(index)}>Remover</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}
