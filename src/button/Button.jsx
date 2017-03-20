import styled from 'styled-components';

const Button = styled.a`
  /* Adapt the colors based on primary prop */
  background-color: #55acee;
  box-shadow: ${props => props.flat ? null :'0px 5px 0px 0px #3C93D5'};

  border-radius: 5px;
  padding: 12px 25px;
  font-size: 22px;
  text-decoration: none;
  margin: 20px;
  color: #fff;
  position: relative;
  display: inline-block;

  &:hover {
    background-color: #6FC6FF;
  };

  &:active {
    transform: ${props => props.flat ? null : 'translate(0px, 5px)'};
    -webkit-transform: ${props => props.flat ? null : 'translate(0px, 5px)'};
    box-shadow:${props => props.flat ? null : '0px 1px 0px 0px #3C93D5'} ;
  }

`;

export default Button;
