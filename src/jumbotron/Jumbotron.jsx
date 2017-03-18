import React from 'react';
import styled from 'styled-components';

const Header = styled.div `
width: 100%;
background-color: #6FC6FF;
background-image: ${props => props.image
  ? `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${props.image})`
  : null}
  background-size: cover;
  background-position: center;
  `;

  const Title = styled.div `
  width: 100%;
  font-size: 48px;
  font-familty: sans-serif;
  color: white;
  text-align: center;
  `;

  const SubTitle = styled.div `
  width: 100%;
  font-size: 30px;
  font-familty: sans-serif;
  font-weight: lighter;
  color: white;
  text-align: center;
  margin-bottom: 4%;
  `;

  const NavbarContainer =  styled.div `
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  `;

  const TitleContainer =  styled.div `
  width: 100%;
  height: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  `;

  // , image ? {backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`

  const Jumbotron = ({title, subtitle, height, fullscreen, image, navbar}) => (
    <Header style={fullscreen ? {height: '100vh'} : {height: height}} image={image}>
      <NavbarContainer>
        {navbar}
      </NavbarContainer>
      <TitleContainer>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
      </TitleContainer>
    </Header>
  );

  export default Jumbotron;
