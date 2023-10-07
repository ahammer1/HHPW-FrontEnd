import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { deleteProduct } from '../api/productData';

export default function ProductCard({ productObj, onUpdate }) {
  const deleteThisProduct = () => {
    if (window.confirm(`Delete ${productObj.Name}?`)) {
      deleteProduct(productObj.Id).then(() => onUpdate());
    }
  };

  return (
    <Card
      className="hoverable-card"
      style={{ width: '18rem', margin: '10px' }}
    >
      <Card.Body>
        <Card.Name style={{ textAlign: 'center', marginBottom: '10px' }}>
          {productObj.Name}
        </Card.Name>
        <p className="card-text bold" style={{ marginBottom: '5px' }}>
          {productObj.Price}
        </p>
        <p className="card-text" style={{ marginBottom: '15px' }}>
          {productObj.Description}
        </p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button variant="dark" className="mr-2" href={`/product/${productObj.Id}`}>
            VIEW
          </Button>
          <Button variant="dark" className="mr-2" href={`/product/Edit/${productObj.Id}`}>
            EDIT
          </Button>
          <Button variant="dark" onClick={deleteThisProduct}>
            DELETE
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

ProductCard.propTypes = {
  productObj: PropTypes.shape({
    Name: PropTypes.string,
    Price: PropTypes.number,
    Description: PropTypes.string,
    Id: PropTypes.number,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
