import React , { useState } from 'react';
import './App.css';
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import Modal from './components/Modal/Modal';

import icon from './assets/img/icon-modal.svg'
import imgModal from './assets/img/img-modal.png'


function App() {
  const [isOpen, setIsOpen] = useState(true);

  const handleCloseModal = () => {
    setIsOpen(false);
  };
  return (
    <div className='App'>
      <Header />
      <Main />
      <Footer />

      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <div className='app__div-modal'>
          <div className='app__div-img'>
            <img src={imgModal} alt='imgModal'/>
          </div>
          <div className='app__div-left'>
              <img className='app__img' src={icon} alt='icon'/>
              <p className='app__titulo'>Bem Vindo à MAEZTRA</p>
              <p className='app__sub-titulo'>Receba em Primeira mão<br/><b>desconto e ofertas exclusivas</b></p>
              <input type='text' placeholder='Digite seu e-mail' className='app__email-input' /><br/>
              <button className='app__button'>Enviar</button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default App;
