import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { getOrders } from '../api/OrderData';
import OrderCard from '../components/OrderCard';

export default function NewOrder() {
  const [Orders, setOrders] = useState([]);

  const getAllOrder = () => {
    getOrders().then(setOrders);
  };

  useEffect(() => {
    getAllOrder();
  }, []);

  return (
    <div className="text-center my-4">
      <Link href="/Orders/newOrder" passHref>
        <Button variant="dark">Add A Order</Button>
      </Link>
      <div className="d-flex flex-wrap">
        {Orders && Orders.length > 0 ? (
          Orders.map((Order) => (
            <OrderCard key={Order.Id} ordObj={Order} onUpdate={getOrders} />
          ))
        ) : (
          <p>No orders available.</p>
        )}
      </div>
    </div>
  );
}
