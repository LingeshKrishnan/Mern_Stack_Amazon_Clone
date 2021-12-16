import axios from 'axios'
import React from 'react'

const product_url = 'http://localhost:5000/product'
const login_url = 'http://localhost:5000/'
const cart_url = 'http://localhost:5000/cart'

export const fetchLogins = () => axios.get(login_url)

export const createLogin = (newLogin) => axios.post(login_url, newLogin)

export const fetchProducts = () => axios.get(product_url)

export const createProduct = (newProduct) => axios.post(product_url, newProduct)

export const addtoCart = (cartProduct) => axios.post(cart_url, cartProduct)

export const removefromCart = (cartProduct) => axios.post(cart_url, cartProduct);