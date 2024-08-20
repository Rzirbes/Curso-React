import Link from "next/link"
import React from "react"


interface MenuItemProps {
    text: string
    icon: any
    url: string
}

export default function MenuItem(props: MenuItemProps) {
    return (
        <Link href={props.url}>
            <div className="
            flex gap-2 
            my-1 mx-2 px-8 py-1 rounded-md
            hover:bg-zinc-300 dark:hover:bg-zinc-700"
            >
                <span>{React.cloneElement(props.icon, {
                    stroke: 1
                })}
                </span>
                <span>{props.text}</span>
            </div>
        </Link>
    )
}