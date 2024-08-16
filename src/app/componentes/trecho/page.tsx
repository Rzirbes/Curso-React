export default function Page(){
    let trechos = [
        <div key={1}>Trecho 1</div>,
        <div key={2}>Trecho 2</div>,
        <div key={3}>Trecho 3</div>,
    ]
    return (
        <div>
            {trechos[0]}
            {trechos[1]}
            {trechos[2]}
        </div>
    )
}