import React from 'react';

const ProductTable = ({ products }) => {
    return (
        <div>
            <h3>Number of Products: {products.length}</h3>
            <table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((p, index) => <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{p.name}</td>
                            <td>{p.price}</td>
                            <td>{p.quantity}</td>
                            <td></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;