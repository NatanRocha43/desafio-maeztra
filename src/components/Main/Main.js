import React from 'react'
import './Main.css'
import Menu from './mainMenu/Menu'
import SlideLayout from './slideLayout/SlideLayout'
import Card from './card/Card'
import Shelf from './shelf/Shelf'
import BannerColecao from './bannerColeção/BannerColecao'
import Newsletter from './newsletter/Newsletter'
import Info from'./informacao/Info'


const Main = () => {
  return (
    <div className='index'>
      <Menu />
      <SlideLayout />
      <Card />
      <Shelf />
      <BannerColecao />
      <Newsletter />
      <Info />
    </div>
  )
}

export default Main;
