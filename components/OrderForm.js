import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import { createOrder, updateOrder } from '../api/OrderData';

const initialState = {
  name: '',
};

function OrderForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (obj.id) {
      setFormInput(obj);
    }
  }, [obj]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.id) {
      updateOrder(formInput)
        .then(() => router.push('/orders'));
    } else {
      const payload = { ...formInput, uid: user.uid };
      createOrder(payload).then(({ name }) => {
        const patchPayload = { id: name };
        updateOrder(patchPayload).then(() => {
          router.push('/orders');
        });
      });
    }
  };

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <Form onSubmit={handleSubmit}>
      <h2 className="text-white mt-5">{obj.id ? 'Update' : 'Create'} Order</h2>

      {/* TITLE INPUT  */}
      <FloatingLabel controlId="floatingInput1" label="Order Name" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter a Name"
          name="name"
          value={formInput.name}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* SUBMIT BUTTON  */}
      <Button type="submit">{obj.id ? 'Update' : 'Create'} Order</Button>
    </Form>
  );
}

OrderForm.propTypes = {
  obj: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
  }),
};

OrderForm.defaultProps = {
  obj: initialState,
};

export default OrderForm;
