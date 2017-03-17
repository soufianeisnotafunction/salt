import styled from 'styled-components';

const Container = styled.div `
  width: ${props => window.screen.width <= 480
    ? 100 + '%'
    : window.screen.width >= 720
        ? 90 + '%'
        : window.screen.width >= 960
            ? 80 + '%'
            : null};
  margin: 0 auto;
  `;

export default Container;
