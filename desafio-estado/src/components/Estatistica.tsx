interface EstatisticaProps{
    texto: string
    valor: number | string
}

export default function Estatistica(props: EstatisticaProps) {
    return (
        <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-4xl font-black">{props.valor}</span>
            <span className="text-xs sm:text-sm text-zinc-400">{props.texto}</span>
        </div>
    )
}