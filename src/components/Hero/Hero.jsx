import heroImg from "../../assets/images/shoes.png";
import subImg from "../../assets/images/shose1.webp";
import subimge2 from "../../assets/images/shoes2.webp";
import subimg3 from "../../assets/images/shose3.png";
import { useState } from "react";

const Hero = () => {
  const [changeImg, setchangeImg] = useState(heroImg);
  const [title, settitle] = useState("JORDAN 1 RE");
  const [color, setcolor] = useState("red");
  return (
    <section className="bg-primary text-white relative">
      <div className="container grid grid-cols-1 md:grid-cols-3 min-h-[700px] md:gap-32">
        {/* Brand info */}
        <div className="flex flex-col justify-end py-14 md:py-20">
          <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
            <h1 className="text-3xl uppercase font-semibold">{title}</h1>
          </div>

          <p className="select-none">
            release date
            <br />
            10/08/2024
            <br />
            color way
            <br />
            {color}
          </p>

          <div className="max-w-[250px] space-y-3 mx-auto md:mx-0">
            <p>select size (IN)</p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start relative z-10">
              <button className="size-box">sm</button>
              <button className="size-box">md</button>
              <button className="size-box">lg</button>
              <button className="size-box">xl</button>
              <button className="size-box">8</button>
              <button className="size-box">9</button>
              <button className="size-box">10</button>
              <button className="size-box">11</button>
              <button className="size-box">12</button>
              <button className="size-box">13</button>
            </div>
          </div>
        </div>

        {/* Hero img */}
        <div className="flex flex-col justify-between items-center relative gap-16">
          <img
            src={changeImg}
            alt="Hero"
            className="max-w-[400px] md:max-w-[500px] relative z-10 brightness-110 select-none"
          />

          {/* small hero img */}
          <div className="flex flex-wrap justify-center items-center space-x-6">
            <img
              src={heroImg}
              alt="subimg"
              className="w-[80px] hover:cursor-pointer select-none"
              onClick={() => {
                setchangeImg(heroImg), setcolor("red"), settitle("JORDAN 1 RE");
              }}
            />
            <img
              src={subImg}
              alt="subimg"
              className="w-[80px] hover:cursor-pointer select-none"
              onClick={() => {
                setchangeImg(subImg), setcolor("green"), settitle(" GORE-TEX");
              }}
            />
            <img
              src={subimge2}
              alt="subimg"
              className="w-[80px]  hover:cursor-pointer select-none"
              onClick={() => {
                setchangeImg(subimge2),
                  setcolor("white"),
                  settitle("Pegasus Trail 5");
              }}
            />
            <img
              src={subimg3}
              alt="subimg"
              className="w-[80px]  hover:cursor-pointer select-none"
              onClick={() => {
                setchangeImg(subimg3),
                  setcolor("green"),
                  settitle("Trail 5 GORE-TEX");
              }}
            />
          </div>
        </div>

        {/* Brand description */}

        <div className="flex flex-col justify-end lg:px-8 py-16">
          <p className="text-sm select-none">
            Jordan 1 Red is a classic sneaker from the Jordan brand. This iconic
            shoe features a classic leather upper, a high-top, and a rubber
            outsole. The shoe is made with a durable rubber sole and is
            available in various colorways, including red.
          </p>
        </div>
      </div>

      {/* bg text */}

      <h1 className="text-center text-[140px] md:text-[110px] lg:text-[150px] xl:text-[240px] font-bold font-anton absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white z-[2] select-none">
        OFFSIDE
      </h1>
      <div className="h-[500px] w-[500px] bg-white/45 blur-3xl rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
    </section>
  );
};

export default Hero;
