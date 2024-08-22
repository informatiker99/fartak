import React from "react";
import { ChevronLeft } from "lucide-react";
import fartak from '../../public/img/fartak.png'
const HoroImage = ({ img }) => {
  return (
    <div className="w-full relative overflow-hidden  bg-black ">
      <div className="absolute size-[50rem] rounded-[4rem] rotate-45 bg-neutral-800 opacity-80 -right-48 skew-x-12 skew-y-3 text-white "></div>
      <img src={img} alt="hero image " className="w-full " />;
      <div className=" top-1/2 size-80 absolute right-0 -translate-y-1/2  text-5xl mr-16  flex flex-col items-center">
        <p className="leading-relaxed text-white">
          یک <span className="text-purple-500">مشاورخوب </span>{" "}
          <span className="text-green-400">ارزشمند</span> است
        </p>
        <div className="clip-custom bg-purple-600 rounded-lg text-base w-2/3 h-28 text-white mr-10 mt-4 flex items-end justify-end p-3 ">
          <ChevronLeft className="-mx-2" />
          <ChevronLeft className="-mx-2" />
          <p className="mx-1"> <a href="#"> مشاوره و ارزیابی </a></p>
        </div>
      </div>
      <div className="flex justify-evenly w-full ">
        <div className="basis-2/6 flex justify-end w-full">
            <img src={fartak} alt="" />
        </div>
        <div className="basis-3/6 flex flex-col items-center  text-right p-1 ">
          <p className="text-white ">
            یک مشاوره خوب ارزشمند است این جمله هدف و مقصد شرکت ایده مقصد دوم
            فرتاک است. گاهی لازم است مشاوره بگیریم که به آنچه دوست داریم برسیم و
            گاهی نیاز است ماموریت ما کمک و راهنمایی در خصوص انتخاب دانشگاه خوب و
            مورد تائید وزارت علوم ایران رشته مناسب با سابقه تحصیلات متقاضی
            مشاوره بگیریم که یک متخصص بگوید خواسته شما اشتباه است و از خسارتها و
            هزینه های زیاد جلوگیری کند. و منطبق با الزامات سفارت کشور کانادا
            ایتانیا و امارات متحده عربی است
          </p>
          <div className="w-full justify-end flex ">
            <a href="#" className="text-green-400 flex ">
              <p>بیشتر بخوانید</p>
              <ChevronLeft />
            </a>
          </div>
        </div>
        <div className="basis-1/6 flex text-white text-4xl w-full justify-center ">
          <span className="">: درباره ما</span>{" "}
        </div>
      </div>
    </div>
  );
};

export default HoroImage;
