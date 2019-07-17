import React from 'react';

function ResultDarkSky(props){
  return(
    <React.Fragment>
    <section><h3>Results from the Dark Sky API</h3>
    <ul><li>"forecast": "Partly cloudy until afternoon.", "time": "Mon Jan 01 2001"</li> 
    <li>"forecast": "Mostly cloudy in the morning.",
    "time": "Tue Jan 02 2001"</li>
    </ul>
    </section>
    </React.Fragment>
  )
}

export default ResultDarkSky;