"use client";

import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <section>
      <div className="lg:flex lg:justify-around lg:mx-20">
        <div className="order-last rounded-full bg-[#181818] mx-auto mb-8 lg:mt-0 w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] relative">
          <Image
            src="/images/hero.png"
            alt="hero-image"
            className="rounded-full w-full h-full object-cover"
            layout="fill"
          />
        </div>
        <div className="w-full place-self-center text-center lg:text-left">
          <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4">
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-800">
              Hello, I'm
            </div>
            <TypeAnimation
              className="text-white"
              sequence={["Yolana Vichesa", 1000, "A Web Developer", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
          <div>
            <button className="w-full sm:w-fit mr-4 px-6 py-3 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-800 text-white hover:bg-slate-800">
              <Link href="https://wa.me/+6285643209151">Hire me!</Link>
            </button>
            <button className="px-1 py-1 w-full sm:w-fit mt-3 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-800 hover:bg-slate-800">
              <Link
                href="/doc/cv.pdf"
                className="bg-[#121212] hover:bg-slate-800 rounded-full block px-2 py-2"
              >
                Download CV
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
