import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const URL = "https://image.tmdb.org/t/p/w300";
  console.log(id);

  
  //updating
  useEffect(() => {
    //grab movie info 
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=efba52d6b226548f6646bdb8a19df4e5`
      )
      // once info is get, save the data
      .then((data) => {
        setMovie(data.data);
        console.log(data.data);
      });
  }, [id]);
  return (
    <Container>
      {/*  image */}
      {/* if movie exist */}
      {movie && (
        <>
          <Background>
            <img src={`${URL}/${movie.backdrop_path}`} alt={movie.title} />
          </Background>

          <ImageTitle>
            <img src={`${URL}/${movie.poster_path}`} alt={movie.subTitle} />
          </ImageTitle>

          <Controls>
            {/* buttons */}
            <PlayButton>
              <img src="/images/play-icon-black.png" alt="" />
              <span>PLAY</span>
            </PlayButton>

            <TrailerButton>
              <img src="/images/play-icon-white.png" alt="" />
              <span>TRAILER</span>
            </TrailerButton>

            <AddButton>
              <span>+</span>
            </AddButton>

            <GroupWatchButton>
              <img src="/images/group-icon.png" alt="" />
            </GroupWatchButton>
          </Controls>

          <SubTitle>{movie.original_title}</SubTitle>
          
          <Description>{movie.overview}</Description>
        </>
      )}
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const ImageTitle = styled.div`
  height: 30vh;
  width: 35vh;
  min-height: 170px;
  min-width: 200px;
  margin-top: 20px;
  margin-bottom: 20px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;

const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  padding: 0 24px;
  display: flex;
  margin-right: 22px;
  align-items: center;
  height: 56px;
  background: rgb(249, 249, 249);
  border: none;
  letter-spacing: 1.8px;
  cursor: pointer;

  &:hover {
    background: rgb(198, 198, 198);
  }
`;
//play button and trailer button has same css except for bg color
const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb (249, 249, 249);
  color: rgb(2249, 249, 249);
`;
const AddButton = styled.button`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-right: 20px;
  background: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  span {
    font-size: 30px;
    color: white;
  }
`;
const GroupWatchButton = styled(AddButton)`
  background: rgb(0, 0, 0);
`;
const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  color: rgb(249, 249, 249);
  max-width: 760px;
`;


