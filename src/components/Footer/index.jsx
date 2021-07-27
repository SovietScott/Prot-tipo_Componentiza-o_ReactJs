import React from 'react';
import './styles.css';
import Boleto from '../../assets/boleto.svg';
import Hipercard from '../../assets/hipercard.svg';
import Mastercard from '../../assets/mc_symbol.svg';
import Itau from '../../assets/itau.svg';
import Visa from '../../assets/visa.svg';

const Footer = () => {
  return (
    <>
      <footer>
        <h1>Nos siga nas redes sociais</h1>
        <div className="social">
          <i className="fab fa-facebook-square"> La_Belle</i>
          <i className="fab fa-instagram"> La_Belle</i>
          <i className="fab fa-twitter"> La Belle</i>
          <i className="fab fa-youtube"> LaBelleTube</i>
        </div>
        <div className="support">
          <div>
            <h2>Departamentos</h2>
            <ul>
              <li>Perfumaria</li>
              <li>Maquiagem</li>
              <li>Banho</li>
              <li>Dermocosméticos</li>
              <li>Cuidados Pessoais</li>
              <li>Unhas</li>
              <li>Homens</li>
            </ul>
          </div>
          <div>
            <h2>Suporte</h2>
            <ul>
              <li>Fale com um atendente</li>
              <li>Meus Pedidos</li>
              <li>Trocas e Devoluções</li>
              <li>Prazos de Entrega</li>
              <li>Formas de Pagamento</li>
              <li>Confiabilidade</li>
              <li>Perguntas Frequentes</li>
              <li>Política de Privacidade</li>
            </ul>
          </div>
          <div>
            <h2>Serviços</h2>
            <ul>
              <li>Minha conta</li>
              <li>Rastrear seu Pedido</li>
              <li>Cupons de Desconto</li>
              <li>Ganhar Brindes</li>
              <li>Serviço de Atendimento ao Consumidor</li>
              <li>Lojas Parceiras</li>
              <li>Procon</li>
            </ul>
          </div>
        </div>
        <div className="credit">
          <h2>Formas de Pagamento</h2>
          <img src="https://img.icons8.com/carbon-copy/100/000000/amex.png" alt="American Express"/>
          <img src={Visa} alt="Visa"/>
          <img src={Mastercard} alt="Mastercard"/>
          <img src={Hipercard} alt="Hipercard"/>
          <img src={Itau} alt="Itau"/>
          <img src={Boleto} alt="Boleto"/>
        </div>

      </footer>
      <a href="https://github.com/SovietScott">Github</a>
    </>
  );
}

export default Footer;
