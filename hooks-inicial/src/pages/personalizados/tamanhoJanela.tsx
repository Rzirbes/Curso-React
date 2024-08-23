import Display from "@/components/template/Display";
import Pagina from "@/components/template/Pagina";
import useTamanhoJanela from "@/data/hooks/useTamanhoJanela";
import { useEffect, useState } from "react";

export default function () {

    const [tamanho, setTamanho] = useState<string | null>()
    const tamanhoJanela = useTamanhoJanela()

    useEffect(() => {
        setTamanho(tamanhoJanela)
    }, [tamanhoJanela])


    return (
        <Pagina
            titulo="Tamanho da Página"
            subtitulo="Usando um hook personalizado para descobrir o tamanho da pagina">
            <Display texto={tamanho}></Display>
            <div className={`
                        w-40 h-40
                        sm:bg-blue-500
                        md:bg-pink-300
                        lg:bg-green-400
                        xl:bg-purple-300
                        2xl:bg-orange-300
                    `}></div>
        </Pagina>)
}