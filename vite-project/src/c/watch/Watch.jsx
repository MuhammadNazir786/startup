import "./Watch.css"
function Watch() {
  return (
    <>
      <section className="lg:flex lg:w-full text-white">
        <section className="lg:pb-32 bg-blue-600 pt-5 px-20 pb-24  lg:pt-10">
          <h5 className="lg:pt-20 text-lg pb-3">Watch Our Intro Video</h5>
          <h2 className="text-3xl leading-10 font-bold pb-6 lg:text-5xl">
            Making world a better place for you and us
          </h2>
          <p className="pb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at
            quam fringilla, scelerisque nisl in, accumsan diam. Quisque
            sollicitudin risus eu tortor euismod imperdiet.
          </p>
          <a
            className=" text-white no-underline font-medium py-3 px-9 inline-block border-2 border-white border-solid rounded-full"
            href="https://demo.tailgrids.com/javascript:void(0)"
          >
            Know More
          </a>
        </section>
        <section className="secss w-screen  h-screen flex justify-center items-center">
        <a href="#" class="absolute z-40 flex h-20 w-20 items-center justify-center rounded-full bg-primary md:h-[100px] md:w-[100px]">
              <span class="absolute top-0 right-0 z-[-1] h-full w-full animate-ping rounded-full bg-primary bg-opacity-20 delay-300 duration-1000"></span>
              <svg width="23" height="27" viewBox="0 0 23 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.5 12.634C23.1667 13.0189 23.1667 13.9811 22.5 14.366L2.25 26.0574C1.58333 26.4423 0.750001 25.9611 0.750001 25.1913L0.750002 1.80866C0.750002 1.03886 1.58334 0.557731 2.25 0.942631L22.5 12.634Z" fill="white"></path>
              </svg>
            </a>
        </section>
      </section>
    </>
  );
}

export default Watch;
