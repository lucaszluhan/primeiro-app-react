import CardGroup from '../../components/CardGroup/CardGroup';
import Titulo from '../../components/Titulo/Titulo';
import { Link } from 'react-router-dom';

export default function Cards() {
  return (
    <>
      <Titulo titulo="Aula 01 - React" texto="teste" />
      <CardGroup />

      <Link to={'/'}>Login</Link>
    </>
  );
}
