import { GiSelfLove } from "react-icons/gi";
import banner from "../../assets/ice_banner1.jpg";
import milk from "../../assets/milk.webp";
import './HeroBanner.css'
import { RiChatSmileAi3Fill } from "react-icons/ri";

const HeroBanner = () => {
    return (
        <div>
            <div className='h-[280px] min-[500px]:h-[360px] bg-pink-300 mb-7 relative'>
                <div className="py-7 min-[500px]:py-14 sm:py-20 px-16 sm:px-32 text-4xl min-[500px]:text-6xl font-bold text-white banneText relative z-30">
                    <p>ICE CREAM</p>
                    <p className="-rotate-6 inline-flex">MADE WITH</p>
                    <p className="text-pink-700 flex items-center gap-1.5">LOVE <GiSelfLove /></p>
                </div>
                <div className="absolute -bottom-5 sm:-bottom-11 left-1/2 w-[400px] max-[500px]:w-[180px] max-[640px]:w-[220px] max-[900px]:w-[300px] rounded-full z-20">
                    <div className="bg-pink-200 max-[500px]:w-[140px] max-[500px]:h-[140px]  max-[640px]:w-[190px] max-[640px]:h-[190px] max-[900px]:w-[250px] max-[900px]:h-[250px] w-[350px] h-[350px] absolute right-20 max-[500px]:right-10 max-[640px]:right-15 rounded-full"></div>
                    <img src={banner} alt="image" className="w-full h-full relative" />
                </div>
                <div className="absolute -bottom-24 max-[500px]:-bottom-14 max-[900px]:-bottom-18 right-16 max-[900px]:left-0 max-[1299px]:-left-30 max-[900px]:w-[200px] w-[350px] rotate-12 z-10">
                    <div className="absolute right-20 max-[500px]:right-15 max-[900px]:right-13 top-12 max-[500px]:top-10 max-[900px]:top-7 max-[500px]:text-lg max-[900px]:text-2xl text-5xl font-bold -rotate-90 z-10 text-pink-700 flex items-center gap-1.5">Teasty <RiChatSmileAi3Fill /></div>
                    <img src={milk} alt="image" className="w-full h-full relative" />
                </div>
            </div>
        </div>
    )
}

export default HeroBanner;
