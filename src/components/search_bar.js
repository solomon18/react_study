import React, { Component } from 'react';
// const Component = React.Component;


// const SearchBar = () => {
//   return <input />; // React.createElement
// };

class SearchBar extends Component {
  constructor(props) {
    super(props);

    // only inside constructor
    this.state = { term: '' };
  }

  render() {
    // return <input onChange={this.onInputChange} />;
    return (
      <div>
        <input 
          value={this.state.term}
          onChange={(event) => this.setState({ term: event.target.value }) }/>
      </div>
    );
  }

  // onInputChange(event) {
  //   console.log(event.target.value);
  // }
}

export default SearchBar;