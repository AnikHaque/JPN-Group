import React from "react";

const Back = ({ name, title, cover }) => {
  return (
    <>
      <div className="relative">
        <img src={cover} alt="" className="w-full h-64 object-cover" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <span className="text-2xl font-bold">{name}</span>
          <h1 className="text-lg hidden sm:block">{title}</h1>
        </div>
      </div>
    </>
  );
};

export default Back;
