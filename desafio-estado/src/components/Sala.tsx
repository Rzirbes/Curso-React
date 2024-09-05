
import Estatisticas from "./Estatisticas";
import Palyer from "./Player";
import CapituloItem from "./CapituloItem";
import { useContext } from "react";
import CursoContext from "@/context/CursoContext";

export default function Sala(){

    const {capitulos} = useContext(CursoContext)

    const capitulosFakes = capitulos;
    return (
        <div className="flex">
            <div className="bg-zinc-800 w-96 h-screen overflow-auto">
                {capitulosFakes.map(capitulo => {
                    return <CapituloItem key={capitulo.id} capitulo={capitulo}></CapituloItem>
                })}
            </div>
            <div className="flex flex-col gap-4 justify-center items-center flex-1">
                <Estatisticas/>
                <Palyer/>
            </div>
        </div>
    )
}