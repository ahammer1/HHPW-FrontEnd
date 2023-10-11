const dbUrl = 'https://localhost:7120';

const createProductOrders = (orderId, productId) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/ProductOrders/${orderId}/${productId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(orderId, productId),
  })
    .then((data) => resolve(data))
    .catch(reject);
});

export default createProductOrders;
