import { useState, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import { Title, DonationContainer } from './styles';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
`;

interface Donation {
  id: number;
  name: string;
  description: string;
  category: string;
  latitude: string;
  longitude: string;
}

function Look() {
  const [data, setData] = useState<Donation[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/donation", { method: "GET" });
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <div>
      <GlobalStyle /> 
      <Title><h1>Pontos Para Doação</h1></Title>
      
      {data.map((item) => (
        <DonationContainer key={item.id}>
          <h2>Nome = {item.name}</h2>
          <p>Descrição = {item.description}</p> 
          <p>Categoria = {item.category}</p>
          <p>Latitude = {item.latitude}</p> 
          <p>Longitude = {item.longitude}</p>
          <hr />
        </DonationContainer>
      ))}
    </div>
  );
}

export default Look;