import React from 'react'
import './Card.css'

const Card = () => {
  return (
    <div className='cardMaeztra'>
        
        <div className='cardMaeztra__div-titulo'>
            <h2 className='cardMaeztra__div-h2'>Por que comprar na Maeztra?</h2>
        </div>

        <div className='cardMaeztra__div-top'>
            <div className='cardMaeztra__div-1'>
                <img className='cardMaeztra__img' src='https://i.imgur.com/o6jS7Gc.png' alt='img'/>
                <p className='cardMaeztra__p'><b className='cardMaeztra__bold'>Produtos importados</b><br/>Produto de Alta Qualidade</p>
            </div>
            <div className='cardMaeztra__div-1'>
                <img className='cardMaeztra__img' src='https://i.imgur.com/QTFwPmU.png' alt='img'/>
                <p className='cardMaeztra__p'><b className='cardMaeztra__bold'>Estoque no Brazil</b><br/>Produtos mais perto de você!</p>
            </div>
            <div className='cardMaeztra__div-1'>
                <img className='cardMaeztra__img' src='https://i.imgur.com/5GTW9ii.png' alt='img'/>
                <p className='cardMaeztra__p'><b className='cardMaeztra__bold'>Trocas Garantidas</b><br/>Trocas em até 48 horas, vejas as regras</p>
            </div>
            <div className='cardMaeztra__div-1'>
                <img className='cardMaeztra__img' src='https://i.imgur.com/sxrqa57.png' alt='img'/>
                <p className='cardMaeztra__p'><b className='cardMaeztra__bold'>Ganhe 5% off</b><br/>Pagando à vista no Cartão</p>
            </div>
            <div className='cardMaeztra__div-1'>
                <img className='cardMaeztra__img' src='https://i.imgur.com/pyNUUin.png' alt='img'/>
                <p className='cardMaeztra__p'><b className='cardMaeztra__bold'>Frete Grátis</b><br/>Em compras acima de R$ 499,00</p>
            </div>
        </div>

        <div>
            <div className='cardMaeztra__div-titulo-bot'>
                <h3 className='cardMaeztra__div-h3'>Marcas Parceiras</h3>
            </div>
            <div >
                <div className='cardMaeztra__div-bot'>
                    <div className='imagem imagem--1'><img className='cardMaeztra__div-img' src='https://i.imgur.com/Qoc0YF7.png' alt='parceiros' /></div>
                    <div className='imagem imagem--2'><img className='cardMaeztra__div-img' src='https://i.imgur.com/cHLLxR4.png' alt='parceiros' /></div>
                    <div className='imagem imagem--3'><img className='cardMaeztra__div-img' src='https://i.imgur.com/JOTNQgl.png' alt='parceiros' /></div>
                    <div className='imagem imagem--4'><img className='cardMaeztra__div-img' src='https://i.imgur.com/PN0nOAY.png' alt='parceiros' /></div>
                    <div className='imagem imagem--5'><img className='cardMaeztra__div-img' src='https://i.imgur.com/qZ1WvYA.png' alt='parceiros' /></div>
                </div>
            </div>
        </div>       
    </div>
    
  )
}

export default Card
