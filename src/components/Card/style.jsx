import styled, { css } from 'styled-components';

export const CardStyle = styled.div`
  width: 250px;
  padding: 10px;
  margin: 10px;

  /* background-color: blue;
   color: #fff; */

  /* ${(props) => {
    if (props.theme === 'dark') {
      return css`
        background-color: #222;
        color: #fff;
      `;
    }

    return css`
      background-color: #fff;
      color: black;
    `;
  }} */

  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.color};

  /* border-radius: ${(props) => (props.rounded ? '12px' : 0)}; */

  ${(props) => {
    if (props.rounded) {
      return css`
        border-radius: 12px;
      `;
    }

    return css`
      border-radius: 0;
    `;
  }}

  h4 {
    /* color: orange; */
  }

  p {
    color: red;
  }

  + P {
  }

  > P {
  }

  :hover {
    background-color: green;
  }
`;

export const CardTitle = styled.h4`
  /* color: green; */
  font-size: 2rem;
`;
