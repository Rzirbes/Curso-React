import { IconAspectRatio, IconBox, IconBoxMargin, IconBoxPadding, IconBrandTailwind, IconComponents, IconDeviceIpad, IconDimensions, IconFileText, IconGridDots, IconHome, IconLayout2, IconLayoutBoardSplit, IconLayoutGrid, IconLineHeight, IconRulerMeasure, IconRulerMeasure2, IconSpacingHorizontal, IconSwipeDown, IconTableExport } from "@tabler/icons-react";
import MenuItem from "./MenuItem";
import MenuLabel from "./MenuLabel";
import Logo from "../template/Logo";

interface MenuProps {
    className?: string
    titulo?: string
}

export default function Menu(props: MenuProps) {
    return (
        <div className={`${props.className}`}>
            <Logo icon={<IconBrandTailwind />} titulo="Reac Tailwind"/>
            <MenuLabel text="conceitos" />
            <MenuItem url='../conceitos/classes'  text="Tudo é Classe" icon={<IconFileText />} />
            <MenuItem url='../conceitos/componentes'  text="Componentes" icon={<IconComponents />} />
            <MenuItem url='../conceitos/mobile'  text="Mobile-First" icon={<IconDeviceIpad />} />
            <MenuItem url='../conceitos/pseudo'  text="Pseudo Classe" icon={<IconSwipeDown />} />

            <MenuLabel  text="box model" />
            <MenuItem url='../caixa/boxsizing'  text="Box Sizing" icon={<IconBox />} />
            <MenuItem url='../caixa/espacos'  text="Espaços" icon={<IconSpacingHorizontal />} />
            <MenuItem url='../caixa/padding'  text="Padding" icon={<IconBoxPadding />} />
            <MenuItem url='../caixa/margin'  text="Margin" icon={<IconBoxMargin />} />
            <MenuItem url='../caixa/tamanho'  text="Tamanho" icon={<IconRulerMeasure2 />} />

            <MenuLabel  text="flex" />
            <MenuItem url='../flex/inicial'  text="Resumão Flex" icon={<IconAspectRatio />} />
            <MenuItem url='../flex/redimensionamento'  text="Redimensionamento" icon={<IconDimensions />} />

            <MenuLabel  text="grid" />
            <MenuItem url='../grid/inicial'  text="Resumão Grid" icon={<IconGridDots />} />
            <MenuItem url='../grid/posicionamento'  text="Posicionamento" icon={<IconLayout2 />} />
            <MenuItem url='../grid/layout'  text="Componente Grid" icon={<IconLayoutBoardSplit />} />
            

        </div>
    )
}