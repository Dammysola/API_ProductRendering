import React from 'react'
import './Card.css'


const Card = (props) => {
     const {value} = props
  return (
    <div>

      <div id='Card_mainDiv'>
        <div id='Card_imageDiv'>
          <img id='Card_image' src={value.image} alt="" />
        </div>
        <div id='Card_texts'>
          <div id='Card_category'> {value.category}</div>
          <div id='Card_title'>{value.title}</div>

        <div id='Card_sizeDiv'>
          <div id='Card_size'></div>
          <div id='Card_price'>${value.price}</div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Card