import React, { useState } from 'react';
import logo from './logo04.png';
import './styles.css';
import { Link } from 'react-router-dom';

function App() {
  const [link, setLink] = useState('');
  const [submittedLink, setSubmittedLink] = useState('');

  const handleInputChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setLink(event.target.value);
  };

  const handleSubmit = () => {
    setSubmittedLink(link);
  };

  return (
    <div className="container">
      <header 
        className="header" 
        style={{
          backgroundColor: '#D0B3E0',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '10px'
        }}
      >
        <div 
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            maxWidth: '1200px',
            padding: '0 10px',
          }}
        >
       
          <Link to='/pageP'>
            <img 
              src={logo} 
              alt="Logo" 
              style={{ width: '80px', height: '80px' }} 
            />
          </Link>

       
          <nav 
            className="nav-menu" 
            style={{
              display: 'flex',
              gap: '20px',
              flexWrap: 'wrap', 
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Link to='/pontos'>
              <a href="#" style={{ fontFamily: 'Poppins', fontSize: '16px' }}>Pontos</a>
            </Link>
            <Link to='/mapa'>
              <a href="#" style={{ fontFamily: 'Poppins', fontSize: '16px' }}>Mapa</a>
            </Link>
            <Link to='/link'>
              <a href="#" style={{ fontFamily: 'Poppins', fontSize: '16px' }}>Link</a>
            </Link>
            <Link to='/perfil'>
              <a href="#" style={{ fontFamily: 'Poppins', fontSize: '16px' }}>Perfil</a>
            </Link>
          </nav>
        </div>
      </header>

   
      <h1 className="responsive-title" style={{marginTop: '20px', fontFamily: 'Poppins'}}>Cole aqui seu link</h1>

      <input
        type="text"
        value={link}
        onChange={handleInputChange}
        placeholder="Digite seu link"
        className="input-field"
        style={{width: '300px'}}
      />
  <Link to='/pagep'>
      <button onClick={handleSubmit} className="submit-button">
        Enviar
      </button>
     </Link>
     
      {submittedLink && (
        <div className="submitted-link">
          <h2>Link enviado:</h2>
          <p>{submittedLink}</p>
        </div>
      )}
    </div>
  );
}

export default App;
