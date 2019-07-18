import React from 'react';
import '../App.css';
import Header from './Header.js';
import SearchForm from './Search-Form.js';
import SearchResults from './Search-Results.js';
import superagent from 'superagent';
import Map from './Map';
require('dotenv').config();



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {},
      results: {}
    }
  }

  getLocation = event => {
    event.preventDefault();
    this.setState({ location: event.target.value })
  }

  handleSearch = data => {
    data.preventDefault();

    superagent
      .get('https://city-explorer-backend.herokuapp.com/location')
      .query({ data: this.state.location })
      .then(result => {
        console.log('result: ', result);
        this.setState({ results: result.body });
      });

  }
  render() {
    return (
      <React.Fragment>
        <Header></Header>
        <SearchForm handleSearch={this.handleSearch} getLocation={this.getLocation}></SearchForm>

        <Map lat={this.state.results.latitude} lng={this.state.results.longitude} />

        <SearchResults></SearchResults>
      </React.Fragment>

    )
  }
}




export default App;
