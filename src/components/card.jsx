import React from "react";

const Card = ({ tilte, description, img }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-purple-500 w-80  rounded-md p-4 ">
      <div>
        <img src={img} alt="img" />
      </div>
      <div>
        <p className="text-white text-3xl ">{tilte}</p>
      </div>
      <div>
        <p className="text-md "> {description}</p>
      </div>
    </div>
  );
};

export default Card;
