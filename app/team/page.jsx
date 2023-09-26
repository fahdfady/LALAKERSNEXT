import Player from "../components/player";

const fetchPlayerData = async () => {
    const res = await fetch('http://localhost:8000/players');

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json()
}

export default async function Team() {
    const data = await fetchPlayerData();

    return (
        <section>
            <div className="section-title">
                <h2>lake show squad</h2>
                <p>17x champions. get to know your LA Lakers players.</p>
            </div>
            <div className="players flex flex-row flex-wrap justify-center lg:gap-7 md:gap-x-4 md:gap-y-6 gap-2 w-full lg:px-2">
                {data && data.map((playeritem) => (<Player data={playeritem} />))}
            </div>
        </section>
    )
}