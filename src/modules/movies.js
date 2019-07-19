import React from 'react';

const Movie = props => {
  return (
    <li>
      <p><span>{props.film.title}</span> was relased on {props.film.released_on}. Out of {props.film.total_votes} total votes, {props.film.title} has an average vote of {props.film.average_votes} and a popularity score of {props.film.popularity}.</p>
      <img src={props.film.image} alt="film" />
      <p>{props.film.overview}</p>
    </li>
  )
}

const ResultMovie = props => {
  return (

    <section>
      <h3>Results from the Movie Database API</h3>
      <ul >
        {props.apiResults.movies.map((film) => {
          return <Movie key={`card-$indexmovies`} film={film} />;
        })}
      </ul>
    </section>

  )
}


export default ResultMovie;
