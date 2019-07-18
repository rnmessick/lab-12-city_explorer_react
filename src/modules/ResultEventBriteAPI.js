import React from 'react';

function ResultEventBrite(props){
  return(
    <React.Fragment>
        <section>
    <h3>Results from the Eventbrite API</h3>
    <ul>
    <li>"link": "https://www.eventbrite.com/seattlejshackers/events/253823797/",
    "name": "SeattleJS Hackers",
    "event_date": "Wed Apr 23 2014",
    "summary": "Come and meet other JS hackers at the Code Fellows campus!"</li>
    <li>"link": "https://www.eventbrite.com/Angular-Seattle/events/253595182/",
    "name": "Angular Seattle",
    "event_date": "Tue May 09 2017",
    "summary": "Want to better understand the hottest TypeScript framework?"</li>
    </ul>
    </section>
    </React.Fragment>
  )
}

export default ResultEventBrite;