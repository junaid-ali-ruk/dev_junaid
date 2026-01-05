import { useState, type ReactNode } from "react";
import { IoCopyOutline } from "react-icons/io5";

import { cn } from "../../lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import MagicButton from "../MagicButton";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    id,
    title,
    description,
    img,
    imgClassName,
    titleClassName,
    spareImg,
}: {
    className?: string;
    id: number;
    title?: string | ReactNode;
    description?: string | ReactNode;
    img?: string;
    imgClassName?: string;
    titleClassName?: string;
    spareImg?: string;
}) => {
    const leftLists = ["React", "Next.js", "TypeScript"];
    const rightLists = ["Tailwind", "JavaScript", "HTML/CSS"];

    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        const text = "junaid.ali.ruk@gmail.com";
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
    };

    return (
        <div
            className={cn(
                "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-2xl transition duration-500 shadow-input justify-between flex flex-col space-y-4 glass-morphism",
                className
            )}
        >
            <div className={`${id === 6 && "flex justify-center"} h-full`}>
                <div className="w-full h-full absolute">
                    {img && (
                        <img
                            src={img}
                            alt={img}
                            className={cn(imgClassName, "object-cover object-center transform transition-transform duration-700 group-hover/bento:scale-110")}
                        />
                    )}
                </div>
                <div
                    className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"
                        } `}
                >
                    {spareImg && (
                        <img
                            src={spareImg}
                            alt={spareImg}
                            className="object-cover object-center w-full h-full transform transition-transform duration-700 group-hover/bento:translate-x-2"
                        />
                    )}
                </div>
                {id === 6 && (
                    <BackgroundGradientAnimation>
                        <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
                    </BackgroundGradientAnimation>
                )}

                <div
                    className={cn(
                        titleClassName,
                        "group-hover/bento:translate-x-2 transition duration-500 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
                    )}
                >
                    <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10 group-hover/bento:text-white transition-colors duration-300">
                        {description}
                    </div>
                    <div
                        className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10 group-hover/bento:text-purple transition-colors duration-300`}
                    >
                        {title}
                    </div>

                    {/* Tech stack list div */}
                    {id === 3 && (
                        <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
                            <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                                {leftLists.map((item, i) => (
                                    <span
                                        key={i}
                                        className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E] glass-morphism-light hover:bg-black-200 transition-colors"
                                    >
                                        {item}
                                    </span>
                                ))}
                                <span className="lg:py-4 lg:px-3 py-4 px-3 rounded-lg text-center bg-[#10132E] glass-morphism-light"></span>
                            </div>
                            <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                                <span className="lg:py-4 lg:px-3 py-4 px-3 rounded-lg text-center bg-[#10132E] glass-morphism-light"></span>
                                {rightLists.map((item, i) => (
                                    <span
                                        key={i}
                                        className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E] glass-morphism-light hover:bg-black-200 transition-colors"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                    {id === 6 && (
                        <div className="mt-5 relative">
                            <MagicButton
                                title={copied ? "Email is Copied!" : "Copy my email address"}
                                icon={<IoCopyOutline />}
                                position="left"
                                handleClick={handleCopy}
                                otherClasses="!bg-[#161A31]"
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
