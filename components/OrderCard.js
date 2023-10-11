import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import Link from 'next/link';
import { deleteOrder } from '../api/OrderData';
// import createProductOrders from '../api/PO';

export default function OrderCard({ ordObj, onUpdate }) {
  const deleteThisOrder = () => {
    if (window.confirm(`Delete ${ordObj.name}?`)) {
      deleteOrder(ordObj.id).then(() => onUpdate());
    }
  };

  // const addToOrder = () => {
  //   const orderId = ordObj.id;
  //   const productId = productObj.id;
  //   createProductOrders(orderId, productId)
  //     .then(() => {
  //       onUpdate();
  //     })
  //     .catch((error) => {
  //       console.error('Error adding product to order:', error);
  //     });
  // };

  return (
    <Card
      className="hoverable-card"
      style={{ width: '18rem', margin: '10px' }}
    >
      <Card.Body>
        <Card.Title style={{ textAlign: 'center', marginBottom: '10px' }}>
          Name: {ordObj.name}
        </Card.Title>
        <p className="card-text bold" style={{ marginBottom: '5px' }}>
          Payment type: {ordObj.paymentId}
        </p>
        {/* <p className="card-text bold" style={{ marginBottom: '5px' }}>
          Status: {ordObj.statusId}
        </p> */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Link passHref href={`/Orders/${ordObj.id}`}>
            <Button variant="dark" className="mr-2">
              VIEW
            </Button>
          </Link>
          <Button variant="dark" className="mr-2" href={`/Orders/Edit/${ordObj.id}`}>
            EDIT
          </Button>
          <Button variant="dark" onClick={deleteThisOrder}>
            DELETE
          </Button>
          {/* <Button onClick={addToOrder}>Add to Order</Button> */}
        </div>
      </Card.Body>
    </Card>
  );
}

OrderCard.propTypes = {
  ordObj: PropTypes.shape({
    id: PropTypes.number,
    // statusId: PropTypes.string,
    paymentId: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  productObj: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
