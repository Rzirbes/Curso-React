import useToggle from "@/data/hooks/useToggle";
import Flex from "./Flex";
import Titulo from "./Titulo";
import { IconPaint, IconX } from "@tabler/icons-react";
import SeletorDeCor from "./seletorDeCor";

interface CabecalhoProps {
    titulo?: string;
    subtitulo?: string;
}

export default function Cabecalho(props: CabecalhoProps) {

    const [mostraSeletor, toggleMostraSeletor] = useToggle(false)

    return (
        <Flex centerCross className="justify-between">
            {props.titulo ? <Titulo titulo={props.titulo} subtitulo={props.subtitulo} /> : <div></div>}
            <div onClick={toggleMostraSeletor}>

                {mostraSeletor ? <IconX /> : <IconPaint />}
            </div>
            {mostraSeletor ? <SeletorDeCor></SeletorDeCor> : ''}
        </Flex>
    );
}
