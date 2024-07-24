import React, { useState } from "react";
import Spinner from "./Spinner";
import useGif from "./hooks/useGif";

function Tag() {
  const [tag, setTag] = useState("");
  const { gif, loading, fetchData } = useGif(tag);

  function changeHandler(event) {
    setTag(event.target.value);
  }

  function clickHandler() {
    console.log("button clicked");
    fetchData();
  }

  return (
    <div className="w-full sm:w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 bg-blue-500 rounded-lg border-2 border-black flex flex-col items-center gap-y-5 mt-5 p-4">
      <h1 className="text-xl sm:text-2xl underline uppercase font-bold text-center mb-4">
        A Random {tag} Gif
      </h1>
      {loading ? (
        <Spinner />
      ) : (
        <img
          className="w-full max-w-full h-auto object-contain"
          src={gif}
          alt="Random Gif"  width={500} height={200}
        />
      )}
      <input
        placeholder="Enter Tag"
        className="text-center w-full sm:w-8/12 md:w-7/12 lg:w-5/12 xl:w-4/12 bg-[#FFF1DB] text-lg py-2 rounded-lg mb-3"
        type="text"
        onChange={changeHandler}
        value={tag}
      />
      <button
        className="w-full sm:w-10/12 bg-[#FFF1DB] text-lg py-2 rounded-lg mb-5"
        onClick={clickHandler}
      >
        Generate
      </button>
    </div>
  );
}

export default Tag;
