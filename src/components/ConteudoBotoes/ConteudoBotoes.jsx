import { ButtonStyled, ConteudoBotoesStyled } from './style';

export default function ConteudoBotoes() {
  return (
    <ConteudoBotoesStyled>
      <p>Conteudo da Noticia</p>
      <ButtonStyled>Comentarios</ButtonStyled>
      <ButtonStyled green>Noticia Completa</ButtonStyled>
    </ConteudoBotoesStyled>
  );
}
