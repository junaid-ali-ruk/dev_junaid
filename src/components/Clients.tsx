import { companies, testimonials } from "../data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Clients = () => {
    return (
        <section id="testimonials" className="py-20">
            <h1 className="heading">
                Kind words from
                <span className="text-purple"> satisfied clients</span>
            </h1>

            <div className="flex flex-col items-center max-lg:mt-10">
                <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
                    <InfiniteMovingCards
                        items={testimonials}
                        direction="right"
                        speed="slow"
                    />
                </div>
                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 max-lg:mt-10">
                    {companies.map((company) => (
                        <div key={company.id} className="flex group cursor-pointer">
                            <div className="relative w-32 h-16 md:w-40 md:h-20 flex items-center justify-center p-3 rounded-xl glass-morphism-light transform transition-all duration-300 group-hover:scale-110 group-hover:bg-white/10 shadow-lg">
                                <img
                                    src={company.img}
                                    className="w-10 h-10 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                                    alt="company"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Clients;
