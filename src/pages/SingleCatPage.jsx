import React, { useEffect, useState } from "react";
import { BsStarFill } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { gigs } from "../data";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SingleGigReviewArea from "../components/SingleGigReviewArea";
import SingleGigPrem from "../components/SingleGigPrem";

function SingleCatPage() {
  const [user, setUser] = useState();
  const { gigId } = useParams();
  //   console.log(gigId);
  useEffect(() => {
    const obj = gigs.filter((item) => item.id == gigId);

    setUser(...obj);
  }, [gigId]);

  //   console.log(user);

  return (
    <div className="max-w-7xl mx-auto mt-44 px-7 font-serif md:grid md:grid-cols-3 gap-10">
      {/* left */}
      <div className=" gap-5 col-span-2 w-full flex flex-col ">
        {/* top */}
        <div className="flex flex-col gap-3">
          <h3 className="text-lg text-gray-600">
            Fiverr {">"} {user?.categories} {">"}
          </h3>

          <h2 className="text-3xl font-bold">{user?.desc}</h2>

          <div className="flex items-center gap-3">
            <img
              src={user?.pp}
              alt=""
              className="w-12 h-12 shadow-md rounded-full object-cover"
            />
            <h3>{user?.username}</h3>

            <div className="flex items-center gap-1 text-yellow-400">
              {Array.from(Array(user?.star), (_, i) => (
                <BsStarFill key={i} />
              ))}
              <span>{user?.star}</span>
            </div>
          </div>
        </div>

        {/* img slider */}
        <Swiper
          // install Swiper modules
          modules={[Navigation]}
          slidesPerView={1}
          navigation
          scrollbar={{ draggable: true }}
          className="w-full h-[400px]"
        >
          <SwiperSlide>
            <img
              src={user?.img}
              alt=""
              className="w-full h-full object-contain"
            />
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>

        {/* description */}
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold">About This Gig</h3>
          <p>
            I use an AI program to create images based on text prompts. This
            means I can help you to create a vision you have through a textual
            description of your scene without requiring any reference images.
            Some things I've found it often excels at are: Character portraits
            (E.g. a picture to go with your DnD character) Landscapes (E.g.
            wallpapers, illustrations to compliment a story) Logos (E.g. Esports
            team, business, profile picture) You can be as vague or as
            descriptive as you want. Being more vague will allow the AI to be
            more creative which can sometimes result in some amazing images. You
            can also be incredibly precise if you have a clear image of what you
            want in mind. All of the images I create are original and will be
            found nowhere else. If you have any questions you're more than
            welcome to send me a message
          </p>
        </div>

        {/* about seller */}
        <div className="flex items-center gap-3">
          <img
            src={user?.pp}
            alt=""
            className="w-24 h-24 shadow-md rounded-full object-cover"
          />
          <div className="flex flex-col items-start gap-1">
            <h3 className="text-2xl ">{user?.username}</h3>

            <div className="flex items-center gap-1 text-yellow-400">
              {Array.from(Array(user?.star), (_, i) => (
                <BsStarFill key={i} />
              ))}
              <span>{user?.star}</span>
            </div>

            <button className="border p-2 rounded-lg">Contact Me</button>
          </div>
        </div>

        {/* seller info */}
        <div className="border p-3 rounded-lg shadow-md">
          <div className="grid grid-cols-2 border-b-2 p-3 gap-5">
            <div className="text-gray-500 text-lg">
              From
              <p className="font-semibold text-black text-xl">USA</p>
            </div>

            <div className="text-gray-500 text-lg">
              Member since
              <p className="font-semibold text-black text-xl">Aug 2022</p>
            </div>
            <div className="text-gray-500 text-lg">
              Avg. response time
              <p className="font-semibold text-black text-xl">4 hours</p>
            </div>
            <div className="text-gray-500 text-lg">
              Last delivery
              <p className="font-semibold text-black text-xl">1 day</p>
            </div>
            <div className="text-gray-500 text-lg">
              Languages
              <p className="font-semibold text-black text-xl">English</p>
            </div>
          </div>

          <p className="p-3 text-gray-400">
            My name is Anna, I enjoy creating AI generated art in my spare time.
            I have a lot of experience using the AI program and that means I
            know what to prompt the AI with to get a great and incredibly
            detailed result.
          </p>
        </div>

        {/* review */}
        <div className="w-full space-y-5 pb-10">
          <h3 className="text-2xl font-semibold">Reviews</h3>

          {gigs.map((gig) => (
            <SingleGigReviewArea key={gig.id} gig={gig} />
          ))}
        </div>
      </div>

      {/* right */}
      <div className="w-full flex-1 pb-10">
        <SingleGigPrem />
      </div>
    </div>
  );
}

export default SingleCatPage;
