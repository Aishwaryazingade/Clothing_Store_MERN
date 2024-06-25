import React, { useContext } from 'react'
import './Productdisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/Shopcontext'

const Productdisplay = (props) => {  //props from product.js gets product with specific id
const {product}=props
 // category : "men"
  // id: 14
  // image: "/static/media/product_14.097d9d7b9f1c85e4e293.png"
  // name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket"
  // new_price: 85
  // old_price: 120.5
  //product with id 14 matched and its all data like name,category all are stored in product variable
  //here variable product is the product with specific id found from all_products array
      

const {addToCart}=useContext(ShopContext)
//hooks are used before return statement
return (
<div className='productdisplay'>


{/* for small images at left */}
    <div className="productdisplay-left">

       <div className="productdisplay-img-list">
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
       </div>

       <div className="productdisplay-img">
          <img  className="productdisplay-main-img" src={product.image} alt="" />
        </div>
    </div>

    <div className="productdisplay-right">

       <h1>{product.name}</h1>

       <div className="product-display-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>

        <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old">${product.old_price}</div>
            <div className="productdisplay-right-price-new">${product.new_price}</div>
        </div> 

        <div className="product-display-right-description">
            A lightweight knitted,pullover,close-fitting and a
             round neckline and short sleeve worn as an undershirt or outer garment
        </div>
        <div className="product-display-right-size">
            <h1>Select Size</h1>

            <div className="product-display-right-sizes">
              <div>S</div>
              <div>M</div>
              <div>L</div>
              <div>XL</div>
              <div>XXL</div>
           </div>
        </div>

        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
        <p className="product-display-right-category"><span>Category:</span>Women,T-shirt ,Crop top</p>
        <p className="product-display-right-category"><span>Tags:</span>Modern , Latest</p>

    </div>

    </div>
  )
}

export default Productdisplay
