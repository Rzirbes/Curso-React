import Capitulo from "@/data/model/Capitulo"
import AulaItem from "./AulaItem"
import { useContext } from "react"
import CursoContext from "@/context/CursoContext"


interface CapituloItemProps {
    capitulo: Capitulo
}

export default function CapituloItem(props: CapituloItemProps) {
    const { capitulo } = props
    const { aulaAtual } = useContext(CursoContext)
    return (
        <div>
            <div className="flex gap-3 p-4 bg-zinc-900 items-center">
                <div className="
                    flex justify-center items-center
                    h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-black
                    border border-zinc-400
                ">
                    {capitulo.ordem}
                </div>
                <span className="text-sm sm:text-base">{capitulo.titulo}</span>
            </div>
            <div className="p-4">
                {capitulo.aulas.map(aula => (
                    <AulaItem  
                        key={aula.ordem} 
                        aula={aula} 
                        selecionada={aulaAtual.ordem === aula.ordem}
                    />
                ))}
            </div>
        </div>
    )
}