import Card from '../Card/Card';
import ClassCard from '../ClassCard/ClassCard';
import ConteudoBotoes from '../ConteudoBotoes/ConteudoBotoes';

export default function CardGroup() {
  return (
    <div className="CardGroup">
      <Card rounded titulo="teste" texto="teste 2" />
      <Card titulo="testeee" texto="teste 2222" />
      <ClassCard titulo="teste" texto="teste 2" />
      <Card titulo="teste" texto="teste 2" />
      <Card rounded titulo="teste" texto="teste 2" />
      <ConteudoBotoes rounded />
    </div>
  );
}
