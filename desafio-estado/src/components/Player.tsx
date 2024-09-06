import CursoContext from "@/context/CursoContext"
import capitulos from "@/data/constants/capitulos"
import { useContext } from "react"



export default function Player() {
    const { aulaAtual } = useContext(CursoContext)
    return (
        <div className="
            flex flex-col justify-center items-center
            w-full sm:w-11/12 h-60 sm:h-80 md:h-96 bg-zinc-700 rounded-lg p-3
        ">
            <span className="text-lg sm:text-2xl md:text-3xl font-black">{aulaAtual.titulo}</span>
            <div className="aspect-video w-full h-full p-2 sm:p-5 overflow-hidden">
                <iframe
                    width="100%"
                    height="100%"
                    src={aulaAtual.videoUrl}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    style={{ border: 0 }}
                ></iframe>
            </div>
        </div>
    )
}