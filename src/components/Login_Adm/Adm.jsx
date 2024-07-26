import React from 'react';
import { useNavigate } from 'react-router-dom';

export function Login_Adm() {
    let navigate = useNavigate()
    return (
        <section className="page-login">
            <div className="blur-container">
                <div className="box">
                    <form action="adm.html" method="get">
                        <h2>LOGIN ADMINISTRADOR</h2>
                        <div className="social-icons">
                            <a href="#" className="icon"><i className='bx bxl-google'></i></a>
                            <a href="#" className="icon"><i className='bx bxl-facebook-circle'></i></a>
                            <a href="#" className="icon"><i className='bx bxl-twitter'></i></a>
                            <a href="#" className="icon"><i className='bx bxl-linkedin-square'></i></a>
                        </div>
                        <div className="inputBox">
                            <input type="email" name="email" autoComplete="off" required />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="inputBox">
                            <input type="password" name="password" autoComplete="off" required />
                            <label htmlFor="password">Senha</label>
                        </div>
                        <input type="submit" value="Login" />
                    </form>
                </div>
                <div className="user-button">
                    <button type="button"onClick={() => navigate("/cadastro")}>USUÁRIO</button>
                </div>
            </div>
        </section>
    );
}
