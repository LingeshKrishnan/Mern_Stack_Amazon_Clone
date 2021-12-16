import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct, createProduct } from '../../actions/products';
import { Grid, CircularProgress } from '@material-ui/core';
import Product from './Product/Product'

const Products= () => {
    const products= useSelector((state)=>state.product);
    console.log("main",products);
    return (
        // <div className='Product'>
            !products.length ? <CircularProgress /> : (
                <Grid className='product_Container' container alignItems="center" spacing={3}>
                {products.map((product) => (
                <Grid key={product._id} item xs={12} sm={6} md={6}>
                    <Product product={product}  />
                </Grid>
                ))}
                </Grid>
            )
            
        // </div>
    )
}

export default Products
