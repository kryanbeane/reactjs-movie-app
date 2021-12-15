# Assignment 1 - ReactJS app.

Name: Bryan Keane

## Overview.

React project for Web App Development 2 which clones popular movie websites like Netflix, IMDB, etc.

### Features.
 
+ Token API to store user tokens and allow them to log in
+ Favorite movies page
+ Must Watch movies page
+ Must Watch movies page
+ Trending movies page
+ Now Playing movies page
+ Filter movies by genre
+ Search movies by name

## Setup requirements.

```
$ npm install
```

## API endpoints.

+ Get similar movies - https://api.themoviedb.org/3/movie/<id>/similar
+ Get movies now paying in cinemas - https://api.themoviedb.org/3/movie/now_playing
+ Get trending movies - https://api.themoviedb.org/3/trending/movie/day

## App Design.

### Component catalogue.

![image](https://user-images.githubusercontent.com/58252571/146228313-c9ed3231-afbd-4546-be17-d2fad0e7a380.png)
![image](https://user-images.githubusercontent.com/58252571/146228370-e9b69a88-44c9-468d-926c-de326b81c63f.png)
![image](https://user-images.githubusercontent.com/58252571/146228398-dd23923f-afd5-4d12-a79d-554764bd3e3c.png)
![image](https://user-images.githubusercontent.com/58252571/146228704-2cd738e6-1aca-45a5-a3ac-6f54a5c2814c.png)


### Routing.

+ /signin - Sign in page
+ /movies/trending - Trending movies page
+ /movies/:id/similar - Similar movies page
+ /movies/now-playing - Movies in cinemas now page
