"use client"
import Image from "next/image";
import { Sparkles, Stethoscope, Home, ShieldCheck } from "lucide-react";
import { useModal } from "../ModalProvider";

export default function FacilitySection() {

  const { openModal } = useModal();

    const features = [
  {
    icon: Sparkles,
    text: "Clean & hygienic rooms",
  },
  {
    icon: Stethoscope,
    text: "Medical equipment on-site",
  },
  {
    icon: Home,
    text: "Comfortable, home-like feel",
  },
  {
    icon: ShieldCheck,
    text: "Infection control protocols",
  },
];

const safe =[
  {
    img: "/Safe_1.png",
    text: "Experienced doctors & nurses",
  },
  {
    img: "/Safe_2.png",
    text: "24/7 monitoring",
  },
  {
    img: "/Safe_3.png",
    text: "Personalized recovery plans",
  },
  {
    img: "/Safe_4.png",
    text: "Safe environment",
  },
]
  return (
    <div className="bg-white py-16 px-6 md:px-16">

      {/* TOP TEXT */}
      <div className="max-w-7xl mx-auto mb-10 ">
        <p className="text-[#2f3b7c] font-semibold uppercase text-sm tracking-wider bg-blue-100 p-1 max-w-[120px] rounded-sm">
          Our Facility
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 leading-tight">
          A place designed for healing  <br /> not waiting.
        </h2>

        <p className="text-gray-500 mt-3 max-w-xl">
          Spacious rooms, natural light, medical-grade hygiene and thoughtful
          little details that help patients rest and recover.
        </p>
      </div>

      {/* IMAGE GRID */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
 
        {/* LEFT BIG IMAGE */}
        <div className="relative rounded-2xl overflow-hidden shadow-md h-[665px] ">
          <Image
            src="https://static.prod-images.emergentagent.com/jobs/20a27312-c5fe-4787-ba9d-150065465002/images/c63ed3a81677f8434ca3e5cc210e0ed2bd4d4dfe1412bad0fd432435424fa7f6.png"
            alt="room"
            width={800}
            height={400}
            className="w-full h-full object-cover"
          />

          {/* Overlay label */}
          <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow text-sm">
            <p className="font-semibold text-[#2f3b7c]">
              Private recovery rooms
            </p>
            <p className="text-xs text-gray-500">
              With attendant bed
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-6">

          {/* TOP IMAGE */}
          <div className="rounded-2xl overflow-hidden shadow-md h-[320px]">
            <Image
              src="https://images.unsplash.com/photo-1710698936989-500f359c6482"
              alt="hospital"
              width={400}
              height={250}
              className="w-full h-full object-cover"
            />
          </div>

          {/* BOTTOM IMAGE */}
          <div className="rounded-2xl overflow-hidden shadow-md h-[320px]">
            <Image
              src="https://images.pexels.com/photos/20860587/pexels-photo-20860587.jpeg"
              alt="therapy"
              width={400}
              height={250}
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>

      {/* FEATURES BAR */}
      <div className="max-w-6xl mx-auto mt-10 grid md:grid-cols-4 gap-4">
        {features.map((item, i) => {
        const Icon = item.icon;
        return (
          <div
            key={i}
            className="flex items-center gap-3  rounded-xl px-5 py-3 bg-white shadow-sm hover:shadow-md transition"
          >
            <Icon className="text-[#2f3b7c]" size={18}  />
            <span className="text-sm font-medium text-gray-700">
              {item.text}
            </span>
          </div>
        );
      })}
      </div>

      {/* SAFE BAR */}
      <div className="relative p-8 mt-16">
    <h1 className="text-center sec-h2 text-[#22497D] font-bold text-[17px] uppercase">Safe & Reliable Recovery Care</h1>
    <h2 className="text-center my-3 text-2xl font-bold">We ensure your loved one receives continuous care until full recovery.</h2>
<div className="w-full bg-gray-100 py-6 mt-4">
  <div className="max-w-7xl mx-auto flex flex-wrap md:flex-nowrap justify-between items-center gap-6 px-4">

    {safe.map((item, i) => (
      <div
        key={i}
        className="flex items-center gap-4 w-full md:w-auto justify-center md:justify-start"
      >
        {/* ICON */}
        <div className="w-15 h-12 relative">
          <Image
            src={item.img}
            alt={item.text}
            fill
            className="object-contain"
          />
        </div>

        {/* TEXT */}
        <p className="text-sm md:text-base font-medium text-gray-600 whitespace-nowrap">
          {item.text}
        </p>

        {/* DIVIDER (last item pe nahi) */}
        {i !== safe.length - 1 && (
          <div className="hidden md:block h-10 w-px bg-gray-400 ml-4"></div>
        )}
      </div>
    ))}

  </div>
</div>
<button onClick={openModal} className="bg-[#22497D] p-4 rounded-sm absolute left-[45%] my-4 text-amber-50 cursor-pointer">GET IN TOUCH</button>
</div>

    </div>
  );
}