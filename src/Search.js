import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { textValue: "" };
    this.submitFormHandler = this.submitFormHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  submitFormHandler(event) {
    event.preventDefault();
    this.props.searchReceiver(this.state.textValue);
  }

  handleChange(event) {
    this.setState({ textValue: event.target.value });
  }

  render() {
    return (
      <div>
        <h1>This is a Title</h1>
        <form onSubmit={event => this.submitFormHandler(event)}>
          <input
            onChange={this.handleChange}
            className="search__input"
            name="search"
            placeholder="Look for me"
          />
          <button className="search__btn">Go</button>
        </form>
      </div>
    );
  }
}

export default Search;
