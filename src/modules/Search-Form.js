import React from 'react';

const SearchForm = (props) => {
  return (
    <React.Fragment>
      <input onChange={props.getLocation} placeholder="Enter a location here"></input>
      <button onClick={props.handleSearch} >Explore!</button>
    </React.Fragment>
  )
}

export default SearchForm;