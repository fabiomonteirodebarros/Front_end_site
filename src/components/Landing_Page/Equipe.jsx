import React from 'react';

export function Equipe() {
    return (
        <section id="team-section" className="team-section">
            <div className="team-container">
                <h1>Equipe</h1>
                <div className="team-row">
                    <div className="team-profile text-center">
                        <div className="team-img-box">
                            <img src="src/assets/Alexandre.webp" className="img-responsive" alt="Alexandre"></img>
                            <ul>
                                <a href='#'><li><i className='bx bxl-facebook-circle' ></i></li></a>
                                <a href='#'><li><i className='bx bxl-instagram' ></i></li></a>
                                <a href='#'><li><i className='bx bxl-linkedin-square' ></i></li></a>
                            </ul>
                        </div>
                        <h2>Alexandre</h2>
                        <p>Renomado profissional no setor de alimentos nutrivos tendo mais de 10 anos de experiência</p>
                    </div>
                    <div className="team-profile text-center">
                        <div className="team-img-box">
                            <img src="src/assets/Pietro.webp" className="img-responsive" alt="Pietro"></img>
                            <ul>
                                <a href='#'><li><i className='bx bxl-facebook-circle' ></i></li></a>
                                <a href='#'><li><i className='bx bxl-instagram' ></i></li></a>
                                <a href='#'><li><i className='bx bxl-linkedin-square' ></i></li></a>
                            </ul>
                        </div>
                        <h2>Pietro</h2>
                        <p>Tem um grande conhecimento técnico na área e possui uma fábrica em Indaiatuba</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
