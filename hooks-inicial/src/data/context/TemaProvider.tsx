import { createContext, useState } from "react";

interface TemaContextoType {
    cores: string[];
    corDestaque: string;
    setCorDestaque: (cor: string) => void;
}

const ContextoTema = createContext<TemaContextoType | undefined>(undefined);

export function TemaProvider(props: { children: React.ReactNode }) {
    const cores = ["blue-300", "red-300", "pink-300", "orange-300", "green-300", "purple-300", "yellow-300"];
    const [corDestaque, setCorDestaque] = useState<string>(cores[0]);

    const ctx = { cores, corDestaque, setCorDestaque };

    return (
        <ContextoTema.Provider value={ctx}>
            {props.children}
        </ContextoTema.Provider>
    );
}

export default ContextoTema;