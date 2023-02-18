import React from "react";
import { Link } from "react-router-dom";

function SingleMessagePage() {
  return (
    <div className="max-w-7xl mx-auto mt-44 px-7 font-serif flex flex-col gap-5">
      <h3 className=" text-gray-500">
        <Link to={"/messages"}>Message</Link> {">"} John Doe
      </h3>

      {/* message container */}
      <div className="flex flex-col gap-10 pb-10">
        {/* top */}
        <div className="flex flex-col h-[70vh] flex-nowrap  w-full pb-5 px-3 overflow-y-scroll">
          <div className="flex  gap-3 ">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              className="w-16 h-16 rounded-full"
            />
            <p className="bg-slate-100 rounded-lg rounded-tl-none w-[500px] p-3 mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>

          <div className="flex flex-row-reverse gap-3 ">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              className="w-16 h-16 rounded-full"
            />
            <p className="bg-blue-100 rounded-lg rounded-tr-none w-[500px] p-3 mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>

          <div className="flex  gap-3 ">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              className="w-16 h-16 rounded-full"
            />
            <p className="bg-slate-100 rounded-lg rounded-tl-none w-[500px] p-3 mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>

          <div className="flex flex-row-reverse gap-3 ">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              className="w-16 h-16 rounded-full"
            />
            <p className="bg-blue-100 rounded-lg rounded-tr-none w-[500px] p-3 mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>

          <div className="flex  gap-3 ">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              className="w-16 h-16 rounded-full"
            />
            <p className="bg-slate-100 rounded-lg rounded-tl-none w-[500px] p-3 mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>

          <div className="flex flex-row-reverse gap-3 ">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              className="w-16 h-16 rounded-full"
            />
            <p className="bg-blue-100 rounded-lg rounded-tr-none w-[500px] p-3 mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>
        </div>

        {/* bottom */}
        <div className="flex items-center gap-5 w-full">
          <input
            type="text"
            className="w-full p-2 border rounded-lg shadow-sm focus-within:shadow-lg outline-none"
            placeholder="Enter your Message.."
          />
          <button className="px-4 py-2 bg-green-400 hover:bg-green-500 text-white rounded-lg shadow-md">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleMessagePage;
