interface EstatisticaProps {
    texto: string;
    valor: number | string;
}

export default function Estatistica(props: EstatisticaProps) {
    return (
        <div className="flex flex-col md:items-center sm:items-start">
            <span className="text-2xl sm:text-3xl md:text-4xl font-black">{props.valor}</span>
            <span className="text-xs sm:text-sm md:text-base text-zinc-400">{props.texto}</span>
        </div>
    );
}
