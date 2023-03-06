import React from 'react'
import './Newsletter.css'

const Newsletter = () => {
  return (
    <div className='newsletter'>
        <div className='newsletter__div'>
            <p className='newsletter__p'>Recebe Nossa Newsletter</p>
            <div className="newsletter__search">
                <input type="text" placeholder="Digite seu e-mail" className="newsletter__email-input" />
                <button type="submit" className="newsletter__search-button">Enviar</button>
            </div>
        </div>
    </div>
  )
}

export default Newsletter
