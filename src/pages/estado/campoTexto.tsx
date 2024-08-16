import Pagina from "@/components/Pagina";
import { useState } from "react";

export default function CampoTexto() {

    const [valor, setValor] = useState('')

    function alterar() {
        setValor(`${Math.random()}`)
    }
    function alterarValor(e: any) {
        setValor(e.target.value)
    }

    return (
        <Pagina titulo="Campo de Texto" subtitulo="Pagina para fundamento de input text">
            <div className="flex gap-5 justify-center items-center">
                <input
                    className="campo"
                    type="text"
                    value={valor}
                    onChange={alterarValor}
                />
                <button onClick={alterar} className="botao">Alterar</button>
                <span>{valor}</span>
            </div>
        </Pagina>

    )
}