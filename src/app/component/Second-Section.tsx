import Image from "next/image";
import React from "react";
import { CheckCircle } from "lucide-react";

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
    <div className="bg-blue-50 h-full p-5 ">
      <h2 className="relative text-[1.2rem] text-[#22497D] text-center font-bold sec-h2">
        A Safe Step Between And Home
      </h2>
      <h1 className="text-center text-2xl py-1.5 font-bold ">
        Complete Recovery & Care Services
      </h1>

      {/* <div className="grid grid-col-[repeat(4,minmax(200px ,1fr))] gap-4"> */}
      <div className="flex gap-4 p-5 h-full">
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

      <div className="max-w-8xl m-auto p-[5rem] flex gap-8">
        <div className="w-1/2">
          <Image src="https://images.pexels.com/photos/36035002/pexels-photo-36035002.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" width={350} height={300} className="w-full h-full rounded-4xl" />
        </div>
        <div className="w-1/2">
        <h2 className="text-[#22497D] uppercase font-bold text-[13px] bg-blue-200 p-1 absolute rounded-sm">The bridge between hospital and home</h2>
        <h1 className="text-[2.8rem] leading-12 font-bold py-3 mt-5">A calmer, safer way to recover <span className="text-[#22497D]"> supervised, structured, warm.</span></h1>
        <p className="text-[20px] max-w-[580px]">Transition Care Center is a specialised recovery facility for patients who are stable enough to leave the hospital but still need continuous medical care. We deliver clinical precision with the warmth of a home, so recovery doesn't stall the moment discharge papers are signed.</p>
        <div className="pt-2">
          <ul>
            <li className="flex gap-4 py-1"><CheckCircle className="text-[#22497D]" />Hospital-grade care without the hospital chaos</li>
            <li  className="flex gap-4 py-1"><CheckCircle className="text-[#22497D]" />Hospital-grade care without the hospital chaos</li>
            <li className="flex gap-4 py-1"><CheckCircle className="text-[#22497D]" />Hospital-grade care without the hospital chaos</li>
            <li className="flex gap-4 py-1"><CheckCircle className="text-[#22497D]" />Hospital-grade care without the hospital chaos</li>
          </ul>
        </div>
        </div>
      </div>
    </div>
  );
}

export default SecondSection;
