
import Pagina from '@/components/Pagina'

export default function Pagina2() {

    function executar(){
        console.log("O botão foi pressionado")
    }

    return (
        <div>
            <Pagina titulo="Titulo 2" subtitulo="Substitulo 2">
                <button onClick={executar}
                    className='botao'>Teste
                </button>
            </Pagina>
        </div>
    )
}