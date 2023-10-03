'use client'

import Image from "next/image";

const fetchSeasonsData = async () => {
    const res = await fetch('https://6519c76d340309952f0cb6ee.mockapi.io/seasons');

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json()
}

export default async function About() {
    /*
    Here is a summary of the Lakers’ seasons from 1974-75 to 1977-78:

1974-75: The Lakers finished with 30 wins and 52 losses, their first losing season in eight years and their first time missing the playoffs in 17 years. They were led by Gail Goodrich (23.3 points per game) and Elmore Smith (12.6 rebounds per game), but lost Wilt Chamberlain to retirement after the season12.
1976-77: The Lakers bounced back with a league-best 53 wins and 29 losses, winning the Pacific Division and earning the top seed in the Western Conference. They were coached by Jerry West, who replaced Bill Sharman, and featured Kareem Abdul-Jabbar, who won his second straight MVP award with 26.2 points, 13.3 rebounds, and 3.2 blocks per game. However, they were upset by the Seattle SuperSonics in the first round of the playoffs, losing in three games345.
1977-78: The Lakers had another solid season with 45 wins and 37 losses, finishing fourth in the Pacific Division and fifth in the Western Conference. They added Adrian Dantley, who averaged 19.4 points per game, and Norm Nixon, who averaged 13.7 points and 6.8 assists per game. They faced the SuperSonics again in the first round of the playoffs, but lost in three games once more678.
    
    Here is a possible summary of the Lakers’ 22-23 season in 18 words:

Lakers fired Vogel, hired Ham, reached conference finals, lost to Nuggets. James broke scoring record12*/

    const seasons = await fetchSeasonsData();

    return (
        <section className="about text-center lg:px-4 px-2">
            <div className="section-title">
                <h1>team history</h1>
                <p>From Minneapolis to Los Angeles: The Lakers’ Legacy of Excellence</p>
                <Image src={'/logo.png'} width={160} height={102} alt="Los Angeles Lakers logo" />
            </div>

            <article className="history max-w-screen-lg mx-auto">
                <div className="section-title">
                    <h2>our history</h2>
                </div>
                <p>The Lakers are one of the most successful and storied franchises in NBA history. They have won <span className="text-yellow-300">17 championships</span>, tied with the <span className="text-green-400">Boston Celtics</span> for the most in the league, and have featured some of the greatest players of all time, such as George Mikan, Jerry West, Wilt Chamberlain, Kareem Abdul-Jabbar, Magic Johnson, Kobe Bryant, and LeBron James. The Lakers began their journey in Minneapolis in 1947, where they won five titles in six years. They moved to Los Angeles in 1960 and continued their dominance with 12 more championships in the following decades. The Lakers have also set many NBA records, such as the longest winning streak (33 games) and the best regular season record (69–13). The Lakers are not just a basketball team, they are a cultural phenomenon that has captivated fans around the world</p>
            </article>

            <hr className="w-6/12 mx-auto my-4 text-gray-400" />
            {seasons && seasons.map((season) => (
                <>
                    <article className="max-w-screen-xl mx-auto text-start" tabIndex={0}>
                        <div className="section-title">
                            <h2 className="">the {season?.year} season</h2>
                            <p>{season?.title}</p>
                        </div>
                        <div className="flex gap-2 items-center py-2">
                            <p className="inline max-w-[800px] px-6">{season?.text}</p>
                            <Image className="inline" src={`/photos/${season?.image}`} width={350} height={373} alt={season?.imageAlt} />
                        </div>
                    </article>
                    <hr className="w-10/12 mx-auto my-4 text-gray-700" />
                </>
            ))}

        </section>
    )
}