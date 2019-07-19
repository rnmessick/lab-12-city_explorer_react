import React from 'react';

const Trails = props => {
  return (

    <li>
      <p>Hike Name: <a href={props.hike.url}>{props.hike.name}</a>, Location: {props.hike.location}, Distance: {props.hike.length} miles</p>
      <p>On {props.hike.condition_date} at {props.hike.condition_time}, trail conditions were reported as: {props.hike.condition}</p>
      <p>This trail has a rating of {props.hike.stars} stars (out of {props.hike.star_votes} votes)</p>
      <p>{props.hike.summary}</p>
    </li>
  )
}

const ResultTrails = props => {
  return (

    <section>
      <h3>Results from the Hiking API</h3>
      <ul >
        {props.apiResults.hiking.map((hike) => {
          return <Trails key={`card-$indexTrails`} hike={hike} />;
        })}
      </ul>
    </section>

  )
}


export default ResultTrails;
