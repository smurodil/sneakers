import React from "react";

function Description() {
  return (
    <div className="flex text-left justify-center flex-col mt-12 mb-4 pr-12">
      <p className="text-orange-400 font-base font-bold tracking-widest">SNEAKER COMPANY</p>
      <h2 className="text-black text-5xl font-bold pr-12">Fall Limited Edition Sneakers</h2>
      <p className="text-slate-400 text-base mt-4 pr-32">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div>
        <div className="flex items-center justify-start gap-4">
          <p className="text-black text-3xl font-bold m-0">$125.00</p>
          <div className="flex items-center justify-center w-16 h-8 bg-orange-200 rounded-md text-center">
            <p className="text-orange-500 text-xl font-bold m-0">50%</p>
          </div>
        </div>
        <p className="text-slate-400 font-bold line-through">$250.00</p>
      </div>
    </div>
  );
}
export default Description;