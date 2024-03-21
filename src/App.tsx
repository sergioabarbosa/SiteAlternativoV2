import React from 'react';
import './App.css';
import logoReact from './assets/react.svg';
import logoVite from './assets/react.svg';
import image1 from './assets/banner.png'; // Adicionando imagens do carrossel
import image2 from './assets/banner.png';
import image3 from './assets/banner.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container">
      {/* Carrossel de Imagens */}
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={image1} className="d-block w-100" alt="Imagem 1" />
          </div>
          <div className="carousel-item">
            <img src={image2} className="d-block w-100" alt="Imagem 2" />
          </div>
          <div className="carousel-item">
            <img src={image3} className="d-block w-100" alt="Imagem 3" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      {/* Cabeçalho */}
      <header className="header">
        <div className="logo-container">
          <img src={logoReact} className="logo" alt="React" />
          <img src={logoVite} className="logo" alt="Vite" />
        </div>
        <h1 className="title">Colégio Alternativo</h1>
        <p className="subtitle">Bem-vindo ao Colégio Alternativo, onde a aprendizagem é uma aventura!</p>
      </header>
      <Footer telefone="11 1234-5678" endereco="Av. Principal, 123" />
    </div>
  );
}

export default App;
