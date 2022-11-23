import apiEndpoints from '../apiEndpoints';

export const postQuestion = async (questionData) => {
  const response = await fetch(
    `http://localhost:3000${apiEndpoints.question}`,
    {
      method: 'POST',
      body: JSON.stringify(questionData),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong!');
  }

  return data;
};
