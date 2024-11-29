import {Container, Title, Button, Image, LeftContainer, RightContainer, SubTitle} from './styles'
import {Link} from 'react-router-dom'

export default function Home (){
  return(
    <div>
      <Container>
        <LeftContainer>
          <Title>O mapa local de sua cidade</Title>
          <SubTitle>Encontre no comércio local tudo o que precisa</SubTitle>

          <Link to='/new'>     
            <Button>
              Cadastre um ponto comercial
            </Button>
          </Link> 

          <Link to='/visualizar'>     
            <Button>
              Veja pontos de doação
            </Button>
          </Link> 


        </LeftContainer>
          

        <RightContainer>
          <Image />
        </RightContainer>
      </Container>
    </div>
  )
}
