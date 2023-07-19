import './App.css'
import Card from './components/Card/Card'

export const item1 = {
  nome: "Rick Sanchez",
  imagem:
    "https://static.tvtropes.org/pmwiki/pub/images/abcb6534_7913_4eb1_a7a5_62b081ebc628.png"
}

export const item2 = {
  nome: "Morty Smith",
  imagem:
    "https://static.wikia.nocookie.net/rickandmorty/images/e/ee/Morty501.png/revision/latest?cb=20210827150137"
}

function App() {
  return (
    <>
      <div className='cards-list'>
        <Card item={1} />
        <Card item={2}/>
      </div>
    </>
  )
}

export default App
