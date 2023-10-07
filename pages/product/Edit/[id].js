import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleProduct } from '../../../api/productData';
import ProductForm from '../../../components/ProductForm';

export default function EditProduct() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();

  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleProduct(firebaseKey).then(setEditItem);
  }, [firebaseKey]);

  return (<ProductForm obj={editItem} />);
}
