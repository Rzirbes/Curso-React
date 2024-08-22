import Botao from "@/components/template/Botao";
import Display from "@/components/template/Display";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import { useState } from "react";

export default function Contador() {

    let [soma, setSoma] = useState(0)

    function incrementar() {
        setSoma(soma += 1)
    }
    function decrementar() {
        setSoma(soma -= 1)
    }
    function zerar() {
        setSoma(0)
    }


    return (
        <Pagina titulo="Contador" subtitulo="Entendendo o que é um Estado">
            <Display texto={soma}></Display>
            <Flex className="flex">
                <Botao
                    onClick={decrementar}
                    icone={<IconMinus />} cor="bg-red-500"
                />

                <Botao
                    onClick={zerar}
                    texto="0"
                    cor="bg-amber-500"
                />
                <Botao
                    onClick={incrementar}
                    icone={<IconPlus />}
                />
            </Flex>
        </Pagina>
    )
}