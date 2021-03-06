import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Loader from "Components/Loader";
import Message from "Components/Message";

const Container = styled.div`
    height: calc(100vh - 50px);
    width: 100%;
    position: relative;
    padding: 50px;
`;

const Backdrop = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${props => props.bgImage});
    background-position: center center;
    background-size: cover;
    filter: blur(3px);
    opacity: 0.5;
    z-index: 0;
`;

const Content = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    position: relative;
    margin-top: 30px;
    z-index: 1;
`;

const Cover = styled.div`
    width: 40%;
    background-image: url(${props => props.bgImage});
    background-position: center center;
    background-size: cover;
    height: 75%;
    border-radius: 5px;
`;

const Data = styled.div`
    width: 70%;
    margin-left:10px;
`;

const Title = styled.h3`
    font-size: 32px;
    margin-bottom: 10px;
`;

const ItemContainer = styled.div`
    margin: 20px 0;
`;

const Item = styled.span``;

const Divider = styled.span`
    margin: 0 10px;
`;

const SAnchor = styled.a`
    margin-bottom: 10px;
`;

const Overview = styled.p`
    font-size: 12px;
    opacity: 0.7;
    line-height:  1.5;
    width: 50%;
`;

const DetailPresenter = ({result, loading, error}) => (
    <HelmetProvider>
    {loading ? (
        <>
        <Helmet>
            <title>Loading | Dsflix</title>
        </Helmet>
        <Loader/> 
        </>
    ) : (
        error ? <Message color="#e74c3c" text={error}/> : <Container>
        <Helmet>
            <title>{result.original_title ? result.original_title : result.original_name} | Dsflix</title>
        </Helmet>
        <Backdrop 
            bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
        />
        <Content>
            <Cover 
                bgImage={
                    result.poster_path 
                        ? `https://image.tmdb.org/t/p/original${result.backdrop_path}` 
                        : require("../../assets/noPosterSmall.png")
                }
            />
            <Data>
                <Title>{result.original_title ? result.original_title : result.original_name}</Title>
                <ItemContainer>
                    <Item>{result.release_date ? result.release_date.substring(0,4) : result.first_air_date.substring(0,4)}</Item>
                    <Divider>???</Divider>
                    <Item>{result.runtime ? result.runtime : result.episode_run_time[0]} min</Item>
                    <Divider>???</Divider>
                    <Item>{result.genres && result.genres.map((genre, index) => index === result.genres.length - 1 ? genre.name : `${genre.name} / `)}</Item>
                    <Divider>???</Divider>
                    {result.imdb_id 
                        ? <SAnchor href={`https://www.imdb.com/title/${result.imdb_id}`}>IMDB</SAnchor> 
                        : <SAnchor href={`${result.homepage}`}>Official Site</SAnchor>
                    }
                </ItemContainer>
                
                <Overview>{result.overview}</Overview>
            </Data>
        </Content>
    </Container>
    )}
    </HelmetProvider>
);

DetailPresenter.propTypes = {
    result:PropTypes.object,
    loading:PropTypes.bool.isRequired,
    error:PropTypes.string
}

export default DetailPresenter;