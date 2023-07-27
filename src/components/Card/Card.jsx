import "./Card.css";
import Tag from "./Tag";

export default function Card(props) {//Lê os atributos que estão no componente Card.
  
  const item = props.item; //lê os dados que estão dentro do atributo "item" na tag Card (<Card key={index} item={item})

  return (
    <div className="card">
      <h1>{item.name}</h1>
      <img src="#" />
    </div> 
  );
}