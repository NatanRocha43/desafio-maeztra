import React from 'react'
import './Menu.css'

const Menu = () => {
  return (
    <div className='main__menu'>
        <div className="elements">
            <div className="elements__item"><a className='main__div-link icon' href="/" >Novidades</a></div>
            <div className="elements__item"><a className='main__div-link' href="/" >Vestidos</a></div>
            <div className="elements__item"><a className='main__div-link' href="/" >Roupas</a></div>
            <div className="elements__item"><a className='main__div-link' href="/" >Sapatos</a></div>
            <div className="elements__item"><a className='main__div-link' href="/" >Lingerie</a></div>
            <div className="elements__item"><a className='main__div-link' href="/" >Acessórios</a></div>
            <div className="elements__item"><a className='main__div-link' href="/" >OUTLET</a></div>
        </div> 
    </div>
  )
}

export default Menu
