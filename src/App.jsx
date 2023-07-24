import { useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import { useEffect } from "react";
import Header from "./components/Card/header";
import Tag from "./components/Card/Tag";

function App() {
  const [itens, setItens] = useState([])

  async function carregarDadosApi() {
    const apiUrl = "https://ocean-api-itens.onrender.com/itens";
  
    const response = await fetch(apiUrl);
    const body = await response.json();

    setItens(body)
  }

  useEffect(function() {carregarDadosApi()}, []) //Protege o array e ele será renderizado uma única vez.

  return (
    <>
      <div className="cards-list">
        <Header />
        {itens.map(function(item, index) {
          return <Card key={index} item={item} list={itens} />
        })}
        
      </div>
    </>
  );
}

export default App;