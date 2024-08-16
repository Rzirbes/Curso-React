export default function Page() {
    const nome = 'João'
    const idade = 13
    return (
        <div>
            <div>{nome} - {idade}</div>
            <div>{2 + 4}</div>
            <div>{idade * 3}</div>
            <div>{Math.random()}</div>
        </div>
    )
}