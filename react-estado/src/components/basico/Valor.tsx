import ContadorContext from "@/context/ContadorContext";
import Area from "../template/Area";
import { useContext } from "react";

export default function Valor(){

    const ctx = useContext(ContadorContext)

    return(
        <Area titulo="Valor" cor="blue-500">
            <span className="font-black text-6xl">{ctx.numero}</span>
        </Area>
    )
}