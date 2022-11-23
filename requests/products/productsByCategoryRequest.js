import apiEndpoints from '../apiEndpoints';

export const getProductsByCategory = async (categoryName) => {
  const response = await fetch(
    `http://localhost:3000${apiEndpoints.productsByCategory}${categoryName}`
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong!');
  }

  return data;
};
