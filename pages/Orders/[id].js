import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { getSingleOrder } from '../../api/OrderData';

export default function ViewOrder() {
  const [orderDetails, setOrderDetails] = useState({});

  const router = useRouter();

  const { id } = router.query;

  useEffect(() => {
    getSingleOrder(id).then(setOrderDetails);
  }, [id]);

  return (
    <>
      <div style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh',
      }}
      >
        <div className="text-center">
          <Link href="/newOrder" passHref>
            <Button variant="dark">Add To Order?</Button>
          </Link>
          <div className="text-white mt-5 details">
            <h2 className="card-title bold">{orderDetails.name}</h2>
          </div>
        </div>
      </div>
    </>
  );
}
