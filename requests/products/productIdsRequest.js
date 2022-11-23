import apiEndpoints from '../apiEndpoints';

export const getProductsId = async () => {
  const response = await fetch(
    `http://localhost:3000${apiEndpoints.productsIds}`
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong!');
  }

  return data;
};
