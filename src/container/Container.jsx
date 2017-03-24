import styled from 'styled-components';

const Container = styled.div `
  width: ${props => window.screen.width <= 480
    ? 100 + '%'
    : window.screen.width >= 720
        ? 70 + '%'
        : window.screen.width >= 960
            ? 50 + '%'
            : null};
  margin: 0 auto;
  `;

export default Container;
