import React from 'react'
import './items.css'
import { Link } from 'react-router-dom'

//props from popular.js and many more
const Itms = (props) => {
  return (
    <div className="item">
    <Link to={`/products/${props.id}`}> <img onClick={window.scrollTo(0,0)} src={props.image} alt="" /></Link>
        
        <p>{props.name}</p>

        <div className="item-prices">
            <div className="item-price-new">
                ${props.new_price}
            </div>

            <div className="item-price-old">
               ${props.old_price} 
            </div>
        </div>

    </div>
  )
}

export default Itms


// The code snippet onClick={window.scrollTo(0,0)} is typically found in a JavaScript/React context.
// Let's break down what it means:

// onClick Attribute: This attribute is used in HTML/JSX to specify a function that should be
//  executed when an element is clicked. In the context of React, the value inside {} is JavaScript code.

// window.scrollTo Function: This is a JavaScript function that scrolls the window to a
//  particular set of coordinates.

// (0,0) Coordinates: These coordinates specify the position to which the window should be scrolled.
//  0 represents the x coordinate (horizontal) and the other 0 represents the y coordinate (vertical). 
// So, (0,0) means the top-left corner of the document.

// Putting it all together, onClick={window.scrollTo(0,0)} means that when the element 
// with this onClick attribute is clicked, the browser window will scroll to the top-left corner of the document.

