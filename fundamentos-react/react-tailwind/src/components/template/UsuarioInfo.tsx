import { IconDotsVertical } from '@tabler/icons-react'
import Image from 'next/image'
interface UsuarioInfoProps {
    nome: string
    email: string
    imagemUrl: string
}

export default function UsuarioInfo(props: UsuarioInfoProps) {
    return (
        <div>
            <hr className='mx-3 border-zinc-500'/>
            <div className="flex gap-2 rounded-t-md px-4 py-8">
                <Image 
                    src={props.imagemUrl} 
                    alt='avatar'
                    width={50}
                    height={50}
                    className='bg-zinc-700 rounded-full'
                ></Image>
                <div className="flex flex-col">
                    <span>{props.nome}</span>
                    <span>{props.email}</span>
                </div>
                <div className='flex-1'></div>
                <IconDotsVertical/>
            </div>
        </div>
    )
}