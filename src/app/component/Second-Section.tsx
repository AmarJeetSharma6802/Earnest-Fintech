import Image from "next/image";
import React from "react";

function SecondSection() {
  const secSection = [
    {
      id: 1,
      img: "/Screenshot 2026-04-21 170256.png",
      heading: "Post-Surgery Recovery Care",
      para: "We ensure your loved one receives continuous care until full recovery.",
    },
    {
      id: 2,
      img: "/Screenshot 2026-04-21 170314.png",
      heading: "24/7 monitoring",
      para: "We ensure your loved one receives continuous care until full recovery.",
    },
    {
      id: 3,
      img: "/Screenshot 2026-04-21 170328.png",
      heading: "Personalized recovery plans",
      para: "We ensure your loved one receives continuous care until full recovery.",
    },
    {
      id: 4,
      img: "/Screenshot 2026-04-21 170341.png",
      heading: "Safe environment",
      para: "We ensure your loved one receives continuous care until full recovery.",
    },
  ];
  return (
    <div className="bg-blue-50 h-screen p-5 ">
      <h2 className="relative text-[1.2rem] text-[#22497D] text-center font-bold sec-h2">
        A Safe Step Between And Home
      </h2>
      <h1 className="text-center text-2xl py-1.5 font-bold ">
        Complete Recovery & Care Services
      </h1>

      {/* <div className="grid grid-col-[repeat(4,minmax(200px ,1fr))] gap-4"> */}
      <div className="flex gap-4 p-5 ">
        {secSection.map((item) => {
          return (
            <div key={item.id} className="text-center bg-white p-2 rounded-sm">
              <div  className="flex justify-center items-center">
                <Image src={item.img} alt="" width={60} height={20}  />
              </div>
                <div className="p-4">
                    <p className="text-[#22497D] font-bold text-[18px]">{item.heading}</p>
                    <p>{item.para}</p>
                </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SecondSection;
