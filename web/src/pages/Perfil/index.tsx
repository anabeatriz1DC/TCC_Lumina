import React, { useState } from 'react';
import './styles.css';
import logo from './logo04.png';
import {Link} from 'react-router-dom';
import profileImage from './profile.png'

const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    nome: 'Ana',
    email: 'aperon37@gmail.com',
    celular: '(11) 98765-4321',
    endereço: 'São Paulo, Brasil',
    bio: 'Esta é uma breve bio do usuário. Aqui, ele pode compartilhar um pouco sobre si.'
  });

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div>
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

      <div className="profile-container">
        <div className="profile-card">
          <img
            src={profileImage}
            alt="Foto do perfil"
            className="profile-image"
          />
          {isEditing ? (
            <>
              {Object.entries(profile).map(([key, value]) => (
                <div key={key} className="profile-field-box">
                  <label className="profile-label">{key.charAt(0).toUpperCase() + key.slice(1)}</label>
                  {key === "bio" ? (
                    <textarea
                      name={key}
                      value={value}
                      onChange={handleInputChange}
                      className="profile-input profile-bio"
                    />
                  ) : (
                    <input
                      type="text"
                      name={key}
                      value={value}
                      onChange={handleInputChange}
                      className="profile-input"
                    />
                  )}
                </div>
              ))}
            </>
          ) : (
            <>
              {Object.entries(profile).map(([key, value]) => (
                <div key={key} className="profile-field-box">
                  <strong className="profile-label">{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>
                  <p className="profile-value">{value}</p>
                </div>
              ))}
            </>
          )}
          <button onClick={toggleEditing} className="profile-button">
            {isEditing ? 'Salvar' : 'Atualizar Perfil'}
          </button>
        </div>
      </div>
        
      <footer className="footer" style={{ backgroundColor: '#D0B3E0', color: '#fff', padding: '20px', textAlign: 'center'}}>

      <div className="footer-content" style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px'}}>
      <div className="footer-section"
      style={{maxWidth: '300px'}}>
          <h3 style={{fontSize: '1.2em', marginBottom: '10px', fontFamily: 'Poppins'}}>Sobre Nós</h3>
          <p style={{fontFamily: 'Poppins'}}>
            Somos uma empresa dedicada a oferecer o melhor auxílio para que todos possam doar e receber doações de maneira confiável.
          </p>
        </div>

        <div className="footer-section">
          <h3 style={{fontFamily: 'Poppins'}}>Links Úteis</h3>
          <ul style={{listStyle: 'none', padding:'0'}}>
            
            <li style={{margin: '5px 0'}}><a href="#home" style={{color: '#fff', textDecoration: 'none', fontFamily: 'Poppins'}} >Início</a></li>
           


            <Link to= '/mvv'>
            <li style={{margin: '5px 0'}}><a href="#"
            style={{color: '#fff', textDecoration: 'none', fontFamily: 'Poppins' }} 
            >Sobre</a></li>
            </Link>


            <Link to='/mapa'>
            <li style={{margin: '5px 0'}}><a href="#services"
             style={{color: '#fff', textDecoration: 'none' , fontFamily: 'Poppins'}} 
            >Serviços</a></li>
            </Link>


          </ul>
        </div>

        <div className="footer-section">
          <h2 style={{padding: '10px', fontFamily: 'Poppins'}}>Contato</h2>
          <p style={{padding: '5px', fontFamily: 'Poppins'}}>Telefone: (11) 97038-0975</p>
          <p style={{fontFamily: 'Poppins'}}>Email: aperon37@gmail.com</p>
        </div>
      </div>

      <div className="footer-bottom" style={{borderTop: '1px solid black', paddingTop:'10px', fontSize: '0.9em'}}>
        <p style={{fontFamily: 'Poppins'}}>&copy; {new Date().getFullYear()} Lumina. Todos os direitos reservados.</p>
      </div>
    </footer>

    </div>
  );
};

export default UserProfile;