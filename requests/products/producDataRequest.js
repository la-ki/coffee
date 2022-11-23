import apiEndpoints from '../apiEndpoints';

export const getProductData = async (productId) => {
  const response = await fetch(
    `http://localhost:3000${apiEndpoints.products}/${productId}`
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong!');
  }

  return data;
};
