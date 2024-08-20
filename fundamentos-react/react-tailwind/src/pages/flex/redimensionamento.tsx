import Caixa from "@/components/caixa";

export default function Flex() {
    return(
        <div className="
            flex gap-1.5 
        ">
            <Caixa className="w-14 flex-auto">#1</Caixa>
            <Caixa className="w-32 flex-initial">#2</Caixa>
            <Caixa className="w-64 flex-auto">#3</Caixa>
        </div>
    )
}