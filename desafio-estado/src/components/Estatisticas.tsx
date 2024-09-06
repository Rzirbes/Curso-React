// interface EstatisticasProps{}

import { useContext } from "react";
import Estatistica from "./Estatistica";
import CursoContext from "@/context/CursoContext";

export default function Estatisticas() {
    const { qtdeDeAulas, qtdeDeAulasConcluidas, duracaoTotal, duracaoConcluida, porcentagemConcluida } = useContext(CursoContext)
    return (
        <div className="
            flex flex-col sm:flex-row justify-around items-center 
            w-full sm:w-11/12 h-24 bg-zinc-700 rounded-lg p-2 sm:p-4
        ">
            <Estatistica texto="Qtde Aulas" valor={qtdeDeAulas} />
            <Estatistica texto="Aulas Concluídas" valor={qtdeDeAulasConcluidas} />
            <Estatistica texto="Duração Total" valor={duracaoTotal} />
            <Estatistica texto="Duração Concluída" valor={duracaoConcluida} />
            <Estatistica texto="Percentual de Conclusão" valor={porcentagemConcluida} />
        </div>
    )
}