import React from "react";

const Uni = () => {
  const img = [
    { src: "/public/img/clientlogo-9.webp" },
    { src: "/public/img/clientlogo-u.webp" },
    { src: "/public/img/clientlogo-9.webp" },
    { src: "/public/img/clientlogo-9.webp" },
  ];
  return (
    <div className="flex flex-col p-2 bg-gray-200">
      <div className="w-full flex justify-end">
        <p className="text-4xl border-b-4 border-b-double-color inline-flex mx-20 ">
          :دانشگاهها{" "}
        </p>
      </div>
      <div className="flex w-full justify-center ">
        {img.map((item) => {
          return <img src={item.src} alt="img" className="size-64" />;
        })}
      </div>
    </div>
  );
};

export default Uni;
