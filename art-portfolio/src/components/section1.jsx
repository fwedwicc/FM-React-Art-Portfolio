import React from "react";


function Section1() {
  return (
    <div className="grid grid-cols-4 gap-2 px-20 pt-12">
      <div className="col-span-2">
        <h1 className="lg:text-9xl text-4xl font-bold col-span-2">How it all started?</h1>
        <p className="py-6 pr-9 col-start-1 col-end-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis.Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis.</p>
      </div>
      <div className="col-span-2 mt-5">
        <div className="skeleton w-auto h-96"></div>
        <h1 className="text-5xl font-bold pt-12">2018</h1>
        <p className="py-6">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis voluptas laboriosam velit eum
          magni illum neque consequuntur nesciunt quo quae, ab cupiditate eveniet doloremque.</p>
      </div>
    </div>
  )
}


export default Section1