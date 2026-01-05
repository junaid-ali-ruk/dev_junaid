import { type ReactNode } from "react";

const MagicButton = ({
    title,
    icon,
    position,
    handleClick,
    otherClasses,
}: {
    title: string;
    icon: ReactNode;
    position: string;
    handleClick?: () => void;
    otherClasses?: string;
}) => {
    return (
        <button
            className="relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group"
            onClick={handleClick}
        >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

            <span
                className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
            bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 transition-colors group-hover:bg-slate-900 ${otherClasses}`}
            >
                {position === "left" && icon}
                {title}
                {position === "right" && icon}
            </span>
            <div className="absolute inset-0 rounded-lg blur-xl bg-purple/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        </button>
    );
};

export default MagicButton;
