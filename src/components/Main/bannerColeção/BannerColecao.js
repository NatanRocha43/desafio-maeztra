import React from 'react'
import './BannerColecao.css'

const BannerColecao = () => {
  return (
    <div className='bannerColecao'>
        <div className='bannerColecao__div'>
            <div className='bannerColecao__texto'>
                <h1>Lorem ipsum</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum<br/> 
                    mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim dictum.<br/>
                    Mattis proin ut quis donec sed eget nulla. Vel mi ut mauris integer.<br/>
                    Nibh sagittis in lobortis sed cursus condimentum velit pharetra. Amet luctus <br/>
                    ut vulputate scelerisque placerat consequat. Neque arcu mi iaculis id. <br/>
                    Vel vitae, pharetra, a nec tristique. Feugiat id tortor eu mauris pulvinar<br/>
                    velit massa. Ut ornare augue eget convallis volutpat aliquet. Sed sed<br/>
                    pellentesque porttitor phasellus donec condimentum sit sapien.
                </p>
            </div>
            <img className='bannerColecao__img' src='https://i.imgur.com/1vLCv01.png' alt='verao'/>
        </div>
    </div>
  )
}

export default BannerColecao
