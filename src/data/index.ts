export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
];

export const gridItems = [
    {
        id: 1,
        title: "I prioritize client collaboration, fostering open communication ",
        description: "",
        className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
        imgClassName: "w-full h-full",
        titleClassName: "justify-end",
        img: "/b1.svg",
        spareImg: "",
    },
    {
        id: 2,
        title: "I'm very flexible with time zone communications",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "",
        spareImg: "",
    },
    {
        id: 3,
        title: "My tech stack",
        description: "I constantly try to improve",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-center",
        img: "",
        spareImg: "",
    },
    {
        id: 4,
        title: "Tech enthusiast with a passion for development.",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "/grid.svg",
        spareImg: "/b4.svg",
    },

    {
        id: 5,
        title: "Currently building modern web applications",
        description: "The Inside Scoop",
        className: "md:col-span-3 md:row-span-2",
        imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
        titleClassName: "justify-center md:justify-start lg:justify-center",
        img: "/b5.svg",
        spareImg: "/grid.svg",
    },
    {
        id: 6,
        title: "Do you want to start a project together?",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-center md:max-w-full max-w-60 text-center",
        img: "",
        spareImg: "",
    },
];

export const projects = [
    {
        id: 1,
        title: "E-Commerce Platform",
        des: "A full-featured e-commerce solution built with Next.js, featuring product management, cart functionality, and secure checkout with Stripe integration.",
        img: "/p1.png",
        iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/next.svg", "/fm.svg"],
        link: "https://tulos-ecommerce-eight.vercel.app",
    },
    {
        id: 2,
        title: "Blog Platform",
        des: "A full featured blog platform built with Next.js with post management, and a responsive design.",
        img: "/p2.png",
        iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
        link: "https://bookwarm-jet.vercel.app/",
    },
    {
        id: 3,
        title: "Public Birthday finder",
        des: "I built Public Birthday Finder, a modern, high-performance web app designed to be a public registry for birthdays with real-time Time Alive statistics. ",
        img: "/p3.png",
        iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
        link: "https://publicbirthday.vercel.app",
    },
    {
        id: 4,
        title: "3d gaming website",
        des: "A 3d gaming website built with Reactjs and GSAP",
        img: "/p4.png",
        iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/gsap.svg"],
        link: "https://3d-website-opal.vercel.app/",
    },
    {
        id: 5,
        title: "Fitness website",
        des: "I built a fitness website with premium design and a responsive design. ",
        img: "/p5.png",
        iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
        link: "https://befit-zeta.vercel.app",
    },
    {
        id: 6,
        title: "gaming website",
        des: "I built a gaming website with premium design and a responsive design. ",
        img: "/p6.png",
        iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/gsap.svg"],
        link: "https://gaming-website-inky-nine.vercel.app/",
    },
];

export const testimonials = [
    {
        quote:
            "Working with Junaid was an incredible experience. His expertise in React and Next.js helped us build a scalable platform that exceeded our expectations. His attention to detail and commitment to clean code is remarkable.",
        name: "Sarah Chen",
        title: "CTO of TechStartup Inc",
    },
    {
        quote:
            "Junaid delivered our project ahead of schedule with exceptional quality. His deep understanding of modern JavaScript and Tailwind CSS resulted in a beautiful, performant website that our users love.",
        name: "Michael Roberts",
        title: "Product Manager at WebAgency",
    },
    {
        quote:
            "The fullstack architecture Junaid designed for our application was elegant and maintainable. His expertise in React best practices and component design significantly improved our development workflow.",
        name: "Emily Watson",
        title: "Lead Developer at DevStudio",
    },
    {
        quote:
            "Junaid brought our vision to life with his exceptional skills in HTML, CSS, and JavaScript. The responsive design works flawlessly across all devices. Highly recommended!",
        name: "David Kim",
        title: "Founder of DigitalCraft",
    },
    {
        quote:
            "Outstanding work on our Next.js project! Junaid's code quality and performance optimizations made a significant difference. He's a true professional who delivers results.",
        name: "Jessica Lee",
        title: "VP of Engineering at CloudTech",
    },
];

export const companies = [
    {
        id: 1,
        img: "/re.svg",
    },
    {
        id: 2,
        img: "/next.svg",
    },
    {
        id: 3,
        img: "/tail.svg",
    },
    {
        id: 4,
        img: "/ts.svg",
    },
    {
        id: 5,
        img: "/fm.svg",
    },
];

export const workExperience = [
    {
        id: 1,
        title: "Fullstack Developer",
        desc: "Developed and maintained responsive web applications using React, Next.js, and Tailwind CSS. Implemented modern UI/UX designs and optimized performance for better user experience.",
        className: "md:col-span-2",
        thumbnail: "/exp1.svg",
    },
    {
        id: 2,
        title: "React Developer",
        desc: "Built reusable component libraries and implemented state management solutions. Collaborated with cross-functional teams to deliver high-quality features on time.",
        className: "md:col-span-2",
        thumbnail: "/exp2.svg",
    },
    {
        id: 3,
        title: "Full Stack Developer",
        desc: "Created full-stack applications with Next.js and integrated REST APIs. Implemented authentication, database operations, and server-side rendering for optimal performance.",
        className: "md:col-span-2",
        thumbnail: "/exp3.svg",
    },
    {
        id: 4,
        title: "Web Developer",
        desc: "Designed and developed websites using HTML, CSS, and JavaScript. Focused on creating accessible, SEO-friendly, and mobile-responsive web experiences.",
        className: "md:col-span-2",
        thumbnail: "/exp4.svg",
    },
];

export const socialMedia = [
    {
        id: 1,
        img: "/git.svg",
        link: "https://github.com/junaid",
    },
    {
        id: 2,
        img: "/link.svg",
        link: "https://linkedin.com/in/junaid",
    },
    {
        id: 3,
        img: "/wha.svg",
        link: "https://wa.me/923292876526",
    },
];
