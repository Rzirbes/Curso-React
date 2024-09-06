import Aula from "@/data/model/Aula"
import AulaConclusao from "./AulaConclusao"
import Duracao from "@/utils/Duracao"
import { IconVideo } from "@tabler/icons-react"
import { useContext } from "react"
import CursoContext from "@/context/CursoContext"

interface AulaItemProps {
    aula: Aula
    selecionada: boolean
}

export default function AulaItem(props: AulaItemProps) {
    const { aula, selecionada } = props
    const { selecionarAula, alternarConclusaoAula } = useContext(CursoContext)
    return (
        <div className="flex gap-2 md:gap-4 items-center py-1">
            <AulaConclusao concluida={aula.concluida ?? false} onClick={() => alternarConclusaoAula(aula)} />
            <div 
                className="flex flex-1 flex-col cursor-pointer"
                onClick={() => selecionarAula(aula)} 
            >
                <span className={`
                    text-sm sm:text-base md:text-md
                    ${selecionada && 'text-yellow-600'}
                `}>
                    {aula.ordem}. {aula.titulo}
                </span>
                <span className="-mt-1 text-xs sm:text-sm md:text-base text-zinc-400">
                    Duração de {Duracao.duracaoDe(props.aula.duracao)}
                </span>
            </div>
            <IconVideo size={20} className="sm:w-6 sm:h-6 md:w-8 md:h-8" />
        </div>
    )
}