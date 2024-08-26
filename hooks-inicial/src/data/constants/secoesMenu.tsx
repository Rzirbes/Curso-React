import { IconAppWindow, IconArrowsLeftRight, IconDimensions, IconLetterCase, IconLock, IconMathGreater, IconMenu, IconNumbers, IconRefreshAlert, IconSection, IconShoppingBag, IconShoppingCart, IconUsers, IconX } from "@tabler/icons-react";


export const secoes = [
    {
        titulo: "Essenciais",
        aberta: false,
        itens: [
            {
                titulo: "Contador",
                url: "/essenciais/contador",
                tag: "useState",
                icone: <IconNumbers />
            },
            {
                titulo: "Votação",
                url: "/essenciais/votacao",
                tag: "useState",
                icone: <IconUsers />
            },
            {
                titulo: "Consulta",
                url: "/essenciais/consultaApi",
                tag: "useEffect",
                icone: <IconArrowsLeftRight />
            },
            {
                titulo: "Maior",
                url: "/essenciais/maior",
                tag: "useEffect",
                icone: <IconMathGreater />
            },
            {
                titulo: "Contagem Caracteres",
                url: "/essenciais/contagemCaracteresEffect",
                tag: "useEffect",
                icone: <IconLetterCase />
            },
            {
                titulo: "Referência vs State",
                url: "/essenciais/stateVsRef",
                tag: "useRef",
                icone: <IconRefreshAlert />
            },
            {
                titulo: "Referenciando Elemento",
                url: "/essenciais/refElemento",
                tag: "useRef",
                icone: <IconSection />
            },
            {
                titulo: "Contagem Caracteres",
                url: "/essenciais/contagemCaracteresRef",
                tag: "useRef",
                icone: <IconLetterCase />
            },
        ],

    },
    {
        titulo: "Personalizados",
        aberta: true,
        itens: [
            {
                titulo: "Modal",
                url: "/personalizados/modal",
                tag: "useState",
                icone: <IconAppWindow />
            },
            {
                titulo: "Tamanha da Página",
                url: "/personalizados/tamanhoJanela",
                tag: "useState",
                icone: <IconDimensions />
            },
            {
                titulo: "Senha",
                url: "/personalizados/senha",
                tag: "useState",
                icone: <IconLock />
            },
        ],

    },
    {
        titulo: "Contexto",
        aberta: true,
        itens: [
            {
                titulo: "Loja",
                url: "/contexto/loja",
                tag: "useContext",
                icone: <IconShoppingCart />
            },
        ],

    },
];

export default secoes