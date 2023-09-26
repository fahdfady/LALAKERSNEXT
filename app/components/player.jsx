import Image from "next/image";

export default async function Player({ data }) {

  return (
    <div
      key={data.id}
      tabindex="0"
      className="player flex justify-center items-end relative lg:w-[20.5rem] lg:h-[25rem] md:w-[10.5rem] md:h-[16rem] sm:w-[19rem] sm:h-[21rem] w-[8.5rem] h-[13rem] max-w-sm  border rounded-lg shadow bg-[#0c0600] border-gray-700">
      <Image
        className="mx-auto object-cover duration-200 ease-in-out"
        src={`/players/${data?.image}`}
        width={342}
        height={250}
        quality={80}
        placeholder="blur"
        blurDataURL="https://cdn.nba.com/headshots/nba/latest/1040x760/logoman.png"
        alt={`${data?.firstname} ${data?.nickname} in the lakers jersy`}
      />
      {/* 42004b4a */}
      <div className="layer absolute w-full h-full duration-200 opacity-0 flex items-start">
        {/* 5a0081 00  553e00*/}
        <div className="description text-center lg:px-2 lg:py-4 w-full h-unset max-h-[50%] bg-[#553e00] rounded-t-lg flex flex-col justify-center items-center gap-2 py-1">
          <h2 className="max-md:text-xs">{data?.role}</h2>
          <h1 className=" max-md:text-sm uppercase font-semibold">{data?.firstname} <span className="text-yellow-500 max-lg:block">{data?.nickname}</span></h1>
          <h1 className="max-md:text-xl font-semibold text-yellow-500">{data?.id}</h1>
        </div>
      </div>
    </div>
  )
}