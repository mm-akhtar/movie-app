import { API_KEY } from '@env';
console.log(API_KEY)
const fetchById = (id: string) => {
    return `movie/${id}?api_key=${API_KEY}&append_to_response=videos`
}
const feRequests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchScifiMovies: `discover/movie?api_key=${API_KEY}&with_genres=878`,
    fetchRomanceMovies: `discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentries: `discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchHindiMovies: `/discover/movie?api_key=${API_KEY}&region=IN&with_release_type=3|2&with_original_language=hi`,
    fetchUpcomingMovies: `/movie/upcoming?api_key=${API_KEY}&language=en-US`,
    fetchActionShows: `discover/tv?api_key=${API_KEY}&with_genres=10759`,
    fetchAnimationShows: `discover/tv?api_key=${API_KEY}&with_genres=16`,
    fetchComedyShows: `discover/tv?api_key=${API_KEY}&with_genres=35`,
    fetchCrimeShows: `discover/tv?api_key=${API_KEY}&with_genres=80`,
    fetchScifiShows: `discover/tv?api_key=${API_KEY}&with_genres=10765`,
    fetchById: fetchById
};

export default feRequests;