export default function Conteudo(props: any){
    return(
        <div className={`
            flex justify-start items-start
            p-4
            text-3xl
            bg-zinc-900
            flex-1
            lis
            
        `}>
            {props.children}
        </div>
    )
}