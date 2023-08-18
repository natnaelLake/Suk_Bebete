import React from 'react'
import './style.css';
import image1 from "../../../assets/pexels-tuấn-kiệt-jr-1391498.jpg";

export const SmallCard = () => {
  return (
    <div className="container" style={{margin:'15px 5px'}}>
    <div className="card">
      <div className="imgBx">
        <img src={image1} />
      </div>
      <div className="contentBx">
        <h2>Nike Shoes</h2>
        <div className="size">
          <h3>Size :</h3>
          <span>7</span>
          <span>8</span>
          <span>9</span>
          <span>10</span>
        </div>
        <div className="color">
          <h3>Color :</h3>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <a href="#">Buy Now</a>
      </div>
    </div>
  </div>
  )
}

