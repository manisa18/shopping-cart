import React from 'react';
import './Home.css';
const Home = ({ productItems, handleAddProduct}) => {
 
    return (

        <div className="contain">
        {productItems.map((productItems)=>(
            <div className="row col-4">

                <div key={productItems.id} >
                    <div className="product-image"><img src={productItems.image} alt={productItems.name} /></div>
                    <div className="details">
                        <div className="product-name"><h2>{productItems.name}</h2></div>
                        <div className="product-stock"><h4>Available  {productItems.stock}</h4></div>
                        <div className="product-price"><h3>${productItems.price}</h3></div>
                        <div><button className="addtocart"
                            onClick={() => handleAddProduct(productItems)}>Add to Cart</button></div>
                    </div>
                </div>
            </div>))}
        </div>
    );
}

export default Home;
