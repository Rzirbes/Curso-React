import React from "react"

interface LogoProps {
    titulo: string
    icon: any
}

export default function Logo(props: LogoProps) {
    return (
        <div className="flex items-center gap-2 justify-start mx-4 my-8">
            <span>{React.cloneElement(props.icon, {
                stroke: 1
            })}
            </span>
            <h1 className="font-bold text-2xl text-zinc-300">{props.titulo}</h1>
        </div>
    )
}