import Image from 'next/image'
import React from 'react'
import { PhoneOutgoing ,Calendar} from "lucide-react";

function FirstSection() {
  return (
    <div className='max-w-7xl mx-auto flex items-center gap-4 px-6 py-12 max-w-[90vw] m-auto pt-[95px]'>

  {/* LEFT */}
  <div className='w-[50%]'>
    <p className='uppercase bg-blue-100 inline-block px-3 py-1 rounded text-blue-700 text-sm'>
      Better care. Safe Recovery
    </p>

    <h1 className='text-6xl font-bold py-4 leading-tight'>
      Discharged Too Early? Recover Safely With{" "}
      <span className='text-[#2A5795]'>Medical Support</span>
    </h1>

    <p className='text-gray-600 max-w-lg'>
      Get 24/7 medical care, nursing support, and guided recovery before going home.
    </p>

    {/* FEATURES */}
    <div className='flex gap-6 py-6'>
      <div className='flex items-center gap-2'>
        <Image src="/Screenshot 2026-04-21 151304.png" width={40} height={40} alt=''/>
        <p className='text-sm font-medium'>Monitoring</p>
      </div>

      <div className='flex items-center gap-2'>
        <Image src="/Screenshot 2026-04-21 151336.png" width={40} height={40} alt=''/>
        <p className='text-sm font-medium'>Nursing</p>
      </div>

      <div className='flex items-center gap-2'>
        <Image src="/Screenshot 2026-04-21 151412.png" width={40} height={40} alt=''/>
        <p className='text-sm font-medium'>Recovery</p>
      </div>
    </div>

    {/* BUTTONS */}
    <div className='flex gap-4'>
      <button className='bg-[#22497D] px-5 py-3 flex items-center gap-2 text-white rounded-md shadow'>
        <PhoneOutgoing size={18}/> Talk to a Care Expert
      </button>

      <button className='border border-[#22497D] px-5 py-3 flex items-center gap-2 text-[#22497D] rounded-md'>
        <Calendar size={18}/> Check Bed
      </button>
    </div>
  </div>


  {/* RIGHT (FIXED FORM) */}
  <div className='w-[50%] flex justify-end'>
    <form className='w-[460px] bg-gradient-to-br from-[#2A5795] to-[#31B8AC] p-6 rounded-xl shadow-lg mr-4'>

      <h2 className='text-center text-lg font-semibold text-white mb-4'>
        Book a Free Consultation
      </h2>

      <div className='space-y-4'>

        <input
          type="text"
          placeholder='Full Name'
          className='w-full p-3 rounded-md bg-white text-black outline-none'
        />

        <input
          type="text"
          placeholder='Mobile No.'
          className='w-full p-3 rounded-md bg-white text-black outline-none'
        />

        <select className='w-full p-3 rounded-md bg-white text-black'>
          <option>Delhi</option>
          <option>Noida</option>
          <option>Gurugram</option>
        </select>

        <button className='w-full bg-white text-[#22497D] font-semibold py-3 rounded-md hover:bg-gray-100'>
          Request Call Back Now
        </button>

        <p className=' text-center text-white'>By proceeding, you accept Transition Care Center Privacy Policy & Disclaimer</p>
      </div>
    </form>
  </div>

</div>
  )
}

export default FirstSection


// import Image from "next/image";
// import React, { useState } from "react";
// import { PhoneOutgoing, Calendar } from "lucide-react";
// import api from "@/lib/api";
// import toast from "react-hot-toast";

// function FirstSection() {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     phone: "",
//     city: "",
//     date: "",
//     time: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       setLoading(true);

//       const res = await api.post("/auth/book", formData);

//       toast.success(res.data.message || "Booking successful ✅");

//       setFormData({
//         fullName: "",
//         phone: "",
//         city: "",
//         date: "",
//         time: "",
//       });

//     } catch (error: any) {
//       toast.error(
//         error?.response?.data?.message || "Something went wrong ❌"
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-[90vw] mx-auto flex items-center gap-4 px-6 py-12 pt-[95px]">

//       {/* LEFT */}
//       <div className="w-[50%]">
//         <p className="uppercase bg-blue-100 inline-block px-3 py-1 rounded text-blue-700 text-sm">
//           Better care. Safe Recovery
//         </p>

//         <h1 className="text-6xl font-bold py-4 leading-tight">
//           Discharged Too Early? Recover Safely With{" "}
//           <span className="text-[#2A5795]">Medical Support</span>
//         </h1>

//         <p className="text-gray-600 max-w-lg">
//           Get 24/7 medical care, nursing support, and guided recovery before going home.
//         </p>

//         {/* BUTTONS */}
//         <div className="flex gap-4 py-6">
//           <button className="bg-[#22497D] px-5 py-3 flex items-center gap-2 text-white rounded-md shadow">
//             <PhoneOutgoing size={18} /> Talk to a Care Expert
//           </button>

//           <button className="border border-[#22497D] px-5 py-3 flex items-center gap-2 text-[#22497D] rounded-md">
//             <Calendar size={18} /> Check Bed
//           </button>
//         </div>
//       </div>

//       {/* RIGHT FORM */}
//       <div className="w-[50%] flex justify-end">
//         <form
//           onSubmit={handleSubmit}
//           className="w-[460px] bg-gradient-to-br from-[#2A5795] to-[#31B8AC] p-6 rounded-xl shadow-lg"
//         >
//           <h2 className="text-center text-lg font-semibold text-white mb-4">
//             Book a Free Consultation
//           </h2>

//           <div className="space-y-4">

//             <input
//               name="fullName"
//               value={formData.fullName}
//               onChange={handleChange}
//               placeholder="Full Name"
//               className="w-full p-3 rounded-md bg-white text-black outline-none"
//               required
//             />

//             <input
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               placeholder="Mobile No."
//               className="w-full p-3 rounded-md bg-white text-black outline-none"
//               required
//             />

//             <select
//               name="city"
//               value={formData.city}
//               onChange={handleChange}
//               className="w-full p-3 rounded-md bg-white text-black"
//               required
//             >
//               <option value="">Select City</option>
//               <option>DELHI</option>
//               <option>NOIDA</option>
//               <option>GURUGRAM</option>
//               <option>BANGALORE</option>
//               <option>KOLKATA</option>
//               <option>CHANDIGARH</option>
//               <option>UP</option>
//             </select>

//             {/* NEW FIELDS */}
//             <input
//               type="date"
//               name="date"
//               value={formData.date}
//               onChange={handleChange}
//               className="w-full p-3 rounded-md bg-white text-black"
//               required
//             />

//             <input
//               type="time"
//               name="time"
//               value={formData.time}
//               onChange={handleChange}
//               className="w-full p-3 rounded-md bg-white text-black"
//               required
//             />

//             <button
//               disabled={loading}
//               className="w-full bg-white text-[#22497D] font-semibold py-3 rounded-md hover:bg-gray-100"
//             >
//               {loading ? "Booking..." : "Request Call Back Now"}
//             </button>

//             <p className="text-center text-white text-sm">
//               By proceeding, you accept Transition Care Center Privacy Policy & Disclaimer
//             </p>

//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default FirstSection;