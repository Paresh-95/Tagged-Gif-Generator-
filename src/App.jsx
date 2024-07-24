import React from "react";
import Random from "./components/Random";
import Tag from "./components/Tag";

function App() {
  return (
    <>
      <div className="background w-full flex flex-col h-screen relative overflow-x-hidden p-4">
        <h1 className="bg-white rounded-lg w-full sm:w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 text-center mt-5 px-6 py-3 text-3xl sm:text-4xl mx-auto font-bold">
          RANDOM GIFS
        </h1>
        <div  
          id="main"
          className="flex flex-col md:flex-row gap-8  md:w-3/4 w-[90%] justify-center items-center gap-y-10 mt-5 mx-auto"
        >
          <Random />
          <Tag />
        </div>
      </div>
    </>
  );
}

export default App;
