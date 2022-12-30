export const API_KEY = "92e200cbc8af137b58e63c288b67f9c0";
export const TMBD_BASE_URL = "https://api.themoviedb.org/3";

const requests = {
  requestPopular: `${TMBD_BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  requestTopRated: `${TMBD_BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  requestTrending: `${TMBD_BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  requestNowPlaying: `${TMBD_BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
  requestUpcoming: `${TMBD_BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
};

export default requests;
