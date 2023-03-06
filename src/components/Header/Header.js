import React from 'react'
import "./Header.css"


const Header = () => {
  return (
    <div className='header'>
        <div className='header__top'>
            <p className='header__paragraph'>Acompanhe as melhores promoções disponíveis aqui na Maeztra.</p>   
        </div>

        <div className='header__bot'>
            <div className="header__logo">
                <img className="header__logo-img" src='https://i.ibb.co/StZVfCx/logo-maeztra-novo.png' alt="Logo" />
            </div>
            <div className="header__search">
                <input type="text" placeholder="O Que Você Busca?" className="header__search-input" />
                <button type="submit" className="header__search-button">Buscar</button>
            </div>
            <div className="header__menu">
                <ul className="header__menu-list">
                    <li className="header__menu-item"><a className='header__li-link' href="/">Minha Conta</a></li>
                    <li className="header__menu-item"><a className='header__li-link' href="/">Minha Conta</a></li>
                    <li className="header__menu-item"><a className='header__li-link' href="/">Meu Carrinho</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header
