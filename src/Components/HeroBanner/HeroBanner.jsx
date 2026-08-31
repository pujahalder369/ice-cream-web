import { GiSelfLove } from "react-icons/gi";
import banner from "../../assets/ice_banner1.jpg";
import milk from "../../assets/milk.webp";
import './style.css'
import { RiChatSmileAi3Fill } from "react-icons/ri";

const HeroBanner = () => {
    return (
        <div>
            <div className='h-[360px] bg-pink-300 mb-7 relative'>
                <div className="py-20 px-32 text-6xl font-bold text-white banneText">
                    <p>ICE CREAM</p>
                    <p className="-rotate-6 inline-flex">MADE WITH</p>
                    <p className="text-pink-700 flex items-center gap-1.5">LOVE <GiSelfLove /></p>
                </div>
                <div className="absolute -bottom-11 left-1/2 w-[400px] rounded-full">
                    <div className="bg-pink-200 w-[350px] h-[350px] absolute right-20 rounded-full"></div>
                    <img src={banner} alt="" className="w-full h-full relative" />
                </div>
                <div className="absolute -bottom-24 right-16 w-[350px] rotate-12">
                    <div className="absolute right-20 top-12 text-5xl font-bold -rotate-90 z-10 text-pink-700 flex items-center gap-1.5">Teasty <RiChatSmileAi3Fill /></div>
                    <img src={milk} alt="" className="w-full h-full relative" />
                </div>
            </div>
        </div>
    )
}

export default HeroBanner;
