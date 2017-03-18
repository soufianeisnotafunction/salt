import React from 'react';
import styled from 'styled-components';
import Row from "../row/Row";
import Container from "../container/Container";
import Col from "../col/Col";

const A = styled.a`
  text-decoration: none;
  color: white;
  margin: 0 10px;
`;

const Navbar = ({logo}) => (
        <Container>
            <Row>
                <Col desk={6} justify='flex-start'>
                  <A href="#">Logo</A>
                </Col>
                <Col desk={6} justify='flex-end'>
                  <A href="#">Home</A>
                  <A href="#">About</A>
                  <A href="#">Contact</A>
                </Col>
            </Row>
        </Container>
);

export default Navbar;
