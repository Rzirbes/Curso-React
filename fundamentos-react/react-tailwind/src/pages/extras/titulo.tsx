import Menu from "@/components/menu/Menu";
import Titulo from "@/components/template/Titulo";
import UsuarioInfo from "@/components/template/UsuarioInfo";

export default function PAaginaTitulo() {

    const usuario = {
        nome: 'Romulo',
        email: 'romulo@zmail',
        imagemUrl: 'https://cdn-icons-png.flaticon.com/512/74/74472.png'
    }

    return (
        <div className="flex">
            <aside className="flex flex-col justify-between h-screen bg-zinc-900 min-w-64 rounded-r-2xl">
                <Menu
                    titulo="React Tailwind"
                />
                
                <UsuarioInfo {...usuario} />
            </aside>
            <div className="p-10">

                <Titulo principal="Titulo" secundario="Subtitulo" gradient></Titulo>
            </div>
        </div>
    )
}