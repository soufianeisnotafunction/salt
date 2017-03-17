import styled from 'styled-components';

const Row = styled.div `
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${props => props.column ? 'column' : 'row'};
  `;

export default Row;
