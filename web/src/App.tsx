import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import Mapa from './pages/Mapa/index'
import New from './pages/New/index'
import Look from './pages/Look/index'
import Paginaprincipal from './pages/Main_Page';
import Cadastro from './pages/Cadastro'
import Login from './pages/Login/index'
import Forget from './pages/Forget/index'
import Perfil from './pages/Perfil/index'
import Pontos from './pages/Pontos/index'
import MVV from './pages/MVV'
import Link from './pages/Link'

function App() {

  const theme = {
    primary: "#D0B3E0",
    secondary: "#58305A",
    background: "#F0F4F5",
    text: "#000",
    white: "#FFF"  
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          {<Route path='/pageP' element={<Paginaprincipal />}>
          </Route> }
          <Route path='/new' element={<New />}> 
          </Route>
          <Route path='/visualizar' element={<Look />}> 
          </Route>
          <Route path='/mapa' element={<Mapa />}> 
          </Route>
          <Route path='/cadastro' element={<Cadastro />}> 
          </Route>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/forget' element={<Forget/>}></Route>
          <Route path='/perfil' element={<Perfil/>}></Route>
          <Route path='/pontos' element={<Pontos/>}></Route>
          <Route path='/mvv' element={<MVV/>}></Route>
          <Route path='/link' element={<Link/>}></Route>
         
        </Routes>
      </BrowserRouter>
      <ToastContainer/>
    </ThemeProvider>
  );
}

export default App;
