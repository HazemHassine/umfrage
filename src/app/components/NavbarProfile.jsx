import React from "react";


// still not finished
function NavbarProfile() {
  return (
    <div className="flex justify-between px-40 items-center py-4 ring-2 ring-slate-700 ring-opacity-30">
      <div className="align-start">LOGO</div>
      <div className="flex justify-between gap-2 items-center w-1/3 px-4">
        <div className="text-slate-500 cursor-pointer hover:text-slate-600 transition-all duration-200 ease-in-out">Poll creators</div>
        <div className="text-slate-500 cursor-pointer hover:text-slate-600 transition-all duration-200 ease-in-out">Poll respondatns</div>
      </div>
      <button className="py-1 px-4 bg-slate-500 hover:bg-slate-600 transition-all duration-200 ease-in-out rounded-sm text-white focus:ring-0">
        Sign in
      </button>
    </div>
  );
}

export default NavbarProfile;
