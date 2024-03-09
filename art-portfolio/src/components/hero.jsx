import React from "react";

function Hero() {
  return (
    <div className="grid grid-cols-4 gap-2 px-20 pt-12">
      {/* Heading */}
      <h1 class="text-9xl font-bold col-span-2">Explore my creation.</h1>
      <p class="py-6 col-start-1 col-end-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum quis, sequi non quibusdam mollitia suscipit necessitatibus officiis odio quas explicabo laudantium cum veniam cumque! Nihil quasi iste optio ea ab?</p>
      {/* Image card and content 1 */}
      <div className="col-start-4">
        <div className="skeleton w-auto h-96" style={{ marginTop: '-14rem' }}></div>
        <h1 className="text-5xl font-bold pt-10">2018</h1>
        <p className="py-6">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis voluptas laboriosam velit eum
          magni illum neque consequuntur nesciunt quo quae, ab cupiditate eveniet doloremque.</p>
      </div>
      {/* Image card and content 2 */}
      <div className="col-start-3">
        <div className="skeleton w-auto h-96" style={{ marginTop: '-25rem' }}></div>
        <h1 className="text-5xl font-bold pt-10">2018</h1>
        <p className="py-6">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis voluptas laboriosam velit eum
          magni illum neque consequuntur nesciunt quo quae, ab cupiditate eveniet doloremque.</p>
      </div>
      {/* Image card and content 3 */}
      <div className="col-start-2">
        <div className="skeleton w-auto h-96" style={{ marginTop: '-25rem' }}></div>
        <h1 className="text-5xl font-bold pt-10">2018</h1>
        <p className="py-6">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis voluptas laboriosam velit eum
          magni illum neque consequuntur nesciunt quo quae, ab cupiditate eveniet doloremque.</p>
      </div>
      {/* Link into Works */}
      <div className="col-start-1" style={{ marginTop: '-35rem' }}>
        <h4 className="pt-32 text-center">Want more? See all</h4>
      </div>
    </div>
  )
}

export default Hero