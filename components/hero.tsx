import Image from "next/image";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <div className="mt-8 md:mt-12 flex justify-center">
      <div
        className="w-full md:max-w-[70%] rounded-3xl overflow-hidden md:flex md:items-center relative"
        style={{
          backgroundImage: "url('/img/hero.jpg')",
          backgroundSize: "contain",
          backgroundPosition: "center",
          padding: "4%",
        }}
      >
        <div className="md:w-1/2 text-center md:text-left md:px-8">
          <Image
            className="mb-3 rounded-full border border-zinc-800"
            src="https://cdn.discordapp.com/avatars/359498825150365699/b7bdccd61b31faac435d27de3f9eb1c4.webp"
            alt="Dylan James"
            width={150}
            height={150}
          />

          <div className="text-gray-300 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-4">
              Dylan James
            </h1>
            <p className="text-lg font-semibold text-gray-200 mb-8 bg-black w-max  py-1 px-1">
              Network Engineer and Software Developer
            </p>
            <div className="flex flex-col md:flex-row justify-center md:justify-start">
              <Link
                href="https://tritan.gg/network"
                className="text-white font-semibold py-3 px-6 rounded-lg shadow-md inline-block border border-indigo-800 mb-4 md:mb-0 md:mr-4"
                style={{ minWidth: "150px", textAlign: "center" }}
              >
                Network
              </Link>
              <Link
                href="https://github.com/team-tritan"
                className="text-white font-semibold py-3 px-6 rounded-lg shadow-md inline-block border border-indigo-800"
                style={{ minWidth: "150px", textAlign: "center" }}
              >
                Github
              </Link>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <div className="mt-8">
            <img src="https://spotify-recently-played-readme.vercel.app/api?user=c36ygm5hg7d35z2e445a4ig7u&count=4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
