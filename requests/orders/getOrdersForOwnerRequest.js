import apiEndpoints from '../apiEndpoints';

export const getOrdersForOwner = async (id) => {
  const response = await fetch(
    `http://localhost:3000${apiEndpoints.order}?ownerID=${id}`
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong!');
  }

  return data;
};
