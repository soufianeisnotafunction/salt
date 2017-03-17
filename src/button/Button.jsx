import React from 'react';
import styled from 'styled-components';

// Create a <Title> react component that renders an <h1> which is
// centered, palevioletred and sized at 1.5em

let columns = 12;
let column - width : 100 / columns;

while (columns > 0) {
    let desk = `.desk-${columns}`;
    let tab = `.tab-${columns}`;
    let mob = `.mob-${columns}`;

    columns--;
}

const Col = styled.div `
  @media only screen and (min-width: 480px) {
    ${mob}
  }
`;
