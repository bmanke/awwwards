import gsap from "gsap";

import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/all";

import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    useGSAP(() => {
        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: "#clip",
                start: "center center",
                end: "+=800 center",
                scrub: 0.5,
                pin: true,
                pinSpacing: true,
            },
        });

        clipAnimation.to(".mask-clip-path", {
            width: "100vw",
            height: "100vh",
            borderRadius: 0,
        });
    });

    return (
        <div id="about" className="min-h-screen w-screen">
            <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
                <p className="font-general text-sm uppercase md:text-[10px]">
                    Welcome to HypestTeam
                </p>

                <AnimatedTitle title="Disc<b>o</b>ver the w<b>o</b>rld's l<b>a</b>rgest Sm<b>a</b>sh sc<b>e</b>ne!"
                    containerClass="mt-5 !text-black text-center"
                />

                <div className="about-subtext mt-auto">
                    <p>The world's premiere Super Smash Bros tournament provider</p>
                    <p className="text-gray-500">
                        HypestTeam unites players from countless countries and backgrounds, both
                        digital and physical, into a unified community.
                    </p>
                </div>
            </div>

            <div className="h-dvh w-screen" id="clip">
                <div className="mask-clip-path about-image">
                    <img
                        src="img/about.jpg"
                        alt="Background"
                        className="absolute left-0 top-0 size-full object-cover h-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default About;