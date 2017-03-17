import React, {Component} from 'react';
import styled from 'styled-components';

const Header = styled.div `
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightgrey;
  background-size: cover;
  background-position: center;
  `;

const Title = styled.div `
  font-size: 60px;
  font-familty: sans-serif;
  color: white;
    `;



const Jumbotron = ({title, height, fullscreen, image}) =>
    (
      <Header style={fullscreen ? {height:'100vh'} : {height:height}, image ? {backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`} : null}>
            <Title>{title}</Title>
      </Header>
    );

export default Jumbotron;
