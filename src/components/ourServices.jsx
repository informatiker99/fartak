import React from "react";
import Card from "./card";

const OurServices = () => {
  const cardItems = [
    {
      src: "public/img/hand.png",
      description: "انجام تمامی مراحل پروسه ی اپلای",
      title: "پشتیبانی",
    },
    {
      src: "public/img/hand.png",
      description: "ویزای تحصیلی انواع رشته و مقاطع بالاتر ",
      title: "مشاوره ی تحصیلی ",
    },
    {
      src: "public/img/hand3.png",
      description: "پبت درخواست و پیگیری مراحل بورسیه",
      title: "بورس تحصیلی",
    },
  ];
  return (
    <div className="flex flex-col items-center py-4">
      <div className="flex w-3/4 justify-end">
        <p className="border-b-double-color font-bold text-2xl ">: خدمات ما</p>
      </div>
      <div className="flex  w-full justify-center gap-2">
        {cardItems.map((item) => {
          return (
            <Card
              img={item.src}
              description={item.description}
              tilte={item.title}
            ></Card>
          );
        })}
      </div>
    </div>
  );
};

export default OurServices;
