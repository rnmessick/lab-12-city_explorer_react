import React from 'react';

const Forecast = props => {
  return (
    <li>
      <p>The forecast for {props.weather.time} is {props.weather.forecast}</p>
    </li>
  )
}

const ResultWeather = props => {
  return (

    <section>
      <h3>Results from the Dark Sky API</h3>
      <ul >
        {props.apiResults.weathers.map((weather) => {
          return <Forecast key={`card-$index`} weather={weather} />;
        })}
      </ul>
    </section>

  )
}


export default ResultWeather;
