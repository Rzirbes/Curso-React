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

    duracaoTotalEmSegundos(){
        return this.capitulos.reduce((qtde, cap) => {
            return qtde + cap.aulas.reduce((duracao, aula) => duracao + aula.duracao, 0)
        }, 0)
    }

    duracaoConcluidoEmSegundos(){
        return this.capitulos.reduce((qtde, cap) => {
            return qtde + cap.aulas
                .filter(aula => aula.concluida)
                .reduce((duracao, aula) => duracao + aula.duracao, 0)
        }, 0)
    }

    duracaoTotal(){
        const umaHora = 60 * 60
        const duracao = this.duracaoTotalEmSegundos()
        const horas = Math.floor(duracao / umaHora)
        const minutos = Math.floor(duracao % umaHora) / 60
        return `${horas}h ${minutos}m`
    }

    duracaoConcluida(){
        const umaHora = 60 * 60
        const duracao = this.duracaoConcluidoEmSegundos()
        const horas = Math.floor(duracao / umaHora)
        const minutos = Math.floor(duracao % umaHora) / 60
        return `${horas}h ${minutos}m`
    }

    porcentagemConclusao(){
        const duracaoTotal = this.duracaoTotalEmSegundos()
        const duracaoConcluida = this.duracaoConcluidoEmSegundos()

        if (duracaoTotal === 0) return "0%" 

        const porcentagem = (duracaoConcluida / duracaoTotal) * 100
        return `${porcentagem.toFixed()}%`
    }
}