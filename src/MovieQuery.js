import React from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import Films from "./Films";

const GET_MOVIES = gql`
  query getDirectorsFilms($directorName: String) {
    listOfDirectorsFilms(directorName: $directorName) {
      original_title
      adult
      poster_path
      release_date
      tagline
      homepage
      genres {
        name
      }
    }
  }
`;

const MovieQuery = ({ directorName }) => (
  <Query
    query={GET_MOVIES}
    skip={directorName.length === ""}
    variables={{ directorName: directorName }}
  >
    {({ loading, error, data }) => {
      if (loading) return <div>Loading...</div>;
      if (error) return <div>Error :({console.error(error)}</div>;
      return <Films films={data.listOfDirectorsFilms} />;
    }}
  </Query>
);

export default MovieQuery;
