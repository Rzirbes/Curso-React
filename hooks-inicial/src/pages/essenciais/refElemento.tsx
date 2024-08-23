import Botao from "@/components/template/Botao";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { IconArrowLeft } from "@tabler/icons-react";
import { useRef } from "react";

export default function () {
    const referencia = useRef<any>()

    function apagar(){
        //referencia.current = paragrafo <p></p>
        referencia.current.innerText = referencia.current.innerText.slice(0, -1)
    }

    return (
        <Pagina titulo="Referenciando um Elemento" subtitulo="Usando referências na DOM">
            <Flex col center>

                <p ref={referencia} className="text-4xl text-zinc-300 m-4">Texto Legal</p>
                <Botao
                    onClick={apagar}
                    tamanho="2xl"
                    cor="bg-sky-500" icone={<IconArrowLeft />}
                ></Botao>
            </Flex>
        </Pagina>
    )
}