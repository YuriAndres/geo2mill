import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { cn } from "@/utils/cn";

const Hero = () => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center">

      <div className="absolute inset-0 dark:bg-black-100 bg-white dark:bg-grid-white/[0.3] bg-grid-black/[0.2]"></div>

      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center, transparent_20%,black)]"></div>

      <div className="absolute inset-0">
        <Spotlight className="-top-40 -left-10 md:-left-40 md:-top-20 h-screen" fill="white" />
        <Spotlight className="top-10 left-150 h-[80vh] w-[50vw]" fill="purple" />
        <Spotlight className="top-28 left-8 h-[40vh] w-[50vw]" fill="blue" />
      </div>

      <div className="relative z-10 flex justify-center my-20">
        <div className='max-w-[90vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-120">
            Analytics SaaS AI-powered for mine-output upturn.
          </h2>

          <TextGenerateEffect className="text-center text-[21px] md:text-[28px] lg:text-[35px] font-bold"
            words="Geo2Mill is the worst way to do Mining... except for all other ways that have been tried."/>

          <p className="text-center md:tracking-wider mb-20 text-sm md:text-lg lg:text-xl">Turn your data into value by optimizing your mine-to-mill chain in months, not years.</p>

          <a href="#services">
            <MagicButton
              title="View Services"/>
          </a>

        </div>
      </div>
    </div>
  );
};

export default Hero;