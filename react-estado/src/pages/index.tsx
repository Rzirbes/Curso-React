import { Inter } from "next/font/google";
import MenuItem from "@/components/template/MenuItem";
import { IconArrowsDownUp, IconForms, IconNumber123, IconNumbers, IconShoppingCart } from "@tabler/icons-react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="
      flex flex-col justify-center items-center h-screen
      bg-gradient-to-br from-zinc-800 to-black gap-20
    ">
      <div className="text-6xl">
        <span className="opacity-40 font-thin">Gerenciamento de </span>
        <span className="
          font-black 
          bg-gradient-to-r from-blue-500 to-green-500
          text-transparent bg-clip-text
        ">
          Estado
        </span>
      </div>
      <div className="flex flex-wrap justify-around w-3/5">

        <MenuItem icone={<IconForms />} texto="Estado" url="/revisao/estado" />
        <MenuItem icone={<IconArrowsDownUp/>} texto="Comunicacao" url="/revisao/comunicacao" />
        <MenuItem icone={<IconNumbers/>} texto="Básico" url="/basico" />
        <MenuItem icone={<IconShoppingCart/>} texto="Loja" url="/loja" />
      </div>
    </div>
  );
}
