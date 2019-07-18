import React from 'react';
import ResultDarkSky from './ResultDarkSkyAPI.js';
import ResultYelp from './ResultYelpAPI.js';
import ResultEventBrite from './ResultEventBriteAPI.js';
import ResultMovieDB from './ResultMovieDBAPI.js';
import ResultHiking from './ResultHikingAPI.js';

function Results(props){
  return(
    <React.Fragment>
      <ResultDarkSky></ResultDarkSky>
      <ResultYelp></ResultYelp>
      <ResultEventBrite></ResultEventBrite>
      <ResultMovieDB></ResultMovieDB>
      <ResultHiking></ResultHiking>


    </React.Fragment>
  )
}

export default Results;