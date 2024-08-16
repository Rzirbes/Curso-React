import Pagina from "@/components/Pagina";
import { useState } from "react";

export default function PaginaComEstado() {

    const [num, setNum] = useState(0)

    function incrementar() {
        setNum(num + 1)
    }

    return (
        <Pagina titulo="Com Estado" subtitulo="Pagina com Estado">
            <div className="flex flex-col">
                <div>
                    <span>Valor: </span>
                    <span>{num}</span>
                </div>
                <button className="bg-blue-500 p-2 rounded-lg" onClick={incrementar}>Incrementar</button>
            </div>
        </Pagina>
    )
}