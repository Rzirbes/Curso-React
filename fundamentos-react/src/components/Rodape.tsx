interface RodapeProps {
    textoEsquerda: string
    textoDireita: string
}

export default function Rodape(props: RodapeProps) {
    return (
        <div className={`
            flex justify-between items-center border-t border-zinc-800 bg-zinc-900
            px-7
            text-zinc-400
            h-11
            text-sm
        `}>
            <span>{props.textoEsquerda}</span>
            <span>{props.textoDireita}</span>
        </div>
    )
}