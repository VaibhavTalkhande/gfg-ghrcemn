
import { Vortex } from "./ui/vortex";


export function VortexDemo() {
  return (
    <div className=" mx-auto rounded-md  h-[30rem] z-1 flex mt-1 overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-green-500 text-2xl md:text-6xl font-bold text-center">
            Geeks for Geeks
        </h2>
        <p className="text-white font-mono text-sm md:text-2xl max-w-xl mt-6 text-center">
            GHRCEMN STUDENT CHAPTER
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <button className="px-4 py-2 bg-green-500 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
            join now
          </button>
          <button className="px-4 py-2  text-white ">Watch trailer</button>
        </div>
      </Vortex>
    </div>
  );
}



const HeroSection = () => {
    return (
        <div className="overflow-hidden">
        <VortexDemo />
        </div>
    );
    }

export default HeroSection;