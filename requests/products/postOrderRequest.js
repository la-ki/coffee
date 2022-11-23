import apiEndpoints from '../apiEndpoints';

export const postOrder = async (orderData) => {
  const response = await fetch(`http://localhost:3000${apiEndpoints.order}`, {
    method: 'POST',
    body: JSON.stringify(orderData),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong!');
  }

  return data;
};
