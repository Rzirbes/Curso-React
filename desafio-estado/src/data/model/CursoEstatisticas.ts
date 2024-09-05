import Capitulo from "./Capitulo";

export default class CursoEstatisticas {
    constructor(private capitulos: Capitulo[]){}

    qtdeDeAulas(){
        return this.capitulos.reduce((qtde, cap) => qtde + cap.aulas.length, 0)
    }
    
    qtdeDeAulasConcluidas() {
        return this.capitulos.reduce((qtde, cap) => {
            return qtde + cap.aulas.filter(aula => aula.concluida).length
        }, 0)
    }
}