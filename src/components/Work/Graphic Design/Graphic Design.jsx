import React from "react";

export default function GraphicDesign() {
  return (
    <div className="grid grid-cols-2 gap-7 mb-20">
      <div className="group cursor-pointer relative h-[50vh]">
        <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pt-12 pl-6">
          <h2 className="text-2xl text-white underline">Work 1</h2>
        </div>
        <img
          className="h-full object-cover w-full"
          src="/img-1-C4nS0eD8.jpg"
          alt=""
        />
      </div>
      <div className="group cursor-pointer relative h-[50vh]">
        <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pt-12 pl-6">
          <h2 className="text-2xl text-white underline">Work 2</h2>
        </div>
        <img
          className="h-full object-cover w-full"
          src="/img-2-D-4H1m4L.jpg"
          alt=""
        />
      </div>
      <div className="group cursor-pointer relative h-[47vh]">
        <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pt-12 pl-6">
          <h2 className="text-2xl text-white underline">Work 3</h2>
        </div>
        <img
          className="h-full object-cover w-full"
          src="/img-3-pR2ZEVY9.jpg"
          alt=""
        />
      </div>
      <div className="group cursor-pointer relative h-[47vh]">
        <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pt-12 pl-6">
          <h2 className="text-2xl text-white underline">Work 4</h2>
        </div>
        <img
          className="h-full object-cover w-full"
          src="/img-4-tHccITd-.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
