import React from 'react';
import './styles.css';
import banner1 from "./banner1.jpeg";
import banner2 from "./banner2.jpeg";
import banner3 from "./banner3.jpeg";
import logo from "./logo04.png";
import {Link, NavLink} from 'react-router-dom'


const RewardsPage = () => {
  return (
    <>
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

      <div className="rewards-container">
        <section className="points-bar">
         
          <div className="progress-line progress-completed"></div>
          <div className="progress-line progress-upcoming"></div>

          <div className="point-levels">
            <div className="point-item completed">5</div>
            <div className="point-item completed">10</div>
            <div className="point-item completed">15</div>
            <div className="point-item upcoming">20</div>
            <div className="point-item upcoming">25 </div>
          </div>
        </section>

        <section className="rewards">
          <div className="reward-item">
            <img src={banner1} alt="Imagem de doação" />
          </div>
          <div className="reward-item">
            <img src={banner2} alt="Imagem de doação"  />
          </div>
          <div className="reward-item">
            <img src={banner3} alt="Imagem de doação" />
          </div>
        </section>
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

    </>

    
  );
};

export default RewardsPage;