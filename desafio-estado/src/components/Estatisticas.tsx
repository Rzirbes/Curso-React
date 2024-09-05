// interface EstatisticasProps{}

import { useContext } from "react";
import Estatistica from "./Estatistica";
import CursoContext from "@/context/CursoContext";

export default function Estatisticas(){
    const {qtdeDeAulas, qtdeDeAulasConcluidas} = useContext(CursoContext)
    return(
        <div className="
            flex justify-around items-center 
            w-11/12 h-24 bg-zinc-700 rounded-lg
        ">
            <Estatistica texto="Qtde Aulas" valor={qtdeDeAulas}></Estatistica>
            <Estatistica texto="Aulas concluidas" valor={qtdeDeAulasConcluidas}></Estatistica>
            <Estatistica texto="Duração Total" valor="2h 30min"></Estatistica>
            <Estatistica texto="Duração Concluída" valor="1h 15min"></Estatistica>
            <Estatistica texto="Percentual de conclusão" valor="50%"></Estatistica>
        </div>
    )
}