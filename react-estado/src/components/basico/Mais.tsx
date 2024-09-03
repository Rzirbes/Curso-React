import { useContext } from "react";
import Area from "../template/Area";
import ContadorContext from "@/context/ContadorContext";

export default function Mais(){

    const ctx = useContext(ContadorContext)

    return(
        <Area titulo="Botão de Menos" cor="green-500">
            <button className="btn" onClick={ctx.incrementar}>
                +1
            </button>
        </Area>
    )
}