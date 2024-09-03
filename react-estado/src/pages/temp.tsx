import Area from "@/components/template/Area";

export default function Temp(){
    return(
        <div className="p-20 flex flex-col gap-5">
            <Area titulo="Teste de Componente" cor="red-500">
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </Area>
            <Area titulo="Teste de Componente" sumario="R$ 1256,90" cor="blue-500">
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </Area>
        </div>
    )
}