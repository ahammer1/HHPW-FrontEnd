import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import Link from 'next/link';

export default function OrderCard({ ordObj }) {
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
};
