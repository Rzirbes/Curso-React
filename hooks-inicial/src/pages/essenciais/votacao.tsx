import Botao from "@/components/template/Botao";
import Display from "@/components/template/Display";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { useState } from "react";

export default function Votacao(){

    let [dados, setDados] = useState({
        votosRoxo: 0,
        votosVerde: 0
    })

    function votoVerde() {
        // Pode ser que a variável dados tenha algum membro alterado durante a atualização
        // setDados({votosRoxo: dados.votosRoxo, votosVerde: dados.votosVerde+1})

        setDados((dadosAtuais) => {
            return {votosRoxo:dadosAtuais.votosRoxo,
                votosVerde:dadosAtuais.votosVerde+1
            }
        })

    }
    function votoRoxo() {
        setDados((dadosAtuais) => {
            return {votosRoxo:dadosAtuais.votosRoxo+1,
                votosVerde:dadosAtuais.votosVerde
            }
        })
    }

    function zerar() {
        setDados(() => {
            return {votosRoxo: 0,
                votosVerde: 0
            }
        })
    }

    return(
        <Pagina titulo="Votacao" subtitulo="Usando estado com objeto">
            <Flex col center>
                <Display 
                    texto="Qual a melhor cor?"
                    textoComplementar={`Verde: ${dados.votosVerde} | Roxo: ${dados.votosRoxo}`}
                />
                <Flex gap={5}>
                    <Botao cor="bg-green-500" onClick={votoVerde} tamanho="2xl"/>
                    <Botao cor="bg-purple-500" onClick={votoRoxo} tamanho="2xl"/>
                </Flex>
                    <Botao texto="zerar" cor="bg-zinc-500" onClick={zerar} tamanho="lg"/>
            </Flex>
        </Pagina>
    )
}