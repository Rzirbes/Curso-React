import Pagina from "@/components/Pagina";

export default function PaginaSemEstado() {

    let numero = 0

    function incrementar() {
        numero += 1
        console.log(numero)
    }

    return (
        <Pagina titulo="Sem Estado" subtitulo="Pagina sem Estado">
            <div className="flex flex-col">
                <div>
                    <span>Valor: </span>
                    <span>{numero}</span>
                </div>
                <button className="bg-blue-500 p-2 rounded-lg" onClick={incrementar}>Incrementar</button>
            </div>
        </Pagina>
    )
}