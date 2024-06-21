import React, { useContext } from 'react'
import "./ProductDisplay.css"
import star_icon from "../assets/star_icon.png"
import star_dull_icon from "../assets/star_dull_icon.png"
import { ShopContext } from '../../Context/ShopContext'
import { useState } from 'react'



const ProductDisplay = (props) => {

    const [selectedSize, setSelectedSize] = useState(null);
    const sizes = ['S', 'M', 'L', 'XL',"XXL"];


    const { product } = props

    const { addToCart } = useContext(ShopContext)

    return (
        <div className='productdisplay'>
            <div className='productdisplay-left'>
                <div className='productdisplay-img-list'>
                    <img src={product.image} alt='' />
                    <img src={product.image} alt='' />
                    <img src={product.image} alt='' />
                    <img src={product.image} alt='' />

                </div>
                <div className='productdisplay-img'>
                    <img className='productdisplay-main-img' src={product.image} alt='' />
                </div>
            </div>
            <div className='productdisplay-right'>
                <h1>{product.name}</h1>
                <div className='productdisplay-right-stars'>
                    <img src={star_icon} alt='' />
                    <img src={star_icon} alt='' />
                    <img src={star_icon} alt='' />
                    <img src={star_icon} alt='' />
                    <img src={star_dull_icon} alt='' />
                    <p>122</p>
                </div>
                <div className='porductdisplay-right-prices'>
                    <div className='productdisplay-right-price-old'>
                        ${product.old_price}
                    </div>
                    <div className='productdisplay-right-price-new'>
                        ${product.new_price}
                    </div>
                </div>
                <div className='productdisplay-right-description'>
                    This elegant three-piece suit is excellent for any formal occasion. Do you want to feel like George Clooney on the red carpet? Our slim fit and single-breasted blazer will give you a sharp and polished look while the pants and vest complete the ensemble. The 80% polyester and 20% viscose fabric is comfortable and easy to care for, and we recommend dry cleaning for the best results.
                </div>
                <div className='productdisplay-right-size'>
                    <h1>select size</h1>
                    <div className='productdisplay-right-sizes'>
                        {/* <div style={{ backgroundColor: "red" }}>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div> */}
                        {sizes.map((size) => (
                            <div
                                key={size}
                                onClick={() => setSelectedSize(size)}
                                style={{
                                    display: 'inline-block',
                                    border: '1px solid #ccc',
                                    backgroundColor: selectedSize === size ? 'red' : 'white',
                                    color: 'black',
                                    cursor: 'pointer',
                                    textAlign: 'center',
                                    userSelect: 'none'
                                }}
                            >
                                {size}
                            </div>
                        ))}

                    </div>
                </div>
                <button onClick={() => { addToCart(product.id) }}>Add to cart</button>
                <p className='productdisplay-right-category'><span>Category :</span> Women, t-shirt,croptop</p>
                <p className='productdisplay-right-category'><span>Tags :</span> modern ,latest</p>
            </div>


        </div>
    )
}

export default ProductDisplay
