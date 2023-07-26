import { useState } from "react"
import { useEffect } from "react";
import "../../components/Card/Tag.css"

export default function Tag() {

    const [data, setDatas] = useState([])

      async function carregarApi() {
      const api = "https://rickandmortyapi.com/api/character/1"

      const response = await fetch(api)
      const corpo = await response.json()

      setDatas(corpo)
      }

      useEffect(function() {carregarApi()}, [])

      console.log(data)

    return(
        <>
        <div className="box-information">
            <div className="tag-information">
                <p>Status: {data.status}</p>
            </div>
            <div className="tag-information">
                <p>Species: {data.species}</p>
            </div>
        </div>
        <div className="tag-information-footer">
            <p>Gender: {data.gender}</p>
        </div>
        </>
    )
}