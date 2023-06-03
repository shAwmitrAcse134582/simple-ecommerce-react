import React, { useEffect, useState } from 'react';
import {addToDb, getShoppingCart} from "../../utilities/fakedb"
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
const Shop = () => {
    // const [products,setProducts]=useState([])
    const products=useLoaderData();
    const[cart,setCart]=useState([])
    // useEffect(()=>{
    //     fetch('products.json')
    //     .then(res=>res.json())
    //     .then(data=>setProducts(data))
    // },[])
    useEffect(()=>{
        const storedCart=getShoppingCart();
        const savedCart=[];
       for(const id in storedCart){
        const addedProduct=products.find(product=>product.id===id)
        if(addedProduct){
            const quantity=storedCart[id];
            addedProduct.quantity=quantity;
            console.log(addedProduct);
            savedCart.push(addedProduct);
        }        
       }
       setCart(savedCart);
    },[products])

    const handleAddTocart=(product)=>{
        console.log(product);
        let newCart=[];
        const exists=cart.find(newproduct=>newproduct.id===product.id);
        if(!exists){
            product.quantity=1;
            newCart=[...cart,product];
        }
        else{
            const rest=cart.filter(newproduct=>newproduct.id!==product.id);
            exists.quantity=exists.quantity+1;
            newCart=[...rest,exists];
        }
       
        setCart(newCart);
        addToDb(product.id);
       }
    

    return (
        <div className='shop-container'>
            <div className='products-container'>
             {
                products.map(product=> <Product
                key={product.id}
                product={product}
                handleAddTocart={handleAddTocart}
                ></Product>)
              
             }
            </div>

            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;