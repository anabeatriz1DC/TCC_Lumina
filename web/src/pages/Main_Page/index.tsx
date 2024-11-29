import React from 'react';
import logo from "./logo04.png";
import batata from "./imagem.jpg";
import {
  Paginaprincipal,
  GlobalStyle,
  Main,
  Back,
  H1,
  Description,
  Stats,
  Highlight,
  ToneladasText,
  Button,
  
} from './styles';





import { Link } from 'react-router-dom';

function App(){
  return (
    <>
      <GlobalStyle />
      <Paginaprincipal>
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

  <img src={batata} alt="Imagem de doação" style={{ width: '100%', 
    height: 'auto', 
    maxHeight: '600px', 
    borderRadius: '10px', 
    marginTop: '20px',
     }} />
        <Main>
          <Back /> 
          <div className="leftSection">
            <H1>Ilumine o mundo com sua Generosidade.</H1>
            <Description>
              Transforme a maneira como você capta recursos com o Lumina. Nossa plataforma de doação oferece soluções
              tecnológicas avançadas e inovação social para criar uma experiência única e personalizada.
            </Description>
            <Stats>
              <Highlight>+ R$100MIL</Highlight>
            </Stats>
            <ToneladasText>Toneladas de alimentos arrecadados</ToneladasText>
          </div>
       
     
    

            <Link to='/visualizar'>
              <Button>Ache o ponto de doação mais próximo</Button>
            </Link> 
   

          
        </Main>

        
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


      </Paginaprincipal>
    </>
  );
}

export default App;



