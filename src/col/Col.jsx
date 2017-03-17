import styled from 'styled-components';

let columnWidth = 100 / 12;

const Col = styled.div `
    width: ${props => window.screen.width <= 480
    ? columnWidth * props.mob + '%'
    : window.screen.width >= 720 && window.screen.width < 960
        ? columnWidth * props.tab + '%'
        : window.screen.width >= 960
            ? columnWidth * props.desk + '%'
            : null};
  `;

export default Col;
