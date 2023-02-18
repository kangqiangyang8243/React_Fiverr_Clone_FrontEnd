import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { ImMail } from "react-icons/im";
import { Link } from "react-router-dom";

function OrderPage() {
  const currentUser = {
    id: 1,
    username: "Anna",
    isSeller: true,
  };
  return (
    <div className="max-w-7xl mx-auto mt-44 px-7 font-serif flex flex-col gap-5">
      {/* top */}
      <div className="flex justify-between items-center p-3">
        <h1 className="text-3xl font-semibold">Orders</h1>
      </div>

      {/* bottom */}
      <table className=" border-separate border-spacing-1 text-center pb-10">
        <thead className="text-xl font-semibold">
          <tr>
            <td>Image</td>
            <td>Title</td>
            <td>Price</td>
            {<td>{currentUser.isSeller ? "Buyer" : "Seller"}</td>}
            <td>Contact</td>
          </tr>
        </thead>

        <tbody>
          <tr className=" bg-green-100">
            <td>
              <img
                className="w-20 h-20 mx-auto p-1"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Stunning concept art</td>
            <td>
              59.<sup>99</sup>
            </td>
            <td>Francisco Chang</td>
            <td>
              <ImMail className="w-10 h-7 mx-auto text-blue-500 cursor-pointer" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="w-20 h-20 mx-auto p-1"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Ai generated concept art</td>
            <td>
              120.<sup>99</sup>
            </td>
            <td>Francisco Chang</td>
            <td>
              <ImMail className="w-10 h-7 mx-auto text-blue-500 cursor-pointer" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="w-20 h-20 mx-auto p-1"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>High quality digital character</td>
            <td>
              79.<sup>99</sup>
            </td>
            <td>Francisco Chang</td>
            <td>
              <ImMail className="w-10 h-7 mx-auto text-blue-500 cursor-pointer" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="w-20 h-20 mx-auto p-1"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Illustration hyper realistic painting</td>
            <td>
              119.<sup>99</sup>
            </td>
            <td>Francisco Chang</td>
            <td>
              <ImMail className="w-10 h-7 mx-auto text-blue-500 cursor-pointer" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="w-20 h-20 mx-auto p-1"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Original ai generated digital art</td>
            <td>
              59.<sup>99</sup>
            </td>
            <td>Francisco Chang</td>
            <td>
              <ImMail className="w-10 h-7 mx-auto text-blue-500 cursor-pointer" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default OrderPage;
