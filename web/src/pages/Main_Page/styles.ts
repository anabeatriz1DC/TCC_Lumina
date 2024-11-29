import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  body {
    font-family: 'Poppins', sans-serif;
  }

  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }

  .nav-menu a {
    text-decoration: none;
    color: #fff;
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
  }

  @media (min-width: 768px) {
    .header {
      flex-direction: row;
      justify-content: space-between;
      padding: 20px 40px;
    }

    .nav-menu {
      flex-wrap: nowrap; /* Força o menu a ficar em linha */
    }

    .nav-menu a {
      font-size: 18px;
    }
  }
`;

export const Paginaprincipal = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  position: relative;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 40px;
  }
`;

export const Back = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;

export const H1 = styled.h1`
  font-size: 24px;
  text-align: center;
  color: #58305A;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  margin: 20px 0;

  @media (min-width: 768px) {
    font-size: 30px;
    margin-left: 320px;
  }
`;

export const Description = styled.div`
  font-size: 16px;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  padding: 15px;

  margin-bottom: 20px;

  @media (min-width: 768px) {
    font-size: 20px;
    margin-left: 470px;
    margin-bottom: 50px;
  }
`;

export const Stats = styled.div`
  font-size: 18px;
  color: #6F3E91;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

export const Highlight = styled.span`
  font-weight: bold;
  font-size: 40px;
  color: #FFBE00;
  display: block;
  margin: 10px 0;

  @media (min-width: 768px) {
    font-size: 60px;
    margin-left: 480px;
  }
`;

export const ToneladasText = styled.div`
  font-size: 14px;
  color: #000;
  text-align: center;
  font-weight: bold;
  font-family: 'Poppins', sans-serif;

  @media (min-width: 768px) {
    text-align: left;
    margin-left: 485px;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #D4B5E7;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  color: #fff;
  font-size: 15px;
  width: 80%;
  max-width: 300px;
  margin: 20px auto;

  @media (min-width: 768px) {
    margin-top: 440px;
    margin-right: 120px;
  }
`;



