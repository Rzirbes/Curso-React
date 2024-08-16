import { useState } from "react"
import Botoes from "./Botoes"

interface ValorProps{
    texto: string
}


export default function Valor(props: ValorProps){
    const [nome, setNome] = useState('')
    function alterar(nome: string) {
        setNome(nome)
    }
    return(
        <div className="text-8xl font-black">
            <Botoes alterarNome={alterar}/>
            {nome}
        </div>
    )
}