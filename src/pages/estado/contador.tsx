import Pagina from "@/components/Pagina";
import { useState } from "react";
import { IconExposureMinus1, IconExposurePlus1 } from "@tabler/icons-react";

export default function Contador() {

    const [num, setNum] = useState(0)
    const [delta, setDelta] = useState(1)

    function incrementarDelta() {
        setDelta(delta + 1)
    }
    function decrementarDelta() {
        setDelta(delta - 1)
    }

    function contadorSoma() {
        setNum(num + delta)
    }
    function contadorSubtracao() {
        setNum(num - delta)
    }

    return (
        <Pagina titulo="Contador" subtitulo="Fazendo o desafio do contador com estado">
            <div className="flex gap-4 flex-1 flex-col h-full justify-center items-center ">

                <div className="flex gap-4">
                    <button className="bg-blue-400 p-2 rounded-lg" onClick={contadorSoma}>
                        <IconExposurePlus1 />
                    </button>
                    <div className="bg-zinc-300 px-10 rounded-sm">
                        <span className="text-black font-black">{num}</span>
                    </div>
                    <button className="bg-red-400 p-2 rounded-lg" onClick={contadorSubtracao}>
                        <IconExposureMinus1 />
                    </button>
                </div>

                <div className="flex gap-2 justify-center items-center">

                    <button
                        onClick={incrementarDelta}
                        className="flex bg-blue-400 w-6 h-6 items-center justify-center rounded-full"
                    >
                        <IconExposurePlus1 size={10} />
                    </button>
                    <div className="bg-zinc-700 px-10 rounded-full">
                        <span className="text-black">{`delta: ${delta}`}</span>
                    </div>
                    <button
                        onClick={decrementarDelta}
                        className="flex bg-red-400 w-6 h-6 items-center justify-center rounded-full"
                    >
                        <IconExposureMinus1 size={10} />
                    </button>
                </div>
            </div>
        </Pagina>
    )
}