require("isomorphic-fetch");
require("dotenv").config();

const apikey = `api_key=${process.env.API_KEY}&language=en-US`;

const baeUrl = `https://api.themoviedb.org/3/`;

const fetchMoviePerson = directorName =>
  fetch(`${baeUrl}search/person?query=${directorName}&${apikey}`)
    .then(res => res.json())
    .then(data => data.results[0].id);

const fetchDirectorsFilms = directorID =>
  fetch(`${baeUrl}person/${directorID}/movie_credits?${apikey}`)
    .then(res => res.json())
    .then(data => data.crew.filter(({ job }) => job === "Director"));

const fetchFilmByID = filmID =>
  fetch(`${baeUrl}movie/${filmID}?${apikey}`).then(res => res.json());

const fetchTrailers = filmID =>
  fetch(`${baeUrl}movie/${filmID.imdb_id}/videos?${apikey}`).then(res =>
    res.json()
  );

async function listOfDirectorsFilms(directorName) {
  const directorsID = await fetchMoviePerson(directorName);
  const directorFilms = await fetchDirectorsFilms(directorsID);
  return Promise.all(
    await directorFilms.map(
      async ({ id }) => (await fetchFilmByID(id)) 
    )

    // && fetchTrailers(id)
  );
}

module.exports = {
  listOfDirectorsFilms
};
