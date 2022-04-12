import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";


function Movies() {
  //sets the initial state
  const [movies, setMovies] = useState([]);
  const URL = "https://image.tmdb.org/t/p/w300";

  useEffect(() => {
    //fetching api with axios
    axios
      .get(
        "https://api.themoviedb.org/3/trending/all/day?api_key=efba52d6b226548f6646bdb8a19df4e5"
      )
      .then((data) => {
        setMovies(data.data.results);
      });
  });
  return (
    <Container>
        <h4>
            Recommended for You
        </h4>
        <Content>
             {//maps the movie details if movies are present
        movies &&
        movies.map((movie) => (
          <Wrap key={movie.id}>

            {/* when any movie is clicked it returns to details page */}
            
            <Link to={`/detail/${movie.id}`}>
              <img src={`${URL}/${movie.poster_path}`} alt={movie.title} />
            </Link>
          </Wrap>
        ))}
        </Content>

    </Container>
  )
}

export default Movies

const Container = styled.div` 

`

const Content = styled.div`
display: grid;
grid-gap: 25px;
grid-template-columns: repeat(4, minmax(0,1fr));
`

const Wrap = styled.div`
border-radius: 10px;
cursor: pointer;
over-flow: hidden;
border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 /73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;


img{
    width:100%;
    height: 100%;
    object-fit: cover;
    
}

&:hover {
    transform: scale(1.05);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 /72%) 0px 30px 22px -10px;
    border-color: rgba(249,249,249,0.8);
}

`

