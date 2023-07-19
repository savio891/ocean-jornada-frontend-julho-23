import "./Card.css";

export default function Card(props) {//Lê os atributos que estão no componente Card.
  //console.log(props);

  const item = props.item; //corresponde ao atributo que armazena as variáveis item1 e item2.

  // console.log(item);

  return (
    <div className="card">
      <h1>{item.nome}</h1>
      <img src={item.imagem} />
    </div>
  );
}