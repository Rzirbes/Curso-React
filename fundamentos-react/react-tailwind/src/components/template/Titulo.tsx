interface TituloProps {
    principal: string
    secundario: string
    gradient?: boolean
}

export default function Titulo(props: TituloProps) {
    return (
        <div className={`
            flex flex-col
            items-start

        `}>
            <h1 className={`
                text-4xl font-black font-mono  
                ${props.gradient ? 'bg-gradient-to-r from-blue-800 bg-clip-text to-green-500 text-transparent' : ''}  
            `}>{props.principal}</h1>

            <span className="text-sm font-light text-zinc-400">{props.secundario}</span>
        </div>
    )
}