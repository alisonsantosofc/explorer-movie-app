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
        `/trending/movie/week?language=pt-BR&api_key=${apiKey}&page=1`
      ),
    },
    {
      slug: 'currentyear',
      title: 'Janeiro/2022',
      items: await basicFetch(
        `/discover/movie?language=pt-BR&api_key=${apiKey}&release_date.lte=2022&sort_by=popularity.desc&page=2`
      ),
    },
    {
      slug: 'lastyear',
      title: 'Dezembro/2021',
      items: await basicFetch(
        `/discover/movie?language=pt-BR&api_key=${apiKey}&release_date.lte=2021&sort_by=popularity.desc&page=1`
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
