import {
    IconArrowDownSquare,
    IconArrowUpSquare,
    IconBrandJavascript,
    IconCalculator,
    IconCode,
    IconFile,
    IconFilePlus,
    IconForms,
    IconFunction,
    IconH1,
    IconNumbers,
    IconSum,
    IconTex
} from "@tabler/icons-react";
import MenuItem from "./MenuItem";

export default function Menu() {

    function renderizarText(texto: string) {
        return <span className="text-sm self-start text-zinc-700">{texto}</span>
    }

    return (
        <div className={`
            flex flex-col justify-start items-center
            gap-3 p-2
            bg-black w-72
        `}>
            {renderizarText("Comunicação")}
            <MenuItem texto="Comunicação Direta" url="/comunicacao/direta" icone={<IconArrowDownSquare />} />
            <MenuItem texto="Comunicação Indireta" url="/comunicacao/indireta" icone={<IconArrowUpSquare />} />
            
            {renderizarText("Estado")}
            <MenuItem texto="Componente sem Estado" url="/estado/sem" icone={<IconCode />} />
            <MenuItem texto="Componente com Estado" url="/estado/com" icone={<IconCode />} />
            <MenuItem texto="Contador com Estado" url="/estado/contador" icone={<IconNumbers />} />
            <MenuItem texto="Campo Texto" url="/estado/campoTexto" icone={<IconForms />} />
            <MenuItem texto="Calculadora" url="/estado/calculadora" icone={<IconCalculator />} />

            {renderizarText("Fundamentos")}
            <MenuItem texto="Pagina #1" url="/fundamentos/pagina" icone={<IconFilePlus />} />
            <MenuItem texto="Pagina #2" url="/pagina" icone={<IconFile />} />
            <MenuItem texto="Funções" url="/fundamentos/funcoes" icone={<IconFunction />} />
            <MenuItem texto="Soma" url="/fundamentos/soma" icone={<IconSum />} />

            {renderizarText("Componentes")}
            <MenuItem texto="Basico" url="/componentes/basico" icone={<IconCode />} />
            <MenuItem texto="Titulo" url="/componentes/titulo" icone={<IconH1 />} />
            <MenuItem texto="Trecho" url="/componentes/trecho" icone={<IconBrandJavascript />} />
        </div>
    )
}