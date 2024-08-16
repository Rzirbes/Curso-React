import Link from "next/link";

interface MenuItemProps {
    texto: string
    url: string
    icone: any
}

export default function MenuItem(props: MenuItemProps){
    return(
        <Link className={`
            p-2 text-base w-full rounded-md
            flex items-center gap-2 hover:bg-zinc-700
        `} href={props.url}>
            <span>{props.icone}</span>
            <span>{props.texto}</span>
        </Link>
    )
}