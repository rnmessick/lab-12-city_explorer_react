import React from 'react';
import Search from './Search.js';
import Map from './Map.js';
import Results from './Results.js';


function Main(props){
    return(
      <React.Fragment>
        <Search></Search>
        <Map></Map>
        <Results></Results>

      </React.Fragment>
    )
  }

  export default Main;