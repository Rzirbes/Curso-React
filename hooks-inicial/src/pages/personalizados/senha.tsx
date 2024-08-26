
import InputFormatado from "@/components/formulario/InputFormatado";
import Pagina from "@/components/template/Pagina";
import useStateValidado from "@/data/hooks/useStateValidado";

export default function () {
    function validaSenha(senha: string){
        let correspondencia = senha.match(/[\d\S]{8,}/)
        return correspondencia?.[0].length === senha.length
    }
    const [senha, setSenha, senhaEhValida] = useStateValidado("",validaSenha)

    let borda
    if(senha === ""){
        borda = 'border-none'
    }else if(senhaEhValida){
        borda = 'border-green-600'
    }else if(!senhaEhValida){
        borda = 'border-red-500'
    }

    return (
        <Pagina titulo="Validando Senha" subtitulo="Usando hook personalidado para validação">
            <InputFormatado
                label="Senha"
                onInput={(e) => setSenha(e.target.value)}
                tipo="text"
                className={`${borda} border-4 w-50 flex`}
                valor={senha}
            ></InputFormatado>
        </Pagina>
    )
}