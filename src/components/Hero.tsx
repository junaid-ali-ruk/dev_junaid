import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
    return (
        <div className="pb-20 pt-36 relative overflow-hidden w-full">
            <div className="absolute inset-0 z-0 mesh-gradient animate-mesh opacity-20" />

            <div>
                <Spotlight
                    className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
                    fill="white"
                />
                <Spotlight
                    className="h-[80vh] w-[50vw] top-10 left-full"
                    fill="purple"
                />
                <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
            </div>

            <div
                className="h-full w-full bg-black-100 bg-grid-white/[0.03]
        absolute top-0 left-0 flex items-center justify-center"
            >
                <div
                    className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black-100
          [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
                />
            </div>

            <div className="flex justify-center relative my-10 z-10 w-full">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center animate-float">
                    <p className="uppercase tracking-[0.3em] text-[10px] md:text-xs text-center text-blue-100 max-w-80 font-medium">
                        Fullstack Developer specializing in Modern Web Technologies
                    </p>

                    <TextGenerateEffect
                        words="Building Exceptional Digital Experiences with React & Next.js"
                        className="text-center text-[40px] md:text-5xl lg:text-6xl font-bold leading-tight"
                    />

                    <p className="text-center md:tracking-wider mb-8 text-sm md:text-lg lg:text-xl text-white-100 mt-4 max-w-2xl">
                        Hi! I'm Junaid, a passionate Fullstack Developer crafting beautiful,
                        responsive, and performant web applications.
                    </p>

                    <a href="https://github.com/junaid-ali-ruk" className="group">
                        <MagicButton
                            title="View My Work"
                            icon={<FaLocationArrow className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                            position="right"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
