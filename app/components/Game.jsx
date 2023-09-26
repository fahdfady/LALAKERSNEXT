import Image from "next/image";

export default function Game() {
    return (
        <section className="game w-8/12 m-auto">
            <div className="section-title">
                <h2>Latest game</h2>
            </div>

            <div className="widget flex flex-col justify-evenly items-center text-center sm:flex-row md:px-5">
                <div className="team w-[220px] flex flex-col justify-center items-center gap-3">
                    <Image src="/logo.png" width={240} height={150} />
                    <h3 className="uppercase text-xl">los angeles lakers</h3>
                </div>
                <div className="w-[300px] flex flex-col justify-center items-center gap-5">
                    <h3 className="match-type text-stone-400">
                        FINAL
                    </h3>
                    <div className="score font-bold text-6xl text-yellow-400 tracking-[.45rem]">
                        <span>122</span>
                        -
                        <span>101</span>
                    </div>
                    <div className="stadium flex flex-col justify-center items-center">
                        <h3 className="text-stone-50">Staples center</h3>
                        <h3 className="text-stone-400">Los Angeles</h3>
                    </div>
                </div>
                <div className="team w-[220px] flex flex-col justify-center items-center gap-3">
                    <Image src="/gswlogo.png" width={150} height={150} />
                    <h3 className="uppercase text-xl">golden state warriors</h3>
                </div>
            </div>
        </section>
    )
}