import { IconBrandReact } from "@tabler/icons-react";
import Link from "next/link";

export default function Logo (){
    return(
        <Link className="flex items-center gap-2 px-5 text-3xl font-black bg-purple-700 h-16"
            href="/"
        >
            <span><IconBrandReact size={30} stroke={1}/></span>
            <span className="text-2xl">React</span>
        </Link>
    )
}