import styled, { createGlobalStyle } from 'styled-components'
import fundo from './assets/images/elevated-view-multi-colored-cardboard-papers.jpg'

export const color = {
  background_orange: '#FF4D00',
  font_white: '#FFFFFF',
  font_black: '#000000'
}

export const GlobalCss = createGlobalStyle`
body {
  margin: 0px;
  padding: 0px;
  box-sizing:	border-box;
  font-family: "Hanken Grotesk", sans-serif;
  list-style: none;
  background-image: url(${fundo});
  background-size: cover;       /* A imagem cobre toda a tela */
  background-position: center;  /* Centraliza a imagem */
  background-repeat: no-repeat; /* Não repete a imagem */
  background-attachment: fixed; /* Mantém a imagem fixa no fundo */
  @media (max-width: 767px) {
    overflow-x: hidden;
    max-width: 94%;
    background-size: cover;
    margin: 0 auto;
  }
}

.slide-in {
    animation: slideIn 1s ease-out forwards;
  }

  @keyframes slideIn {
    from {
      transform: translateX(-100%); /* ou o valor desejado */
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`
export const BackHome = styled.div`
  background: #101728;
`

export const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
`
export const Bar = styled.div`
  background: radial-gradient(circle at 0% 0%, #fab104, #0a8aa2, #6e696b);

  height: 50px;
  width: 100%;
`
