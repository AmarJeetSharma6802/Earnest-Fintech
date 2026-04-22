"use client"
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
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
  const stats = [
  { value: 70, suffix: "%+", label: "Success Rate" },
  { value: 1000, suffix: "+", label: "Happy Patients" },
  { value: 10, suffix: "+", label: "Cities" },
  { value: 25, suffix: "+", label: "Doctors" },
];



const [start, setStart] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStart(true);
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

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
        <div className="w-1/2 flex items-center justify-between">
          <Image src="https://images.pexels.com/photos/36035002/pexels-photo-36035002.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" width={350} height={300} className="w-full h-[480px] rounded-4xl " />
        </div>
        <div className="w-1/2">
        <h2 className="text-[#22497D] uppercase  text-[13px] bg-blue-200 p-1 absolute rounded-sm">The bridge between hospital and home</h2>
        <h1 className="text-[2.8rem] leading-12 font-bold py-3 mt-5">A calmer, safer way to recover <span className="text-[#22497D]"> supervised, structured, warm.</span></h1>
        <p className="text-[18px] max-w-[580px] text-gray-500">Transition Care Center is a specialised recovery facility for patients who are stable enough to leave the hospital but still need continuous medical care. We deliver clinical precision with the warmth of a home, so recovery doesn't stall the moment discharge papers are signed.</p>
        <div className="pt-2">
          <ul>
            <li className="flex gap-3 py-1  text-gray-500"><CheckCircle className="text-[#22497D]" />Hospital-grade care without the hospital chaos</li>
            <li  className="flex gap-3 py-1 text-gray-500"><CheckCircle className="text-[#22497D]" />Structured recovery protocols for faster healing</li>
            <li className="flex gap-3 py-1 text-gray-500"><CheckCircle className="text-[#22497D]" />Your family focuses on presence, not procedures</li>
            <li className="flex gap-3 py-1 text-gray-500"><CheckCircle className="text-[#22497D]" />Lower risk of readmission and infection</li>
          </ul>
        </div>
        <button className="p-4 bg-[#22497D] text-amber-50 mt-3 rounded-2xl text-[18px] cursor-pointer">How can help you</button>

        </div>

      </div>

      <div className="bg-[#2f3b7c] py-10">
  <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center text-white">

    {stats.map((item, i) => (
      <div key={i} className="flex flex-col items-center justify-center ">

        <div className={`px-4 py-2 rounded-md ${item.label === "Cities" ? "bg-blue-300" : ""}`}>
          <h2 className="text-6xl md:text-5xl font-bold leading-none font-bold ">
            {item.value}{item.suffix}
          </h2>
        </div>

        <p className="mt-2 text-lg opacity-90 leading-snug">
          {item.label}
        </p>

      </div>
    ))}

  </div>
</div>

    </div>
  );
}

export default SecondSection;
