import React from "react";
import { useLocation, useParams } from "react-router-dom";
import GigCard from "../components/GigCard";
import { gigs } from "../data";
function CategoryPage() {
  const location = useLocation();

  //   console.log(location);
  return (
    <div className="max-w-7xl mx-auto mt-44 px-7 font-serif flex flex-col gap-5">
      {/* top */}
      <div className="w-full flex flex-col gap-2 ">
        <h3 className="text-lg text-gray-600">
          Fiverr {">"} {location.search.slice(5).replace("_", " ")}
        </h3>

        <h2 className="text-3xl font-bold">
          {location.search.slice(5).replace("_", " ")}
        </h2>

        <p className=" text-gray-400 w-full ">
          Explore the boundaries of art and technology with Liverr's{" "}
          {location.search.slice(5).replace("_", " ")}
        </p>

        <div className="flex flex-col md:flex-row gap-3 md:justify-between items-start md:items-center text-lg">
          <form
            action=""
            className="flex flex-col md:flex-row md:items-center w-full gap-3"
          >
            <label>Budget</label>
            <input
              type="number"
              placeholder="min"
              className="border rounded-lg p-1 outline-none shadow-sm"
            />
            <input
              type="number"
              placeholder="max"
              className="border rounded-lg p-1 outline-none shadow-sm"
            />
            <button className="text-white bg-green-400 px-2 py-1 rounded-lg hover:bg-green-500">
              Apply
            </button>
          </form>

          <div className="flex  items-center gap-1">
            <h3 className="text-gray-500 whitespace-nowrap">sort by</h3>
            <select className="border-none outline-none">
              <option value="">Newest</option>
              <option value="">Popular</option>
            </select>
          </div>
        </div>
      </div>

      {/* bottom */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 my-3">
        {gigs
          .filter(
            (item) =>
              item.categories === location.search.slice(5).replace("_", " ")
          )
          .map((gig) => (
            <GigCard key={gig.id} gig={gig} />
          ))}
      </div>
    </div>
  );
}

export default CategoryPage;
