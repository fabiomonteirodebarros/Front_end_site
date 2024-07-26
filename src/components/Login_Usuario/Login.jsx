import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUserApi } from './api/register-user-api';
import { UserLoginApi } from './api/user-login-api';

export function Login() {
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let navigate = useNavigate();

    const userLogin = async () => {
        if (!email || !password) return;

        let { data, response } = await UserLoginApi(email, password);

        if (response.ok){
            if (data.is_employee){
                navigate("/func");
            } else {
                navigate ("/cadastro");
            }
        }
    };

    let [registerInfos, setRegisterInfos] = useState({
        name: "",
        email: "",
        password: ""
    });

    const registerUser = async () => {
        for (let k in registerInfos){
            if (!registerInfos[k]){
                console.log(k, registerInfos);
                return;
            }
        }

        let { response, data } = await registerUserApi(registerInfos);

        if (response.ok){
            console.log("USER CADASTRADO COM SUCESSO");
            navigate("/products");
        }
    };

    const [isActive, setIsActive] = useState(false);

    const toggleClass = () => {
        setIsActive(!isActive);
    };

    return (
        <section className="page-login">
            <div className={`container ${isActive ? 'active' : ''}`} id="container">
                <div className="form-container sign-in">
                    <div>
                        <h1>Crie uma Conta</h1>
                        <div className="social-icons">
                            <a href="#" className="icon"><i className='bx bxl-google'></i></a>
                            <a href="#" className="icon"><i className='bx bxl-facebook-circle'></i></a>
                            <a href="#" className="icon"><i className='bx bxl-twitter'></i></a>
                            <a href="#" className="icon"><i className='bx bxl-linkedin-square'></i></a>
                        </div>
                        <span>Ou use o seu email para se registrar</span>
                        <input type="name" placeholder="Nome" required onChange={(ev) => setRegisterInfos(prev => ({ ...prev, name: ev.target.value }))} />
                        <input type="email" placeholder="Email" required onChange={(ev) => setRegisterInfos(prev => ({ ...prev, email: ev.target.value }))} />
                        <input type="password" placeholder="Senha" onChange={(ev) => setRegisterInfos(prev => ({ ...prev, password: ev.target.value }))} />
                        <button onClick={registerUser}>Cadastrar-se</button>
                    </div>
                </div>
                <div className="form-container sign-up">
                    <div>
                        <h1>Login</h1>
                        <div className="social-icons">
                            <a href="#" className="icon"><i className='bx bxl-google'></i></a>
                            <a href="#" className="icon"><i className='bx bxl-facebook-circle'></i></a>
                            <a href="#" className="icon"><i className='bx bxl-twitter'></i></a>
                            <a href="#" className="icon"><i className='bx bxl-linkedin-square'></i></a>
                        </div>
                        <span>Use seu email e senha para logar-se</span>
                        <input type="email" placeholder="Email" required onChange={(ev) => setEmail(ev.target.value)} />
                        <input type="password" placeholder="Senha" required onChange={(ev) => setPassword(ev.target.value)} />
                        <a href="#">Esqueceu a senha?</a>
                        <button type="submit" onClick={userLogin}>Login</button>
                    </div>
                </div>
                <div className="toggle-container">
                    <div className="toogle">
                        <div className="toogle-panel toogle-left">
                            <h1>Bem vindo de volta!</h1>
                            <p>Coloque seu email e senha para acessar todos os recursos do site</p>
                            <button className="hidden" onClick={toggleClass} id="login">Registre-se</button>
                        </div>
                        <div className="toogle-panel toogle-right">
                            <h1>Olá!</h1>
                            <p>Registre-se para acessar todos os recursos do site</p>
                            <button className="hidden" onClick={toggleClass} id="register">Login</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="adm" onClick={() => navigate("/adm")}>
                <a href="#">
                    <button type="button">ADMINISTRADOR</button>
                </a>
            </div>
        </section>
    );
}
