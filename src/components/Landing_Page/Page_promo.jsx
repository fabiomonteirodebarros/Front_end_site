import React, { useState } from 'react';

export function Page_promo() {
    const [buttonText, setButtonText] = useState('CUPOM DE DESCONTO');

    const handleClick = () => {
        setButtonText('BIO2E1');
    };

    return (
        <section className="first-section">
            <div className="conteudo-principal">
                <div className="btn">
                    <button className="reservar" onClick={handleClick}>
                        {buttonText}
                    </button>
                </div>
            </div>
        </section>
    );
}
