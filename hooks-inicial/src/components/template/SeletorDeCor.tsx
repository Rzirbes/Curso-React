import clsx from "clsx";
import useTema from "@/data/hooks/useTema";
import Botao from "./Botao";
import Flex from "./Flex";

export default function SeletorDeCor() {
    const { cores, setCorDestaque } = useTema();

    const listaCores = cores.map((cor: string) => (
        <Botao
            key={cor}
            cor={clsx(`bg-${cor}`)}  // Usa clsx para lidar com a classe dinamicamente
            onClick={() => setCorDestaque(cor)}
        />
    ));

    return (
        <Flex center gap={4} className="absolute right-3 top-20">
            {listaCores}
        </Flex>
    );
}