import React from "react";

function Stats() {
  return (
    <div className="relative mx-auto max-w-7xl px-6 sm:px-12 md:px-20 lg:px-48 shadow-lg mt-6 bg-gray-100 items-center justify-center opacity-90 pb-6 flex flex-col text-center">
      <div className="py-4 text-xl font-bold text-gray-800">Statistics</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full text-center">
        <div className="drop-shadow-lg bg-white rounded-lg px-6 py-4 text-lg font-medium">
          Trusted by: <span className="font-bold">800</span> Companies
        </div>
        <div className="drop-shadow-lg bg-white rounded-lg px-6 py-4 text-lg font-medium">
          <span className="font-bold">2000</span> Polls Created
        </div>
        <div className="drop-shadow-lg bg-white rounded-lg px-6 py-4 text-lg font-medium">
          <span className="font-bold">1,200,000</span> Respondents
        </div>
      </div>
      <div className="underline text-sm cursor-pointer mt-4 text-blue-600 hover:text-blue-800 transition">
        More details
      </div>
    </div>
  );
}

export default Stats;
