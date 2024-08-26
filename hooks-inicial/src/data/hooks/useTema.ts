import { useContext } from "react";
import ContextoTema from "@/data/context/TemaProvider";

export default function useTema() {
    const context = useContext(ContextoTema);
    if (!context) {
        throw new Error("useTema deve ser usado dentro de um TemaProvider");
    }
    return context;
}