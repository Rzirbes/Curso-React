import Area from "../template/Area";
import CarrinhoVazio from "./CarrinhoVazio";

export default function Carrinho(){
    return(
        <Area titulo="carrinho" cor="green-500">
            <CarrinhoVazio/>
        </Area>
    )

}