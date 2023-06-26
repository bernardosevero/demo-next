export default function ListaPersonagens({personagens}) {

    return (
        personagens.map( (personagem)  => (
            <h2 key={personagem}>
                {personagem}
            </h2>
        ) )
    )
}