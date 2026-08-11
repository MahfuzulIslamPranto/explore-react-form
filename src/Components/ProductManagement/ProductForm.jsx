import React, { useState } from 'react';

const ProductForm = ({ handleProducts }) => {
    const [error,setError] = useState('');
    const handleSubmit = e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        console.log(name,price,quantity);
        const product ={
            name,price,quantity
        }
        if(name.length===0 ){
            setError('Please enter product name');
            return;
        }
        else{
            setError('');
        }
        handleProducts(product);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder='Product Name' id="" /><br />
                <input type="text" name="price" placeholder='Product Price' id="" /><br />
                <input type="text" name="quantity" placeholder='Product Quantity' id="" /><br />
                <input type="submit" value="Submit" />
            </form>
            <p style={{color:'red'}}><small>{error}</small></p>
        </div>
    );
};

export default ProductForm;