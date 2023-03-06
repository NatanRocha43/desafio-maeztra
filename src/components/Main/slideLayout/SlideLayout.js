import React from 'react'
import './SlideLayout.css'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function SlideLayout() {
  return (
    <Carousel variant='dark'>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src='https://i.imgur.com/ftECh3G.png'
          alt='First slide'
        />
        <Carousel.Caption>
            <div className='div__content-img'>
                <h1 className='div__content-h1'>Promoções de Outono</h1>
                <p className='div__content-p'>Confiras os melhores looks para combinar<br/> com você nesse Outono</p>
                <button className='div__content-button'>Conferir</button>
            </div>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src='https://i.imgur.com/ftECh3G.png'
          alt='Second slide'
        />
        <Carousel.Caption>
            <div className='div__content-img'>
                <h1 className='div__content-h1'>Promoções de Outono</h1>
                <p className='div__content-p'>Confiras os melhores looks para combinar<br/> com você nesse Outono</p>
                <button className='div__content-button'>Conferir</button>
            </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src='https://i.imgur.com/ftECh3G.png'
          alt='Third slide'
        />
        <Carousel.Caption>
            <div className='div__content-img'>
                <h1 className='div__content-h1'>Promoções de Outono</h1>
                <p className='div__content-p'>Confiras os melhores looks para combinar<br/> com você nesse Outono</p>
                <button className='div__content-button'>Conferir</button>
            </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default SlideLayout;