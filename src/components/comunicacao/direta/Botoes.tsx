import { useState } from "react";
import Valor from "./Valor";

export default function Botoes() {
    const [valor, setValor] = useState('')



    return (
        <div className="flex flex-col gap-10">
            <div className="flex gap-5">

                <button  onClick={() => setValor('Maria')} className="botao">Maria</button>
                <button onClick={() => setValor('João')} className="botao">João</button>
                <button onClick={() => setValor('Pedro')} className="botao">Pedro</button>
            </div>
            <Valor texto={valor} />
        </div>
    )
}