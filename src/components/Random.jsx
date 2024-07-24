import React from "react";
import Spinner from "./Spinner";
import useGif from "./hooks/useGif";

const API_KEY = import.meta.env.VITE_REACT_APP_GIPHY_API_KEY;

function Random() {
  const { gif, loading, fetchData } = useGif();
  
  function clickHandler() {
    console.log("button clicked");
    fetchData();
  }

  return (
    <div className="w-full sm:w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 bg-green-500 rounded-lg border-2 border-black flex flex-col items-center gap-y-5 p-4">
      <h1 className="text-xl sm:text-2xl underline uppercase font-bold text-center mb-4">
        A Random Gif
      </h1>
      {loading ? (
        <Spinner />
      ) : (
        <img
          className="w-full max-w-full h-auto sm:max-w-[500px] sm:h-[300px] object-contain"
          src={gif} width={600} height={200}
          alt="Random Gif"
        />
      )}
      <button
        className="w-full sm:w-10/12 bg-[#FFF1DB] text-lg py-2 rounded-lg mb-5"
        onClick={clickHandler}
      >
        Generate
      </button>
    </div>
  );
}

export default Random;
