import React from 'react';
import historia1 from "./historia1.png"; 
import './style.css';
import logo from "./logo04.png"; 
import {Link} from 'react-router-dom';  


function Header() {
  return (
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
  );
}


const Pricing = () => {
  return (
    <div className="pricing-container">
      <div className="pricing-card">
        <h2 style={{fontFamily: 'Poppins', fontWeight: 'bold'}}>Lumina: Transformando Vidas com Tecnologia</h2>
        <p style={{fontFamily: 'Poppins'}}>A Lumina surgiu com a missão de usar a tecnologia para combater a pobreza extrema entre mulheres e crianças. Reconhecendo que 435 milhões de mulheres e meninas vivem nessa realidade, a fundadora desenvolveu uma plataforma digital que conecta doadores diretamente às pessoas que precisam, garantindo total transparência nas doações.
        Com recursos inovadores como QR Codes para autenticação, a Lumina promove confiança e participação ativa dos doadores. Seu compromisso com a justiça social e a filantropia eficaz faz da Lumina uma ferramenta essencial para transformar vidas no Brasil, criando um ciclo de solidariedade que ilumina caminhos e traz esperança.</p>

      </div>

      <div className="pricing-card">
        <h2 style={{fontFamily: 'Poppins', fontWeight: 'bold'}}>Nossa Essência</h2>
       <p style={{fontFamily: 'Poppins'}}> <h2 style={{fontFamily: 'Poppins'}}>Missão:</h2>
       Ajudar mulheres e crianças vulneráveis com tecnologia que facilita doações rápidas, transparentes e diretas. Conectamos doadores e quem precisa de ajuda, criando uma rede solidária que faz a diferença onde importa.</p>

       <p style={{fontFamily: 'Poppins'}}> <h2 style={{fontFamily: 'Poppins'}}>Visão:</h2>
       Queremos ser a principal plataforma de doações no Brasil, transformando vidas e comunidades com impacto positivo e duradouro. Nossa meta é crescer e construir uma rede global de solidariedade, onde confiança e transparência são o foco.</p>

       <p style={{fontFamily: 'Poppins'}}><h2 style={{fontFamily: 'Poppins'}}>Valores:</h2>
      Transparência: Você sabe onde seu dinheiro está indo.
      Solidariedade: Conectamos quem quer ajudar a quem precisa.
      Inovação: Usamos tecnologia para facilitar e melhorar o processo de doação.
      Responsabilidade Social: Foco em melhorar a vida de mulheres e crianças.
      Confiança: Total segurança no uso dos recursos.</p>






      </div>
    </div>
  );
};


const App = () => {
  return (
    <div className="App">
      <Header />
      <Pricing />
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

export default App;