import Caixa from "@/components/caixa";

export default function posicao(){
    return(
        <div className="
            grid m-7 gap-2 
            grid-cols-3 h-72 bg-zinc-700
        ">
            <Caixa className="row-start-2 row-end-4">#1</Caixa>
            <Caixa className="row-start-1 row-end-3 col-start-2 col-span-2">#2</Caixa>
            <Caixa className="">#3</Caixa>
            <Caixa className="">#4</Caixa>
            <Caixa className="">#5</Caixa>
        </div>
    )
}