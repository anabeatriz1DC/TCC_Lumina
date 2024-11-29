import styled from 'styled-components';

export const Title = styled.div`
  text-align: center;
  margin: 20px 0;

  h1 {
    font-size: 2.5rem;
    color: #D0B3E0;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    margin: 0; /* Remove margem fixa */
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2rem; /* Diminui o tamanho da fonte para telas menores */
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 1.5rem; /* Fonte ainda menor para telas muito pequenas */
    }
  }
`;

export const DonationContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 10px auto;
  background-color: #f9f9f9;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 80%; /* Define a largura relativa */
  h2 {
    font-size: 1.5rem;
    color: #D0B3E0;
    font-family: 'Poppins', sans-serif ; 
  }

  p {
    margin: 5px 0;
    color: #333;
    font-family: 'Poppins', sans-serif; 
  }

  hr {
    margin: 10px 0;
    border: none;
    border-top: 1px solid #eee;
  }
  @media (max-width: 768px) {
    width: 90%; /* Ajusta largura para telas menores */
    padding: 12px;

    h2 {
      font-size: 1.25rem; /* Diminui o tamanho da fonte */
    }

    p {
      font-size: 0.9rem; /* Diminui o tamanho da fonte dos parágrafos */
    }
  }

  @media (max-width: 480px) {
    padding: 8px;

    h2 {
      font-size: 1rem;
    }

    p {
      font-size: 0.8rem;
    }
  }
`;