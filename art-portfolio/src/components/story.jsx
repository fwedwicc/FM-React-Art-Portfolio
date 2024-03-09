import React from "react";


function Story() {
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
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical col-start-1 col-end-5 py-8">
        <li>
          <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
          </div>
          <div className="timeline-start md:text-end mb-1">
            <time className="font-mono italic">2018</time>
            <div className="text-7xl font-black">Lorem Ipsum</div>
            <p className="pt-8">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, quidem a ab ea qui nisi dignissimos officia quas, consectetur accusantium amet commodi obcaecati explicabo sapiente consequatur corrupti. Dicta, accusantium sapiente. Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic">2019</time>
            <div className="text-7xl font-black">Lorem Ipsum</div>
            <p className="pt-8">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, quidem a ab ea qui nisi dignissimos officia quas, consectetur accusantium amet commodi obcaecati explicabo sapiente consequatur corrupti. Dicta, accusantium sapiente. Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
          </div>
          <div className="timeline-start md:text-end mb-10">
            <time className="font-mono italic">2001</time>
            <div className="text-lg font-black">iPod</div>
            The iPod is a discontinued series of portable media players and multi-purpose mobile devices designed and marketed by Apple Inc. The first version was released on October 23, 2001, about 8+1⁄2 months after the Macintosh version of iTunes was released. Apple sold an estimated 450 million iPod products as of 2022. Apple discontinued the iPod product line on May 10, 2022. At over 20 years, the iPod brand is the oldest to be discontinued by Apple
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic">2007</time>
            <div className="text-lg font-black">iPhone</div>
            iPhone is a line of smartphones produced by Apple Inc. that use Apple's own iOS mobile operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold. As of 2022, the iPhone accounts for 15.6% of global smartphone market share
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
          </div>
          <div className="timeline-start md:text-end mb-10">
            <time className="font-mono italic">2015</time>
            <div className="text-lg font-black">Apple Watch</div>
            The Apple Watch is a line of smartwatches produced by Apple Inc. It incorporates fitness tracking, health-oriented capabilities, and wireless telecommunication, and integrates with iOS and other Apple products and services
          </div>
        </li>
      </ul>
    </div>
  )
}


export default Story