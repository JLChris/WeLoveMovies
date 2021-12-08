# WeLoveMovies

API for a fictional movie website.

Run `npm start` to start the server on `http://localhost:5000`

***

## Routes

`/movies`

- GET: Returns a list of all the movies in the database. 

- Adding the `?is_showing=true` query parameter will only return movies currently showing.

`/movies/:movie_id`

- GET: Returns a single movie with matching movie_id.

`/movies/:movie_id/theaters`

- GET: Returns all the theaters where specified  movie is playing.

`/movies/:movie_id/reviews`

- GET: Returns all reviews for specified movie.

`/reviews/:review_id`

- PUT: Updates the info of a specific review.

- DELETE: Removes specified review.

`/theaters`

- GET: Returns all theaters and every movie playing at each theater.

***

Built with Express.js and Knex.js