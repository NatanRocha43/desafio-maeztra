import React from 'react'
import './Info.css'

const Info = () => {
  return (
    <div className='info'>
        <div className='info__container'>
          <div className='info__column'>
            <h1 className='info__titulo'>Informações</h1>
            <p className='info__p'>Quem Somos</p>
            <p className='info__p'>Prazo de Envio</p>
            <p className='info__p'>Trocas e Devoluções</p>
            <p className='info__p'>Promoções e Cupons</p>
          </div>
          <div className='info__column'>
            <h1 className='info__titulo'>Minha Conta</h1>
            <p className='info__p'>Minha Conta</p>
            <p className='info__p'>Meus Pedidos</p>
            <p className='info__p'>Cadastre-se</p>
          </div>
          <div className='info__column'>
            <h1 className='info__titulo'>Onde nos Encontrar</h1>
            <p className='info__p'>Lojas</p>
            <p className='info__p'>Endereço</p>
          </div>
        </div>  
    </div>
  )
}

export default Info
