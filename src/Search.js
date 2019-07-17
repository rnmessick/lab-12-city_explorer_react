import React from 'react';

function Search(props){
  return(
    <React.Fragment>
      <input type="text" name= "search" placeholder="Enter a location here"></input>
    <button type="submit">Explore!</button>
    </React.Fragment>
  )
}

export default Search;