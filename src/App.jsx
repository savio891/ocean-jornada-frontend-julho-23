import { useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import { useEffect } from "react";
import Header from "./components/Card/header";
import Tag from "./components/Card/Tag";

function App() {
  const [itens, setItens] = useState([])

  async function carregarDadosApi() {
    const apiUrl = "https://rickandmortyapi.com/api/character";
  
    const response = await fetch(apiUrl);
    const body = await response.json();

    setItens(body)
    console.log(body.results)
  }

  
  useEffect(function() {carregarDadosApi()}, []) //Protege o array e ele será renderizado uma única vez.

      return (
    <>
      <div className="cards-list">
        <Header />
        { 
          body.results.map((item, index) => {
            return <Card key={index} item={item} />
          })
        }

      </div>
    </>
  );
}

export default App;