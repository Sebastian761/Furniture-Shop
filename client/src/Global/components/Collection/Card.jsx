import React from 'react'
import './styles/card.css'

export const Card = (props) => {
  return (
    <div className='card__container'>
      <img className='card__img' src={ props.image }></img>
      <div className='card__info'>
        <h3 className='card__info-title'>{props.name}</h3>
        <div className='card__info-text'>
          <h4>Product info</h4>
          <p>{props.info}</p>
        </div>
        <div className='card__prices'>
          <p className='card__price'> $ {props.price}</p>
          <button  className='card__btn'>Add to cart</button>
        </div>
  
      </div>
    </div>
  )
}
