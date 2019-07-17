import React from 'react';

function ResultMovieDB(props){
  return(
    <React.Fragment>
          
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
    </React.Fragment>
  )
}

export default ResultMovieDB;