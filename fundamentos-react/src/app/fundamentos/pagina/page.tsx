
import Pagina from "@/components/Pagina";

export default function Page() {

    return (
        <div>
            <Pagina titulo="Titulo 1" subtitulo="Substitulo 1">
                <ul className="p-8 list-disc">
                    <li>Conteudo 1</li>
                    <li>Conteudo 2</li>
                    <li>Conteudo 3</li>
                </ul>
            </Pagina>
        </div>
    )
}