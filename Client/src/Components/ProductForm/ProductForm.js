import React, { useState, useEffect } from 'react';
import FileBase from 'react-file-base64';
import { Link } from 'react-router-dom';
import "./ProductForm.css"
import { useDispatch } from 'react-redux'
import { createProduct, getProduct } from '../../actions/products';
import { BrowserRouter as history } from 'react-router-dom';
function ProductForm() {
    const [productData, setproductData] = useState(
        { title:'title', image:'image', price:'price', rating:'rating' }
    );
    
    const dispatch = useDispatch();
    // const history = useNavigate();
    const postProduct =  e => {
        e.preventDefault();
        dispatch(createProduct(productData));
        // history.push("/");

    };
    
    useEffect(() => {
        dispatch(getProduct())
        },[dispatch]);
    return (
        <div className="registration">
            <Link to="/">
                <img 
                    className="registration__Image"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    alt=""
                />
            </Link>
            <div className="registration__Container">
                <h1>Post The Product</h1>

                <form>
                    <h5>Title</h5>
                    <input type="text" value={productData.title} onChange={(e) => setproductData({ ...productData, title: e.target.value})} />

                    <h5>Produce Image</h5>
                    <div className='Image_Div'><FileBase type="file" multiple={false} onDone={({ base64 }) => setproductData({ ...productData, image: base64 })} /></div>
                    
                    <h5>Price</h5>
                    <input type="text" value={productData.price} onChange={(e) => setproductData({ ...productData, price: e.target.value})} />

                    <h5>Rating</h5>
                    <input type="text" value={productData.rating} onChange={(e) => setproductData({ ...productData, rating: e.target.value})} />

                    <button type='submit' onClick={postProduct} className='registration__registerButton'>Post_Product</button>
                </form>

                <p>
                    By Signing-in you agree to the Conditions
                    of Use & Sale. Please see out Privacy Notice,
                    Our Cookies Notice and our Interese-Based
                    Ads Notice
                </p>

            </div>
            
        </div>
    )
}

export default ProductForm
