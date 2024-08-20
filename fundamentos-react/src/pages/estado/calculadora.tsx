import Pagina from "@/components/Pagina";
import { useState } from "react";

export default function Calculadora() {

    const [valor1, setValor1] = useState(1)
    const [valor2, setValor2] = useState(1)

    function alterarValor1(e: any){
        setValor1(+e.target.value)
    }
    function alterarValor2(e: any){
        setValor2(+e.target.value)
    }

    return (
        <Pagina titulo="Calculadora" subtitulo="Desafio de construir uma calculadora">
            <div className="flex h-full w-full justify-center items-center">
                <div className="flex items-center flex-col gap-5">
                    <div className="flex items-center gap-5">
                        <input 
                            className="campo" 
                            type="number" 
                            onChange={alterarValor1}
                        />
                        <input className="campo" type="number" onChange={alterarValor2}/>
                    </div>
                    <div className="flex flex-col">
                        <span>{valor1} + {valor2} = {valor1 + valor2}</span>
                        <span>{valor1} - {valor2} = {valor1 - valor2}</span>
                        <span>{valor1} * {valor2} = {valor1 * valor2}</span>
                        <span>{valor1} / {valor2} = {valor1 / valor2}</span>
                    </div>
                </div>
            </div>
        </Pagina>
    )
}