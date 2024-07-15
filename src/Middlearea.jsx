import React from 'react'

const Middlearea = () => {
  return (
    <main className="hero container">
    <div className="hero-content">
      <h1>YOU CAN SEE YOUR BEST WAY</h1>
      <p>
        YOUR EYES DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
        GLASSES. AND WE’RE HERE TO HELP YOU WITH OUR
        GLASSES.
      </p>

      <div className="hero-btn">
        <button>Shop Now </button>
        <button className="secondary-btn">Category</button>
      </div>

      <div className="shopping">
        <p>Also Available On</p>

        <div className="brand-icons">
          <img src="/images/amazon.png" alt="amazon-logo" />
          <img src="/images/flipkart.png" alt="flipkart-logo" />
        </div>
      </div>
    </div>
    <div className="hero-image">
      <img height="400  px"
       src="/images/glasses.png" alt="hero-image" />
    </div>
  </main>
);
};
  
export default Middlearea;