import React from 'react';

const Restaurant = props => {
  return (
    <li>
      <a href={props.restaurant.url}> {props.restaurant.name}</a>
      <p>The average rating is {props.restaurant.rating} out of 5 and the average cost is {props.restaurant.price} out of 4</p>
      <img src={props.restaurant.image_url} alt="restaurant" />
    </li>
  )
}

const ResultYelp = props => {
  return (

    <section>
      <h3>Results from the Yelp API</h3>
      <ul >
        {props.apiResults.yelp.map((restaurant) => {
          return <Restaurant key={`card-$indexyelp`} restaurant={restaurant} />;
        })}
      </ul>
    </section>

  )
}


export default ResultYelp;
