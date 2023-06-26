import ListaPersonagens from "@/ListaPersonagens"
import { useState } from "react"

export default function CorridaMalucaPage({}) {
    const [personagens, setPersonagens] = useState([])
    const [valorInput, setValorInput] = useState('')

    return (
        <div className="container">
            <input onChange={(evt) => setValorInput(evt.target.value)} placeholder="Personagem"/>
            <button onClick={() => setPersonagens([...personagens, valorInput])}>Inserir personagem</button>
            <ListaPersonagens personagens={personagens}/>
        </div>
    )
}