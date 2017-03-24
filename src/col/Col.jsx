import styled from 'styled-components';

let columnWidth = 100 / 12;

const Col = styled.div `
    @media only screen and (max-width: 480px) {
      width: ${props => props.mob ? columnWidth * props.mob + '%' : null};
    }
    @media only screen and (min-width: 720px) {
      width: ${props => props.tab ? columnWidth * props.tab + '%' : null};
    }
    @media only screen and (min-width: 960px) {
      width: ${props => props.desk ? columnWidth * props.desk + '%' : null};
    }
    display: flex;
    justify-content: ${props => props.justify ? props.justify : null};
    align-items: ${props => props.align ? 'center' : null};
  `;

export default Col;
