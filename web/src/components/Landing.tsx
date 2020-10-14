import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiHeart } from 'react-icons/fi'

import './../styles/pages/landing.css';
import LogoImg from './../images/ecopets1.svg';
import Dog from './../images/dog.svg'

function Landing() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <div className="logo">
          <img src={LogoImg} alt="Happy!"/>
        </div>

        <main>
          <h1>Faça um pet feliz!</h1>
          <p>Conheça nossos pontos de coleta e doe suas tampinhas</p>
        </main>

        <div className="location">
          <strong>Rio de Janeiro </strong>
          <span>RJ Capital</span>
        </div>

        <Link to="/app" className="enter-app">
          <FiArrowRight size={26} color="rgba(0, 0, 0, .6)" />
        </Link>

        <footer>
          <small>Feito com &nbsp; <FiHeart size={30} color="#a64e5a" /> &nbsp; por &nbsp; <a href="https://wellpinho.com.br">Wellington Pinho</a></small>
        </footer>
      </div>
    </div>
  )
}

export default Landing