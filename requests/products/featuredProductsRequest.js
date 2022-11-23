import apiEndpoints from '../apiEndpoints';

export const getFeaturedProducts = async () => {
  const response = await fetch(
    `http://localhost:3000${apiEndpoints.featuredProducts}`
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong!');
  }

  return data;
};
