import React from "react";
import './Shelf.css'
import Slider from "react-slick";
import Produto1 from '../../../assets/img/product1.jpg'
import Produto2 from '../../../assets/img/product2.jpg'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Shelf() {
  const settings = {
    className: "center",
    infinite: true,
    dots: true,
    centerPadding: "60px",
    slidesToShow: 5,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerMode: false,
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          centerPadding: "0",
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      
    ]
  };
  return (
  <div className='shelf'>
      <div className='shelf__titulo'>
        As Mais Pedidas
      </div>
      <Slider {...settings}>

      <div className='shelf_div'>
        <div>
          <img src={Produto1} alt='produto'/>
        </div>
        <div className='shelf__div-color'>
          <div className='shelf__div-color-produto laranja' />
          <div className='shelf__div-color-produto rosa' />
          <div className='shelf__div-color-produto azul' />
          <div className='shelf__div-color-produto roxo' />
        </div>
        <div>
          <p className='shelf__div-p-valor'>R$ 500,00</p>
        </div>
        <div>
          <p className='shelf__div-p-titulo'>Faux Suede Mini Skirt</p>
        </div>
        <div className='shelf__div-p-Subtitulo'>
          A faux suede mini skirt featuring exposed <br/>button-front closures and panel<br/> seam construction.
        </div>
        <div>
          <button className='shelf__div-button'>Adicionar</button>
        </div>
      </div>  

      <div className='shelf_div'>
        <div>
          <img src={Produto2} alt='produto'/>
        </div>
        <div className='shelf__div-color'>
          <div className='shelf__div-color-produto preto' />
          <div className='shelf__div-color-produto vermelho' />
          <div className='shelf__div-color-produto amarelo' />
          <div className='shelf__div-color-produto cinza' />
        </div>
        <div>
          <p className='shelf__div-p-valor'>R$ 320,00</p>
        </div>
        <div>
          <p className='shelf__div-p-titulo'>Ruched Rose Print Mini Skirt</p>
        </div>
        <div className='shelf__div-p-Subtitulo'>
          A satin mini skirt featuring an allover floral print,<br/> ruched side with self-tie closure, concealed back <br/>zipper, and a flounce hem.
        </div>
        <div>
          <button className='shelf__div-button'>Adicionar</button>
        </div>
      </div> 

      <div className='shelf_div'>
        <div>
          <img src={Produto1} alt='produto'/>
        </div>
        <div className='shelf__div-color'>
          <div className='shelf__div-color-produto laranja' />
          <div className='shelf__div-color-produto rosa' />
          <div className='shelf__div-color-produto azul' />
          <div className='shelf__div-color-produto roxo' />
        </div>
        <div>
          <p className='shelf__div-p-valor'>R$ 500,00</p>
        </div>
        <div>
          <p className='shelf__div-p-titulo'>Faux Suede Mini Skirt</p>
        </div>
        <div className='shelf__div-p-Subtitulo'>
          A faux suede mini skirt featuring exposed <br/>button-front closures and panel<br/> seam construction.
        </div>
        <div>
          <button className='shelf__div-button'>Adicionar</button>
        </div>
      </div> 

      <div className='shelf_div'>
        <div>
          <img src={Produto2} alt='produto'/>
        </div>
        <div className='shelf__div-color'>
          <div className='shelf__div-color-produto preto' />
          <div className='shelf__div-color-produto vermelho' />
          <div className='shelf__div-color-produto amarelo' />
          <div className='shelf__div-color-produto cinza' />
        </div>
        <div>
          <p className='shelf__div-p-valor'>R$ 320,00</p>
        </div>
        <div>
          <p className='shelf__div-p-titulo'>Ruched Rose Print Mini Skirt</p>
        </div>
        <div className='shelf__div-p-Subtitulo'>
          A satin mini skirt featuring an allover floral print,<br/> ruched side with self-tie closure, concealed back <br/>zipper, and a flounce hem.
        </div>
        <div>
          <button className='shelf__div-button'>Adicionar</button>
        </div>
      </div> 

      <div className='shelf_div'>
        <div>
          <img src={Produto1} alt='produto'/>
        </div>
        <div className='shelf__div-color'>
          <div className='shelf__div-color-produto laranja' />
          <div className='shelf__div-color-produto rosa' />
          <div className='shelf__div-color-produto azul' />
          <div className='shelf__div-color-produto roxo' />
        </div>
        <div>
          <p className='shelf__div-p-valor'>R$ 500,00</p>
        </div>
        <div>
          <p className='shelf__div-p-titulo'>Faux Suede Mini Skirt</p>
        </div>
        <div className='shelf__div-p-Subtitulo'>
          A faux suede mini skirt featuring exposed <br/>button-front closures and panel<br/> seam construction.
        </div>
        <div>
          <button className='shelf__div-button'>Adicionar</button>
        </div>
      </div> 

      <div className='shelf_div'>
        <div>
          <img src={Produto2} alt='produto'/>
        </div>
        <div className='shelf__div-color'>
          <div className='shelf__div-color-produto preto' />
          <div className='shelf__div-color-produto vermelho' />
          <div className='shelf__div-color-produto amarelo' />
          <div className='shelf__div-color-produto cinza' />
        </div>
        <div>
          <p className='shelf__div-p-valor'>R$ 320,00</p>
        </div>
        <div>
          <p className='shelf__div-p-titulo'>Ruched Rose Print Mini Skirt</p>
        </div>
        <div className='shelf__div-p-Subtitulo'>
          A satin mini skirt featuring an allover floral print,<br/> ruched side with self-tie closure, concealed back <br/>zipper, and a flounce hem.
        </div>
        <div>
          <button className='shelf__div-button'>Adicionar</button>
        </div>
      </div> 
      
    </Slider>
  </div>
    
  );
}