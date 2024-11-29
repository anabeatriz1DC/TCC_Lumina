import React, { useState } from 'react';
import logo from "./logo03.png";
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    cep: '',
    cpf: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: ''
  });

  const [errors, setErrors] = useState({
    passwordMismatch: false,
    invalidCep: false,
    invalidCpf: false,
    alreadyRegistered: false
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateCEP = (cep: string) => /^\d{5}-?\d{3}$/.test(cep);
  const validateCPF = (cpf: string) => /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf);
  
  const navigate = useNavigate();

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setErrors({ ...errors, passwordMismatch: true });
      return;
    } else {
      setErrors({ ...errors, passwordMismatch: false });
    }

    if (!validateCEP(formData.cep)) {
      setErrors({ ...errors, invalidCep: true });
      return;
    } else {
      setErrors({ ...errors, invalidCep: false });
    }

    if (!validateCPF(formData.cpf)) {
      setErrors({ ...errors, invalidCpf: true });
      return;
    } else {
      setErrors({ ...errors, invalidCpf: false });
    }

    try {
      await fetch("http://localhost:3000/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="register-container">
      <form className="register-form">
        <img src={logo} alt="Logo" className="register-logo" />

        <div className="form-group">
          <label htmlFor="email" style={{fontFamily:'Poppins', color:'black'}}>Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="cep" style={{fontFamily:'Poppins', color: 'black'}}>CEP</label>
            <input
              id="cep"
              type="text"
              name="cep"
              value={formData.cep}
              onChange={handleChange}
              required
            />
            {errors.invalidCep && <p className="error-text">CEP inválido!</p>}
          </div>

          <div className="form-group">
            <label htmlFor="cpf" style={{fontFamily:'Poppins', color:'black'}}>CPF</label>
            <input
              id="cpf"
              type="text"
              name="cpf"
              value={formData.cpf}
              onChange={handleChange}
              required
            />
            {errors.invalidCpf && <p className="error-text">CPF inválido!</p>}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="password" style={{fontFamily:'Poppins', color:'black'}}>Senha</label>
          <input
            id="password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword" style={{fontFamily:'Poppins', color:'black'}}>Confirmar Senha</label>
          <input
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          {errors.passwordMismatch && (
            <p className="error-text">As senhas não coincidem!</p>
          )}
        </div>

        <div className="form-group">
          <label style={{fontFamily:'Poppins', color:'black'}}>Sexo</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                onChange={handleChange}
                checked={formData.gender === 'male'}
                style={{fontFamily:'Poppins', color:'black'}}
              />
              Masculino
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                onChange={handleChange}
                checked={formData.gender === 'female'}
                style={{fontFamily:'Poppins', color:'black'}}
              />
              Feminino
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="other"
                onChange={handleChange}
                checked={formData.gender === 'other'}
                style={{fontFamily:'Poppins', color:'black'}}
              />
              Outro
            </label>
          </div>
        </div>

        <button className="submit-button" onClick={handleSubmit}>
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Register;
