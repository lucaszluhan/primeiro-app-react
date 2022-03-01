import React from 'react';
import styled from 'styled-components';
import { CardStyle } from '../Card/style';

const ClassCardStyle = styled(CardStyle)`
  background-color: silver;

  :hover {
    background-color: red;
  }
`;

export default class ClassCard extends React.Component {
  render() {
    return (
      <ClassCardStyle>
        <h4>Titulo Card</h4>
        <p>Corpo do card</p>
      </ClassCardStyle>
    );
  }
}
