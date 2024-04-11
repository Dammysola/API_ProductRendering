import React from 'react'
import {useLocation} from 'react-router-dom'
import './Card.css'


const ProductDetailsOne = () => {

  const {state}= useLocation()

  const DetailState= JSON.parse(state);
  console.log(DetailState);
    const {title, price, description, category, image, rating} = DetailState 
  return (
    <div  id='Product_Details'>
       <div>
            <img id='Product_image' src={image} alt="" />
       </div>
       <div id='Product_texts'>
            <div id='Product_firstLine'>
              <div>
                <button className='Product_btn1'>Official store</button>
                <button className='Product_btn1'>Pay on delivery</button>
              </div>
              <img id='Product_loveImage' src="./src/assets/Love.png" alt="" />
            </div>
            <div id='Product_category'>{category}</div>
            <div id='Product_title'>{title}</div>
            <div id='Product_price'>${price}</div>
            <div>In stock</div>
            <p id='Product_description'><span>Description</span> {description}</p>
            <div id='Product_rating'><img id='Product_ratingImage' src="./src/assets/rating.jpg" alt="" /> {rating.rate} <span>({rating.count}+ reviews)</span> </div>
                <br />
            <div id='div'>
              <button id='Product_btn'><div id='Product_btnImageDiv'><img id='Product_btnImage' src="./src/assets/Cart.png" alt="" /></div>ADD TO CART</button>
            </div>
       </div>
    </div>
  )
}

export default ProductDetailsOne