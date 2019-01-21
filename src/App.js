import React from "react";
import Films from "./Films";
import MovieQuery from "./MovieQuery";
import Search from "./Search";

// import { gql } from "apollo-boost";
// import { Query } from "react-apollo";

// const GET_MOVIES = gql`
//   query getDirectorsFilms($directorName: String) {
//     listOfDirectorsFilms(directorName: $directorName) {
//       original_title
//       adult
//       tagline
//       homepage
//       genres {
//         name
//       }
//     }
//   }
// `;

// const Movie = ({ directorName }) => (
//   <Query
//     query={GET_MOVIES}
//     skip={directorName.length === ""}
//     variables={{ directorName: directorName }}
//   >
//     {({ loading, error, data }) => {
//       if (loading) return <div>Loading...</div>;
//       if (error) return <div>Error :({console.error(error)}</div>;
//       return <Films films={data.listOfDirectorsFilms} />;
//     }}
//   </Query>
// );

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.searchReceiver = this.searchReceiver.bind(this);
    this.state = {
      directorName: "attenborough"
    };
  }

  searchReceiver(filmSearchQuery) {
    this.setState({ directorName: filmSearchQuery });
  }

  render() {
    console.log("hi");
    return (
      <div>
        <Search searchReceiver={this.searchReceiver} />
        <MovieQuery directorName={this.state.directorName} />
      </div>
    );
  }
}
