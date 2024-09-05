import CarrinhoContext from "@/context/CarrinhoContext";
import Area from "../template/Area";
import CarrinhoVazio from "./CarrinhoVazio";
import { useContext } from "react";
import ItemCarrinhoCard from "./ItemCarrinhoCard";
import Real from "@/utils/Real";
import { IconTrash } from "@tabler/icons-react";

export default function Carrinho() {
    const { itens, valorTotal, limpar } = useContext(CarrinhoContext)
    return (
        <Area titulo="carrinho" cor="green-500" sumario={Real.format(valorTotal)}>
            <div className="flex flex-col items-center gap-4">
                <div className="flex flex-wrap justify-center gap-4">

                    {itens.length === 0
                        ? (
                            <CarrinhoVazio />
                        )
                        : (
                            itens.map(item => {
                                return (
                                    <ItemCarrinhoCard item={item} key={item.produto.id} />
                                )
                            })
                        )}
                </div>
                {itens.length > 0 && (
                    <button className="flex btn-danger w-28 justify-center items-center" onClick={limpar}>
                        <IconTrash /> Limpar
                    </button>
                )}
            </div>
        </Area>
    )

}