import { useContext } from "react";
import Estatistica from "./Estatistica";
import CursoContext from "@/context/CursoContext";

export default function Estatisticas() {
    const { qtdeDeAulas, qtdeDeAulasConcluidas, duracaoTotal, duracaoConcluida, porcentagemConcluida } = useContext(CursoContext);

    return (
        <div className="
            flex flex-col sm:flex-row justify-around items-center 
            w-full sm:w-11/12 h-auto sm:h-32 bg-zinc-700 rounded-lg p-4
            text-center
        ">
            <div className="flex flex-col sm:flex-row justify-between w-full">
                <Estatistica texto="Qtde Aulas" valor={qtdeDeAulas} />
            </div>
            <div className="flex flex-col sm:flex-row justify-between w-full">
                <Estatistica texto="Aulas Concluídas" valor={qtdeDeAulasConcluidas} />
            </div>
            <div className="flex flex-col sm:flex-row justify-between w-full mt-2 sm:mt-0">
                <Estatistica texto="Duração Total" valor={duracaoTotal} />
            </div>
            <div className="flex flex-col sm:flex-row justify-between w-full mt-2 sm:mt-0">
                <Estatistica texto="Duração Concluída" valor={duracaoConcluida} />
            </div>
            <div className="w-full mt-2 sm:mt-0 sm:ml-4">
                <Estatistica texto="Percentual de Conclusão" valor={porcentagemConcluida} />
            </div>
        </div>
    );
}
