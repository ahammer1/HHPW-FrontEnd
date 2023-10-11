import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { deleteProduct } from '../api/productData';
// import createProductOrders from '../api/PO';

export default function ProductCard({ productObj, onUpdate }) {
  const deleteThisProduct = () => {
    if (window.confirm(`Delete ${productObj.name}?`)) {
      deleteProduct(productObj.id).then(() => onUpdate());
    }
  };

  // const addToOrder = () => {
  //   const orderId = orderObj.id;
  //   const productId = productObj.id;
  //   if (window.confirm(`Add ${productObj.name}?`)) {
  //     createProductOrders(orderId, productId).then(() => {
  //       onUpdate();
  //     });
  //   }
  // };

  useEffect(() => {
    console.log('products', productObj);
  }, []);

  return (
    <Card
      className="hoverable-card"
      style={{ width: '18rem', margin: '10px' }}
    >
      <Card.Body>
        <Card style={{ textAlign: 'center', marginBottom: '10px' }}>
          {productObj.name}
        </Card>
        <p className="card-text bold" style={{ marginBottom: '5px' }}>
          {productObj.price}
        </p>
        <p className="card-text" style={{ marginBottom: '15px' }}>
          {productObj.description}
        </p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button variant="dark" className="mr-2" href={`/product/${productObj.id}`}>
            VIEW
          </Button>
          <Button variant="dark" className="mr-2" href={`/product/Edit/${productObj.id}`}>
            EDIT
          </Button>
          <Button variant="dark" onClick={deleteThisProduct}>
            DELETE
          </Button>
          {/* <Button onClick={addToOrder} href="/selectOrder">Add to Order</Button> */}
        </div>
      </Card.Body>
    </Card>
  );
}

ProductCard.propTypes = {
  productObj: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
  // orderObj: PropTypes.shape({
  //   id: PropTypes.number,
  //   // statusId: PropTypes.string,
  //   paymentId: PropTypes.string,
  //   name: PropTypes.string,
  // }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
