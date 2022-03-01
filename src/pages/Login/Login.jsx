import Titulo from '../../components/Titulo/Titulo';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <>
      <Titulo titulo="Faça seu login" />
      {/* <a href="/">Login</a> */}
      <Link to={'/cards'}>Cards</Link>
    </>
  );
}
