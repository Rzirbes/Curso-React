import { IconCheck } from "@tabler/icons-react"

interface AulaConclusaoProps {
    concluida: boolean
    onClick?: () => void
}

export default function AulaConclusao(props: AulaConclusaoProps) {
    return (
        <button className={`
            flex items-center justify-center
            w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-zinc-400
            ${props.concluida && 'bg-green-500'}
        `} onClick={props.onClick}>
            {props.concluida && <IconCheck size={18} stroke={3} />}
        </button>
    )
}