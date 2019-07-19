import React from 'react';
import '../App.css';
import Header from './Header.js';
import SearchForm from './Search-Form.js';
import superagent from 'superagent';
// TODO: Refactor results components
import ResultWeather from './weather.js';
import ResultYelp from './yelp.js';

import ResultMovie from './movies.js';
import ResultTrails from './trails.js';
require('dotenv').config();



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backEndUrl: '',
      STATIC_MAP_API_KEY: '',
      googleResults: {},
      apiResults: {
        weathers: [],
        yelp: [],
        hiking: [],
        events: [],
        movies: []
      }
    }
  }

  getApiKey = (value) => {
    this.setState({ STATIC_MAP_API_KEY: value });
    localStorage.setItem('STATIC_MAP_API_KEY', value)
  }

  getBackendUrl = (value) => {
    this.setState({ backEndUrl: value });
  }

  getAllData = async (value) => {
    const googleResults = await superagent.get(this.state.backEndUrl + '/location').query({ data: value })
    console.log('googleResults: ', googleResults);
    this.setState({ googleResults: googleResults.body });

    const weathersResults = await superagent.get(this.state.backEndUrl + '/weather').query({ data: googleResults.body });

    const moviesResults = await superagent.get(this.state.backEndUrl + '/movies').query({ data: googleResults.body });

    const trailsResults = await superagent.get(this.state.backEndUrl + '/trails').query({ data: googleResults.body });

    const yelpResults = await superagent.get(this.state.backEndUrl + '/yelp').query({ data: googleResults.body });

    this.setState({
      apiResults: {
        weathers: weathersResults.body,
        movies: moviesResults.body,
        hiking: trailsResults.body,
        yelp: yelpResults.body
      }
    })

  }
  render() {
    console.log(this.state.apiResults);
    return (
      <div className="App">
        <Header></Header>
        {!this.state.STATIC_MAP_API_KEY &&
          <SearchForm onClick={this.getApiKey} formName="Maps key"> </SearchForm>}

        <SearchForm onClick={this.getBackendUrl} formName="Backend Url"> </SearchForm>
        <SearchForm onClick={this.getAllData} formName="Search Location"> </SearchForm>

        <p>{this.state.STATIC_MAP_API_KEY}</p>

        <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${this.state.googleResults.latitude}%2c%20${this.state.googleResults.longitude}&zoom=13&size=600x300&maptype=roadmap
  &key=${this.state.STATIC_MAP_API_KEY}`} alt="map"></img>
        <section class="column-container">
          <ResultWeather apiResults={this.state.apiResults} />
          <ResultYelp apiResults={this.state.apiResults} />

          <ResultMovie apiResults={this.state.apiResults} />
          <ResultTrails apiResults={this.state.apiResults} />
        </section>
        {this.state.apiResults.yelp.map(yelp =>
          JSON.stringify(yelp)
        )}

        {this.state.apiResults.movies.map(movies =>
          JSON.stringify(movies),
        )}
        {this.state.apiResults.hiking.map(hiking =>
          JSON.stringify(hiking),
        )}
        {this.state.apiResults.weathers.map(weathers =>
          JSON.stringify(weathers)
        )}


      </div>

    );
  }

}




export default App;
