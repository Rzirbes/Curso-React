interface MenuLabelProps{
    text: string
}

export default function MenuLabel(props: MenuLabelProps){
    return(
        <div className="ml-4 mt-8 mb-3 uppercase text-sm">
            <span className=" font-semibold text-xs">{props.text}</span>
        </div>
    )
}