import styled from "styled-components";
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { API_KEY } from "../App";

const Container = styled.div`
display: flex;
flex-direction: row;
padding: 20px 30px;
justify-content: centre;
border-bottom: 1px solid lightgray;
`;
const CoverImage = styled.img`
  height: 352px;
  object-fit: cover;
`;
const InfoColumn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const MovieName = styled.span`
  font-size: 18px
  font-weight: 600;
  color: black;
  margin: 15px 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
const MovieInfo = styled.span`
font-size: 16px;
font-weight: 500;
color: black;
white-space: nowrap;
overflow: hidden;
text-transform: capitalize;
text-overflow: ellipsis;
& span {
    opacity: 0.5;
}
`;
const Close = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: black;
  background: lightgray;
  height: fit-content;
  padding: 8px;
  border-radius: 50%;
  cursor: pointer;
  opacity: 0.8;
`;
const MovieInfoComponent = (props) => {
    const { selectedMovie } = props;
    const [movieInfo, setMovieInfo] = useState();
    useEffect(() => {
        axios.get(`https://www.omdbapi.com/?i=${selectedMovie}&apikey=${API_KEY}`,
        ).then((response) => setMovieInfo(response.data));
    }, [selectedMovie]);
    return (
        <Container>
            {movieInfo ? (
                <>
                    <CoverImage src={movieInfo?.Poster}>Neha</CoverImage>
                    <InfoColumn>
                        <MovieName>
                            {movieInfo?.Type}: {movieInfo?.Title}
                        </MovieName>
                        <MovieInfo>
                            IMDB Rating : <span>{movieInfo?.imdbRating}</span>
                        </MovieInfo>
                        <MovieInfo>
                            Year: <span>{movieInfo?.Year}</span>
                        </MovieInfo>
                        <MovieInfo>
                            Language: <span>{movieInfo?.Language}</span>
                        </MovieInfo>
                        <MovieInfo>
                            Rated: <span>{movieInfo?.Rated}</span>
                        </MovieInfo>
                        <MovieInfo>
                            Released: <span>{movieInfo?.Released}</span>
                        </MovieInfo>
                        <MovieInfo>
                            Runtime: <span>{movieInfo?.Runtime}</span>
                        </MovieInfo>
                        <MovieInfo>
                            Genre: <span>{movieInfo?.Genre}</span>
                        </MovieInfo>
                        <MovieInfo>
                            Director: <span>{movieInfo?.Director}</span>
                        </MovieInfo>
                        <MovieInfo>
                            Actors: <span>{movieInfo?.Actors}</span>
                        </MovieInfo>
                        <MovieInfo>
                            Plot: <span>{movieInfo?.Plot}</span>
                        </MovieInfo>
                    </InfoColumn>
                    <Close onClick={() => props.onMovieSelect()}>X</Close>
                </>
            ) : (
                "Loading..."
            )}
        </Container>
    );
};

export default MovieInfoComponent;
