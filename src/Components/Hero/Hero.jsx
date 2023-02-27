import React from 'react'
import Button from '../Button/Button'
import "./Hero.css"

const Hero = () => {
  return (
    <div>
      <section className='hero-section'>
        <div className="container">
          <div className="hero">
            <div className="hero__title">
              <h2 className='hero__head'>Bangladesh Bigest Fruits  Online Shop</h2>
              <p className='hero__text'>Special Discount Up 50%</p>
              <Button />
            </div>
            <div className="hero__img">
              <img className='saucepan' src="./src/Components/Img/saucepan.svg" alt="svg" width="651" height="407" />
            </div>
          </div>
          <div className='line'></div>
        </div>
      </section>
    </div>
  )
}

export default Hero