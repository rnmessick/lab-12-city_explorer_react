import React from 'react';

function Results(props){
  return(
    <React.Fragment>
    <section><h3>Results from the Dark Sky API</h3>
    <ul><li>"forecast": "Partly cloudy until afternoon.", "time": "Mon Jan 01 2001"</li> 
    <li>"forecast": "Mostly cloudy in the morning.",
    "time": "Tue Jan 02 2001"</li>
    </ul>
    </section>

  <section><h3>Results from the Yelp API</h3><ul><li>"name": "Pike Place Chowder",
    "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/ijju-wYoRAxWjHPTCxyQGQ/o.jpg",
    "price": "$$   ",
    "rating": "4.5",
    "url": "https://www.yelp.com/biz/pike-place-chowder-seattle?adjust_creative=uK0rfzqjBmWNj6-d3ujNVA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=uK0rfzqjBmWNj6-d3ujNVA"</li>
    <li>
    "name": "Umi Sake House",
    "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/c-XwgpadB530bjPUAL7oFw/o.jpg",
    "price": "$$   ",
    "rating": "4.0",
    "url": "https://www.yelp.com/biz/umi-sake-house-seattle?adjust_creative=uK0rfzqjBmWNj6-d3ujNVA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=uK0rfzqjBmWNj6-d3ujNVA"</li>
    </ul>
    </section>
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
  <section><h3>Results from The Movie DB API</h3><ul><li>"title": "Sleepless in Seattle",
    "overview": "A young boy who tries to set his dad up on a date after the death of his mother. He calls into a radio station to talk about his dad’s loneliness which soon leads the dad into meeting a Journalist Annie who flies to Seattle to write a story about the boy and his dad. Yet Annie ends up with more than just a story in this popular romantic comedy.",
    "average_votes": "6.60",
    "total_votes": "881",
    "image_url": "https://image.tmdb.org/t/p/w200_and_h300_bestv2/afkYP15OeUOD0tFEmj6VvejuOcz.jpg",
    "popularity": "8.2340",
    "released_on": "1993-06-24"</li>
  
    <li>"title": "Love Happens",
    "overview": "Dr. Burke Ryan is a successful self-help author and motivational speaker with a secret. While he helps thousands of people cope with tragedy and personal loss, he secretly is unable to overcome the death of his late wife. It's not until Burke meets a fiercely independent florist named Eloise that he is forced to face his past and overcome his demons.",
    "average_votes": "5.80",
    "total_votes": "282",
    "image_url": "https://image.tmdb.org/t/p/w200_and_h300_bestv2/pN51u0l8oSEsxAYiHUzzbMrMXH7.jpg",
    "popularity": "15.7500",
    "released_on": "2009-09-18"</li>
    </ul>
    </section>
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

export default Results;