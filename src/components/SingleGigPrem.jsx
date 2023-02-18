import React from "react";
import { AiOutlineReload } from "react-icons/ai";
import { BsCheck, BsClock } from "react-icons/bs";

function SingleGigPrem() {
  return (
    <div className="flex flex-col w-full sticky top-[180px] gap-5 p-3 rounded-lg shadow-md border">
      {/* top */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">1 AI Generate Image</h2>
        <p className="text-lg text-gray-600">$59.99</p>
      </div>

      {/* middle 1*/}
      <p className="text-gray-500">
        I will create a unique high quality AI generated image based on a
        description that you give me
      </p>

      {/* middle 2*/}
      <div className="flex items-center justify-between">
        <p className="flex items-center gap-2">
          <BsClock />
          <span>2 Days Delivery</span>
        </p>

        <p className="flex items-center gap-2">
          <AiOutlineReload />
          <span>3 Revisions</span>
        </p>
      </div>

      {/* middle 3*/}
      <ul>
        <li className="flex items-center gap-2">
          <BsCheck className="w-5 h-5 text-green-400" />
          <span>Prompt Writing</span>
        </li>
        <li className="flex items-center gap-2">
          <BsCheck className="w-5 h-5 text-green-400" />
          <span>Artwork Delivery</span>
        </li>
        <li className="flex items-center gap-2">
          <BsCheck className="w-5 h-5 text-green-400" />
          <span>Image Upscaling</span>
        </li>
        <li className="flex items-center gap-2">
          <BsCheck className="w-5 h-5 text-green-400" />
          <span>Additional Design</span>
        </li>
      </ul>

      <button className="py-2 bg-green-400 rounded-lg shadow-md text-white text-lg hover:bg-green-500">
        Continue
      </button>
    </div>
  );
}

export default SingleGigPrem;
