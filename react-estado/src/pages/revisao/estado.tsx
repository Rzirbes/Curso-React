import Area from "@/components/template/Area";
import { useState } from "react";


export default function Estado() {
    let [texto, setTexto] = useState('')

    return (
        <div className="p-20">
            <Area titulo="Revisão Estado" cor="blue-500">
                <input 
                    className="input"
                    onChange={e => {
                        console.log(e.target.value)
                        setTexto(texto = e.target.value)
                    }}
                    value={texto}
                    type="text"
                />
                <span className="ml-20">{texto}</span>
            </Area>
        </div>
    )
}