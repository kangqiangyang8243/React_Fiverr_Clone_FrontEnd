import React from "react";
import { useNavigate } from "react-router-dom";
import { cards } from "../data";

function HomePageServices() {
  const navigate = useNavigate();
  return (
    <div className="max-w-7xl mx-auto font-serif p-7 ">
      {/* Popular Professional Services */}
      <div className=" w-full overflow-hidden">
        <h1 className="text-3xl font-semibold w-full">
          Popular Professional Services
        </h1>
        <div className="flex flex-nowrap gap-5 p-3 w-full h-full whitespace-nowrap overflow-x-scroll ">
          {cards.map((card) => (
            <div
              onClick={() =>
                navigate(`/gigs?cat=${card.title.replace(" ", "_")}`)
              }
              key={card.id}
              className="relative shadow-md hover:shadow-lg hover:scale-105 transform duration-100 ease-linear cursor-pointer w-[300px] h-[400px] min-w-[300px] "
            >
              <img
                src={card.img}
                alt=""
                className=" w-full h-full object-cover rounded-lg shadow-md "
              />
              <div className="absolute top-5 left-2 text-white w-full">
                <p className="text-2xl">{card.desc}</p>
                <h3 className="text-3xl font-semibold">{card.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePageServices;
