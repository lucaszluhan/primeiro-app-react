import { CardStyle, CardTitle } from './style';
import ConteudoBotoes from '../ConteudoBotoes/ConteudoBotoes';
import { Button } from '@mui/material';
import styled from '@mui/styled-engine';

const MyButton = styled(Button)(() => ({
  backgroundColor: 'orange',
}));

export default function Card(props) {
  return (
    // <div className="Card">
    //    <h4>{props.titulo}</h4>
    //    <p>{props.texto}</p>
    // </div>

    <CardStyle rounded={props.rounded}>
      <CardTitle>{props.titulo}</CardTitle>
      <ConteudoBotoes>{props.texto}</ConteudoBotoes>
      <MyButton variant="contained">Clique Aqui</MyButton>
    </CardStyle>
  );
}

// export { Card };
