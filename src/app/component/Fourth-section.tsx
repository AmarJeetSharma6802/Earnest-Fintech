"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function FourthSection() {
  const doctor = {
    name: "Dr. Amarjeet Sharma",
    role: "MD (Internal Medicine)",
    experience: "15+ Years of Experience",
    desc: "Dr. Rahul Sharma leads our medical team with a focus on safe, monitored, and personalized recovery care for every patient.",
    image: "/doctor.png",
  };

  const reviews = [
    {
      img: "reviewlogo.png",
      rating: 5,
      text: "The care and attention my father received at the Transition Care Center was exceptional. The staff is very supportive and professional Excellent facilities and very caring staff.",
      author: "Anjali Mehta",
      state: "Delhi",
    },
    {
      img: "reviewlogo.png",
      rating: 5,
      text: "A wonderful place for recovery. The medical team and nurses truly care for the patients.The staff is very supportive and professional. ",
      author: "Rajesh Verma",
      state: "Gurugram",
    },
    {
      img: "reviewlogo.png",
      rating: 4,
      text: "Excellent facilities and very caring staff. The medical team and nurses truly care for the patients.The staff is very supportive and professional.",
      author: "Amit Singh",
      state: "USA",
    },
    {
      img: "reviewlogo.png",
      rating: 8,
      text: "Excellent facilities and very caring staff. The medical team and nurses truly care for the patients.The staff is very supportive and professional.",
      author: "Amarjeet Sharma",
      state: "Ireland",
    },
  ];

  return (
    <div className="bg-blue-50 py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-10 gap-6">
        <div className="md:col-span-3 bg-white p-6 rounded-2xl shadow-md">
          <p className="text-sm text-[#22497D] mb-4">Meet Our Medical Expert</p>

          <div className="flex flex-col items-center text-center">
            <Image
              src={doctor.image}
              alt="doctor"
              width={100}
              height={100}
              className="rounded-full object-cover mb-4"
            />

            <h3 className="font-bold text-lg text-[#2f3b7c]">{doctor.name}</h3>

            <p className="text-sm text-gray-500">{doctor.role}</p>

            <p className="text-sm font-semibold mt-1">{doctor.experience}</p>

            <p className="text-gray-600 text-sm mt-4">{doctor.desc}</p>
          </div>
        </div>

        {/* 🟢 RIGHT SIDE (70%) */}
        <div className="md:col-span-7 pb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            What Families Say
          </h2>

          <Swiper
            autoHeight={true}
            spaceBetween={20}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination]}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2 },
            }}
          >
            {reviews.map((item, i) => (
              <SwiperSlide key={i} className="cursor-grabbing">
                <div className="bg-white p-6 rounded-2xl shadow-md">
                    <img src={item.img} alt=""  className=" my-2.5"/>
                  <div className="text-yellow-400 mb-3 text-3xl">
                    {"★".repeat(item.rating)}
                  </div>

                  <p className="text-gray-600 text-sm mb-4">{item.text}</p>

                  <p className="font-semibold text-[#22497D]">{item.author}</p>
                  <p className="font-semibold text-[#22497D]">{item.state}</p>

                   <img src={item.img} alt=""  className=" my-2.5 float-right opacity-0"/>
                </div>
                
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
