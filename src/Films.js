import React from "react";

class Films extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.films);
    return (
      <ul>
        {this.props.films.map(film => (
          <li key={film.original_title}>{film.original_title}</li>
        ))}
      </ul>
    );
  }
}

export default Films;
