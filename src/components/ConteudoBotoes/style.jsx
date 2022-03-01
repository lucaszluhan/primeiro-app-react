import styled, { css } from 'styled-components';
import { CardStyle } from '../Card/style';

export const ConteudoBotoesStyled = styled(CardStyle)`
  width: 200px;
  :hover {
    background-color: orange;
  }
`;

export const ButtonStyled = styled.button`
  background-color: red;
  ${(props) => {
    if (props.green) {
      return css`
        background-color: green;
      `;
    }
  }}
`;
