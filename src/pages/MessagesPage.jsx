import React from "react";
import { ImMail } from "react-icons/im";
import { Link } from "react-router-dom";

function MessagesPage() {
  const currentUser = {
    id: 1,
    username: "Anna",
    isSeller: true,
  };
  const message = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
  maxime cum corporis esse aspernatur laborum dolorum? Animi
  molestias aliquam, cum nesciunt, aut, ut quam vitae saepe repellat
  nobis praesentium placeat.`;
  return (
    <div className="max-w-7xl mx-auto mt-44 px-7 font-serif flex flex-col gap-5">
      {/* top */}
      <div className="flex justify-between items-center p-3">
        <h1 className="text-3xl font-semibold">Messages</h1>
      </div>

      {/* bottom */}
      <table className=" border-separate border-spacing-1  pb-10">
        <thead className="text-xl font-semibold text-center">
          <tr>
            {<td>{currentUser.isSeller ? "Buyer" : "Seller"}</td>}
            <td>Last Message</td>
            <td>Date</td>
            <td>Action</td>
          </tr>
        </thead>

        <tbody>
          <tr className=" bg-green-100 h-[70px]">
            <td>Charley Sharp</td>
            <td>
              <Link to="/message/123" className="link">
                {message.substring(0, 100)}...
              </Link>
            </td>
            <td>1 hour ago</td>
            <td className="text-center">
              <button className="p-2 bg-green-400 text-white text-lg">
                Mark as Read
              </button>{" "}
            </td>
          </tr>
          <tr className="h-[70px]">
            <td>John Doe</td>

            <td>
              <Link to="/message/123" className="link">
                {message.substring(0, 100)}...
              </Link>
            </td>
            <td>2 hours ago</td>
            <td className="text-center">
              <button className="p-2 bg-green-400 text-white text-lg">
                Mark as Read
              </button>
            </td>
          </tr>
          <tr className="h-[70px]">
            <td>Elinor Good</td>
            <td>
              <Link to="/message/123" className="link">
                {message.substring(0, 100)}...
              </Link>
            </td>
            <td>1 day ago</td>
          </tr>
          <tr className="h-[70px]">
            <td>Garner David </td>
            <td>
              <Link to="/message/123" className="link">
                {message.substring(0, 100)}...
              </Link>
            </td>
            <td>2 days ago</td>
          </tr>
          <tr className="h-[70px]">
            <td>Troy Oliver</td>
            <td>{message.substring(0, 100)}</td>
            <td>1 week ago</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default MessagesPage;
