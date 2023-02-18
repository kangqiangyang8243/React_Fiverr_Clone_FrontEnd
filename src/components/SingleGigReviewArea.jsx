import React from "react";
import { BsStarFill } from "react-icons/bs";
import { US } from "country-flag-icons/react/3x2";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";

function SingleGigReviewArea({ gig }) {
  return (
    <div className="w-full pb-5 border-b-2 font-serif">
      {/* top */}
      <div className="flex w-full flex-col gap-2 px-3 pb-3">
        <div className="flex items-center gap-3">
          <img
            src={gig.pp}
            alt=""
            className=" h-16 w-16 shadow-md rounded-full object-cover"
          />
          <div className="flex flex-col">
            <h3 className="text-xl">{gig.username}</h3>
            <p className="flex items-center gap-1">
              <US title="United States" className="w-5 h-5" />
              <span>United States</span>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1 text-yellow-400">
          {Array.from(Array(gig.star), (_, i) => (
            <BsStarFill key={i} />
          ))}
          <span>{gig.star}</span>
        </div>
      </div>

      {/* bottom */}
      <div className="flex flex-col px-3 gap-3">
        <p className="text-gray-500">
          I just want to say that art_with_ai was the first, and after this, the
          only artist Ill be using on Fiverr. Communication was amazing, each
          and every day he sent me images that I was free to request changes to.
          They listened, understood, and delivered above and beyond my
          expectations. I absolutely recommend this gig, and know already that
          Ill be using it again very very soon
        </p>
        <div className="flex items-center gap-3">
          <h3 className="text-lg">Helpful?</h3>
          <p className="flex items-center gap-3">
            <AiOutlineLike className="w-6 h-6 cursor-pointer" />
            <span>Yes</span>
          </p>

          <p className="flex items-center gap-3">
            <AiOutlineDislike className="w-6 h-6 cursor-pointer" />
            <span>No</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SingleGigReviewArea;
