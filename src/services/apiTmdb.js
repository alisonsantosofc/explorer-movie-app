const baseUrl = 'https://api.themoviedb.org/3';
const apiKey = '0566763322f997e45d892d670c45d60c';

const basicFetch = async (endpoint) => {
  const request = await fetch(`${baseUrl}${endpoint}`);
  const response = await request.text();
  const json = await JSON.parse(response);

  return json;
};

export const getMovieList = async () => {
  return [
    {
      slug: 'trending',
      title: 'Em cartaz',
      items: await basicFetch(
        `/trending/movie/week?language=pt-BR&api_key=${apiKey}`
      ),
    },
    {
      slug: 'toprated',
      title: 'Mais Votados',
      items: await basicFetch(
        `/movie/top_rated?language=pt-BR&api_key=${apiKey}`
      ),
    },
    {
      slug: 'popular',
      title: 'Popular',
      items: await basicFetch(
        `/movie/popular?language=pt-BR&api_key=${apiKey}`
      ),
    },
  ];
};

export const getMovieInfo = async (movieId) => {
  const info = await basicFetch(
    `/movie/${movieId}?language=pt-BR&api_key=${apiKey}`
  );
  return info;
};

export const getMovieVideo = async (movieId) => {
  const info = await basicFetch(
    `/movie/${movieId}/videos?language=pt-BR&api_key=${apiKey}`
  );
  return info;
};