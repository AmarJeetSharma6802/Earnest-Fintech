import React from "react";
import { PhoneOutgoing, Mail } from "lucide-react";

function FivthSection() {
  return (
    <div className="flex  p-10 max-w-7xl mx-auto gap-6">
      <div className="w-[45%]">
        <h1 className="text-[#22497D] text-3xl">
          FAQ Frequently Asked Questions
        </h1>
        <p className="py-6">
          At our infertility clinic, we provide free consultations with best
          specialists to support those facing repeated miscarriage and recurrent
          pregnancy loss.
        </p>
        <div className="w-full ">
          <h1 className="bg-[#31B8AC] p-2 text-2xl text-center rounded-t-xl">
            Let's Talk Us
          </h1>
          <div className="flex">
            <p className="w-1/2 h-[120px] bg-[#22497D] border-r-1 border-gray-500 p-8">
              <span className="flex gap-2 items-center text-2xl text-amber-50"><PhoneOutgoing size={18} className="text-white text-2xl" /> Call Us:</span>
              <span className="text-amber-50 py-4">+91 88822233665</span>
            </p>
             <p className="w-1/2 h-[120px] bg-[#22497D] border-r-1 border-gray-500 p-8">
              <span className="flex gap-2 items-center text-2xl text-amber-50"><Mail size={18} className="text-white text-2xl" />Email Us:</span>
              <span className="text-amber-50 py-4">info@transitioncarecenter.in</span>
            </p>
          </div>
        </div>
      </div>
      <div className="w-[55%]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, error.
        Est, delectus id cupiditate non temporibus porro exercitationem neque
        reprehenderit sunt voluptatem animi expedita autem nobis, et atque
        tenetur esse ab dolore laboriosam sed! Ea labore, officiis vero aperiam
        non, esse dignissimos nesciunt animi eius consectetur quaerat ad
        nostrum, recusandae reiciendis voluptatem ipsam! Eaque delectus tempora,
        quisquam rem nemo, placeat voluptatum veniam quod suscipit consectetur,
        culpa exercitationem at qui voluptates repellendus. Minus eaque atque
        nobis eius porro asperiores culpa mollitia, suscipit itaque
        reprehenderit. Vitae dolorem illo est dignissimos, fuga ut, quibusdam
        nesciunt minima vero ab repellendus necessitatibus at in placeat.
      </div>
    </div>
  );
}

export default FivthSection;
