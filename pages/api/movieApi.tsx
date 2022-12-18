import axios from 'axios';

export const getRecentMovies = async ({ pageParam = 1 }) => {
  const { data } = await axios.get(`https://yts.mx/api/v2/list_movies.json?page=${pageParam}`);
  return data.data;
};
