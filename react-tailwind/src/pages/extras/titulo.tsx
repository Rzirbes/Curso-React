import Menu from "@/components/menu/Menu";
import Titulo from "@/components/template/Titulo";
import UsuarioInfo from "@/components/template/UsuarioInfo";
import { IconBrightnessDown, IconMoon, IconSun } from "@tabler/icons-react";
import { useState } from "react";

export default function PAaginaTitulo() {

    const [tema, setTema] = useState<'dark' | ''>('dark')

    function alternarTema() {
        tema === 'dark' ? setTema('') : setTema('dark')
    }

    const usuario = {
        nome: 'Romulo',
        email: 'romulo@zmail',
        imagemUrl: 'https://cdn-icons-png.flaticon.com/512/74/74472.png'
    }

    return (
        <div className={`flex h-screen relative ${tema} `}>
            <aside className={`
                flex flex-col justify-between  
                bg-white dark:bg-zinc-900 
                w-80 rounded-r-2xl dark:text-zinc-300 text-zinc-800
                
            `}>
                <Menu
                    titulo="React Tailwind"
                    className="overflow-auto pb-36"
                />
                <div className="
                    fixed 
                    bg-white dark:bg-zinc-900
                    dark:text-zinc-300 text-zinc-800
                    w-80 bottom-0
                ">
                    <UsuarioInfo {...usuario} />
                </div>
            </aside>
            <div className={`absolute right-2 top-2 mr-6 dark:text-zinc-300 text-zinc-800`}>
                <button onClick={alternarTema}>
                    {tema === 'dark' ? <IconSun /> : <IconMoon />}
                </button>

            </div>
            <div className="flex-1 bg-zinc-200 dark:bg-zinc-900 p-10">

                <Titulo principal="Titulo" secundario="Subtitulo" gradient></Titulo>
            </div>
        </div>
    )
}