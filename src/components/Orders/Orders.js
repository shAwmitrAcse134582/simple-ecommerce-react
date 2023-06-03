import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Orders = () => {
    const orders=useLoaderData();
    return (
        <div>
            <h2>This is the orders page: {orders.length}</h2>
        </div>
    );
};

export default Orders;