import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Title, Div, FormWrapper, Input, SubmitButton, Label, Message } from './styles';
import logo from "./logo04.png"; 
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("/api/forgot-password", { email });
      setMessage(response.data.message);
      setLoading(false);
      setTimeout(() => navigate("/login"), 5000);
    } catch (error) {
      setLoading(false);
      setMessage("Erro ao enviar o email. Tente novamente.");
    }
  };

  return (
    <div className="profile-container" style={{backgroundColor: '#d0b3e0'}}>
      

      <FormWrapper>
        <Title style={{fontFamily: 'Poppins', color: '#D0B3E0'}}>Esqueci a Senha</Title>
        {message && (
          <Message error={message.startsWith("Erro")}>
            {message}
          </Message>
        )}
        <form onSubmit={handleSubmit}>
          <Div>
            <Label style={{fontFamily: 'Poppins'}}>Nova Senha:</Label>
            <Input
              type="password"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Nova senha"
              style={{fontFamily: 'Poppins'}}
            />
          </Div>

          <Div>
            <Label style={{fontFamily: 'Poppins'}}>Confirme:</Label>
            <Input
              type="password"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Confirme"
              style={{fontFamily: 'Poppins'}}
              />
          </Div>

          <SubmitButton type="submit" disabled={loading} style={{fontFamily: 'Poppins'}}>
            {loading ? "Enviando..." : "Enviar"}
          </SubmitButton>
        </form>
      </FormWrapper>
    </div>
  );
};

export default ForgotPassword;
