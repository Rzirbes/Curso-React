import { createContext, useEffect, useState } from "react";
import secoesMenu from "../constants/secoesMenu";
import { MenuSecao } from "@/data/models/MenuSecao";
import useBoolean from "../hooks/useToggleBoolean";
import useTamanhoJanela from "../hooks/useTamanhoJanela";
import { useRouter } from "next/router";

interface MenuContextType {
    secoes: MenuSecao[];
    mini: boolean
    toggleMini: () => void
    alternarSecao(secaoSelecionada: MenuSecao): void
}

const ContextMenu = createContext<MenuContextType | undefined>(undefined);

export function MenuProvider({ children }: { children: React.ReactNode }) {
    const [mini, toggleMini, miniTrue] = useBoolean(false);
    const [secoes, setSecoes] = useState<any>(secoesMenu)
    let tamanho = useTamanhoJanela()
    const router = useRouter();


    useEffect(() => {
        if (tamanho === "md" || tamanho === "sm") {
            miniTrue()
        }
    }, [tamanho])

    function alternarSecao(secaoSelecionada: MenuSecao){
        let novasSecoes = secoes.map((secao: any) => {
            if(secao.titulo === secaoSelecionada.titulo){
                return {...secao, aberta: !secao.aberta}
            }else{
                return secao
            }
        })
        setSecoes(() => novasSecoes)
    }

    useEffect(() => {
        setSecoes(() => selecionarItem(router.asPath))
    }, [router.asPath])

    function selecionarItem(url: string) {
        let novasSecoes = secoes.map((secao: any) => {
            let novosItens = secao.itens.map((item: any) => {
                return { ...item, selecionado: item.url === url };
            });
            return { ...secao, itens: novosItens }; // Retorna a seção inteira, com os itens atualizados
        });
        return novasSecoes;
    }

    const ctx = { secoes, mini, toggleMini, alternarSecao }

    return (
        <ContextMenu.Provider value={ctx}>
            {children}
        </ContextMenu.Provider>
    );
}

export default ContextMenu;
