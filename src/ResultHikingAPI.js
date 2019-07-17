import React from 'react';

function ResultHiking(props){
  return(
    <React.Fragment>
      <section><h3>Results from the Hiking Project API</h3>
        <ul>
          <li> "name": "Rattlesnake Ledge",
          "location": "Riverbend, Washington",
          "length": "4.3",
          "stars": "4.4",
          "star_votes": "84",
          "summary": "An extremely popular out-and-back hike to the viewpoint on Rattlesnake Ledge.",
          "trail_url": "https://www.hikingproject.com/trail/7021679/rattlesnake-ledge",
          "conditions": "Dry: The trail is clearly marked and well maintained.",
          "condition_date": "2018-07-21",
          "condition_time": "0:00:00 "</li>
          <li>
          "name": "Mt. Si",
          "location": "Tanner, Washington",
          "length": "6.6",
          "stars": "4.4",
          "star_votes": "72",
          "summary": "A steep, well-maintained trail takes you atop Mt. Si with outrageous views of Puget Sound.",
          "trail_url": "https://www.hikingproject.com/trail/7001016/mt-si",
          "conditions": "Dry",
          "condition_date": "2018-07-22",
          "condition_time": "0:17:22 "</li>
        </ul>
      </section>
    </React.Fragment>
  )
}

export default ResultHiking;