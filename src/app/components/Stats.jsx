import React from "react";

function Stats() {
  return (
    <div className="mx-48 shadow-lg mt-4 bg-gray-100 items-center justify-center opacity-70 pb-3 flex flex-col">
      <div className="py-2">Statistics</div>
      <div className="flex justify-evenly w-full">
      <div className="drop-shadow-lg bg-white rounded-md px-2 py-4">Trusted by: 800 Companies</div>
      <div className="drop-shadow-lg bg-white rounded-md px-2 py-4">2000 Polls created</div>
      <div className="drop-shadow-lg bg-white rounded-md px-2 py-4">1,200,000 Respondants</div>
    </div>
    </div>
  );
}

export default Stats;
