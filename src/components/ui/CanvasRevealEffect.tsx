import { cn } from "../../lib/utils";
import { useEffect, useRef, useState, useMemo } from "react";

export const CanvasRevealEffect = ({
    animationSpeed = 0.4,
    opacities = [0.3, 0.3, 0.3, 0.5, 0.5, 0.5, 0.8, 0.8, 0.8, 1],
    colors = [[0, 255, 255]],
    containerClassName,
    dotSize,
    showGradient = true,
}: {
    animationSpeed?: number;
    opacities?: number[];
    colors?: number[][];
    containerClassName?: string;
    dotSize?: number;
    showGradient?: boolean;
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const updateSize = () => {
            if (containerRef.current) {
                setCanvasSize({
                    width: containerRef.current.offsetWidth,
                    height: containerRef.current.offsetHeight,
                });
            }
        };

        updateSize();
        window.addEventListener("resize", updateSize);
        return () => window.removeEventListener("resize", updateSize);
    }, []);

    return (
        <div className={cn("h-full relative w-full", containerClassName)}>
            <div className="h-full w-full" ref={containerRef}>
                {canvasSize.width > 0 && (
                    <DotMatrix
                        width={canvasSize.width}
                        height={canvasSize.height}
                        colors={colors}
                        opacities={opacities}
                        dotSize={dotSize}
                        animationSpeed={animationSpeed}
                    />
                )}
            </div>
            {showGradient && (
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-[84%]" />
            )}
        </div>
    );
};

interface DotMatrixProps {
    width: number;
    height: number;
    colors: number[][];
    opacities: number[];
    dotSize?: number;
    animationSpeed: number;
}

const DotMatrix = ({
    width,
    height,
    colors,
    opacities,
    dotSize = 3,
    animationSpeed,
}: DotMatrixProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [animationProgress, setAnimationProgress] = useState(0);

    const dots = useMemo(() => {
        const spacing = dotSize * 3;
        const cols = Math.floor(width / spacing);
        const rows = Math.floor(height / spacing);
        const result = [];

        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                const delay = Math.random() * 5;
                const colorIndex = Math.floor(Math.random() * colors.length);
                const opacityIndex = Math.floor(Math.random() * opacities.length);
                result.push({
                    x: i * spacing + spacing / 2,
                    y: j * spacing + spacing / 2,
                    delay,
                    color: colors[colorIndex],
                    opacity: opacities[opacityIndex],
                });
            }
        }
        return result;
    }, [width, height, colors, opacities, dotSize]);

    useEffect(() => {
        let animationFrame: number;
        const startTime = Date.now();

        const animate = () => {
            const elapsed = (Date.now() - startTime) / 1000;
            setAnimationProgress(elapsed * animationSpeed);
            animationFrame = requestAnimationFrame(animate);
        };

        animate();
        return () => cancelAnimationFrame(animationFrame);
    }, [animationSpeed]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        ctx.clearRect(0, 0, width, height);

        dots.forEach((dot) => {
            const progress = Math.max(0, animationProgress - dot.delay);
            const currentOpacity = Math.min(dot.opacity, progress);

            if (currentOpacity > 0) {
                ctx.beginPath();
                ctx.arc(dot.x, dot.y, dotSize / 2, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${dot.color[0]}, ${dot.color[1]}, ${dot.color[2]}, ${currentOpacity})`;
                ctx.fill();
            }
        });
    }, [animationProgress, dots, width, height, dotSize]);

    return (
        <canvas
            ref={canvasRef}
            width={width}
            height={height}
            className="h-full w-full"
        />
    );
};
