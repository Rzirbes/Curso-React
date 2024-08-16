
import Valor from "@/components/comunicacao/indireta/Valor";
import Pagina from "@/components/Pagina";


export default function Direta(){
    return(
        <Pagina titulo="Comunicação Direta" subtitulo="Exercicio de comunicação direta">
            <div>
                <Valor texto="Comunicação indireta"/>
            </div>
        </Pagina>
    )
}