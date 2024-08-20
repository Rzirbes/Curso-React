import Caixa from "@/components/caixa";

export default function Margin() {

    return (
        <div className="flex-center h-screen">
            <Caixa className="mx-3">#1</Caixa>
            <Caixa className="my-5">#2</Caixa>
            <Caixa className="mb-16 mr-6">#3</Caixa>
            <Caixa className="m-6">#3</Caixa>
            <Caixa className="mt-[110px]">#3</Caixa>
        </div>
    )
}