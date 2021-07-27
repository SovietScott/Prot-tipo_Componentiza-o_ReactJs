import React from 'react';
import './styles.css';
import Bag from '../../assets/bag.svg';
import Heart from '../../assets/heart.svg';

const Navigation = () => {
  return (
    <>
      <div className="Navbar">
        <div className="Principal">
          <h1><a href="/">La Belle</a></h1>
          <div className="Login"><a href="/">Entre na sua conta aqui</a></div>
          <div className="Searchbar">
            <input type="text" placeholder="Procurar" />
            <i className="fas fa-search"></i>
          </div>
          <div className="Newsletter"><a href="/">Siga nosso Newsletter</a></div>
          <div className="Icons"><img src={Heart} alt="Heart"></img><img src={Bag} alt="Shopping bag"></img></div>
        </div>
      </div>
      <div className="Secondary">
        <div className="pos-f-t">
          <div className="collapse" id="navbarToggleExternalContent">
            <div className="bg-dark p-4">
              <h4 className="text-black">Collapsed content</h4>
              <span className="text-muted">Toggleable via the navbar brand.</span>
            </div>
          </div>
          <nav className="navbar navbar-transparent bg-transparent">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
              Ver categorias
            </button>
          </nav>
        </div>
        <a href="/">Ofertas</a>
        <a href="/">Perfumes</a>
        <a href="/">Cabelos</a>
        <a href="/">Maquiagem</a>
        <a href="/">Dermocosméticos</a>
        <a href="/">Tratamentos</a>
        <a href="/">Cuidados Pessoais</a>
      </div>
    </>
  );
}

export default Navigation;