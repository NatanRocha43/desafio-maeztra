import React from 'react'
import './Footer.css'

import Facebook from '../../assets/img/facebook.png'
import Linkedin from '../../assets/img/link.png'
import Instagram from '../../assets/img/instagram.png'
import Youtube from '../../assets/img/youtube.png'

import Cartao1 from '../../assets/img/cartao-1.png'
import Cartao2 from '../../assets/img/cartao-2.png'
import Cartao3 from '../../assets/img/cartao-3.png'
import Cartao4 from '../../assets/img/cartao-4.png'

import Vtex from '../../assets/img/powered-by#vtex.png'
import Maeztra from '../../assets/img/powered-by#maeztra.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer__div'>
            <div className='footer__div--img'>
                <img className='footer__img-social' src={Facebook} alt='Facebook'/>
                <img className='footer__img-social' src={Linkedin} alt='Linkedin'/>
                <img className='footer__img-social' src={Instagram} alt='Instagram'/>
                <img className='footer__img-social' src={Youtube} alt='Youtube'/>
            </div>

            <div className='footer__div--img'>
                <img className='footer__img-cartao' src={Cartao1} alt='Cartão'/>
                <img className='footer__img-cartao' src={Cartao2} alt='Cartão'/>
                <img className='footer__img-cartao' src={Cartao3} alt='Cartão'/>
                <img className='footer__img-cartao' src={Cartao4} alt='Cartão'/>     
            </div>

            <div className='footer__div--img'>
                <img className='footer__img-office' src={Vtex} alt='Vtex'/> 
                <img className='footer__img-office' src={Maeztra} alt='maeztra'/> 
            </div>

         </div>
       
    </div>
  )
}

export default Footer
