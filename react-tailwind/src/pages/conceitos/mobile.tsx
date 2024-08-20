export default function Mobile() {

    // "xs" sm md lg 2xl
    return (
        <div className="
            flex justify-center
            items-center h-48
            text-3xl bg-red-500 md:text-5xl lg:text-6xl
            w-[90%] 2xl:w-[70%]
        ">
            <span className="inline sm:hidden">Mobile</span>
            <span className="hidden sm:inline">Não Mobile</span>
        </div>
    )
}