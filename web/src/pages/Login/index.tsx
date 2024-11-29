import React, { useState } from 'react';
import logo from "./logo04.png";
import { Link, useNavigate } from 'react-router-dom';
import './styles.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:3000/auth?email=${formData.email}`,
        { method: "GET" }
      );
      const data = await response.json();

      if (data[7]?.password === formData.password) {
        console.log("Login bem-sucedido");
        navigate("/pageP");
      } else if (data[7]) {
        console.log("Senha incorreta");
      } else {
        console.log("Usuário não existe");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src={logo} alt="Logo" className="login-logo" />
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="email" style={{fontFamily: 'Poppins', color: 'black'}}>Email</label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
             
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" style={{fontFamily: 'Poppins', color: 'black'}}>Senha</label>
            <input
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <Link to="/forget" className="forget-password">
              Esqueceu a senha?
            </Link>
          </div>

          <button onClick={(e) => handleSubmit(e)} type="submit" className="login-button">
            Entrar
          </button>

          <Link to="/cadastro" className="register-link">
            Ainda não possui uma conta?
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
