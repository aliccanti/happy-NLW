import React from 'react';

import { FiArrowRight } from 'react-icons/fi';
import logoImg from '../images/logo.svg';

import '../styles/pages/landing.css';

const Landing = () => {
    return (
        <div id="page-landing">
            
            <div className="content-wrapper">
                <img src={logoImg} alt="Happy logo"/>

                <main>
                <h1>Leve felicidade para o mundo.</h1>
                <p>Visite orfanatos e mude o dia
                    de muitas crianças.</p>
                </main>

                <div className="location">
                <strong>Recife</strong>
                <span>Pernambuco</span>
                </div>

                <a href="#" className="enter-app">
                < FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)"/>
                </a>
            </div>

    </div>
    )

}

export default Landing;