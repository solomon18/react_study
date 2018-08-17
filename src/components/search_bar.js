import React, { Component } from 'react';
// const Component = React.Component;


// const SearchBar = () => {
//   return <input />; // React.createElement
// };

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    // return <input onChange={this.onInputChange} />;
    return <input onChange={(event) => console.log(event.target.value) }/>;
  }

  // onInputChange(event) {
  //   console.log(event.target.value);
  // }
}

export default SearchBar;