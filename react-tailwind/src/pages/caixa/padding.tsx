import Caixa from "@/components/caixa";

export default function Padding() {

    return (
        <div className="flex-center h-screen gap-5">
            <Caixa className="px-3">#1</Caixa>
            <Caixa className="py-5">#2</Caixa>
            <Caixa className="pb-5 pl-6">#3</Caixa>
            <Caixa className="p-6">#3</Caixa>
            <Caixa className="pt-[11px]">#3</Caixa>
        </div>
    )
}