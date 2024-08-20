export default function Page() {

    function renderizarTitulo() {
        return (
            <div>
                <h1>Titulo</h1>
                <h2>subtitulo</h2>
            </div>
        )
    }
    function renderizarConteudo() {
        return (
            <ul>
                <li>Anna</li>
                <li>Carlos</li>
                <li>pedro</li>
            </ul>
        )
    }

    return (
        <div>
            {renderizarTitulo()}
            <hr />
            {renderizarConteudo()}
        </div>
    )
}