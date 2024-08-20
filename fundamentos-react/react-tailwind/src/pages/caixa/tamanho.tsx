import Caixa from "@/components/caixa";

export default function Tamanho(){
    return (

        <div className="flex flex-col gap-5">
            <Caixa className="w-16 h-16">#1</Caixa>
            <Caixa className="w-4/5">#2</Caixa>
            <Caixa className="w-1/2">#3</Caixa>
            <Caixa className="w-[75%]">#3</Caixa>
            <Caixa className="min-w-[200px]">#3</Caixa>
            <Caixa className="max-w-[200px]">#3</Caixa>
        </div>
    )
}