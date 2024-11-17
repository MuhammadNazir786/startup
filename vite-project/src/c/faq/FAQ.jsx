import FAQCard from "./FAQCard";
function FAQ() {
  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900 pb-12 pt-20 relative overflow-hidden min-[960px]:pb-24  min-[960px]:pt-28">
        <div className="px-4 w-full m-auto min-[400px]:max-w-[25.00rem]  min-[540px]:max-w-[33.75rem] min-[720px]:max-w-[45.00rem] min-[960px]:max-w-[60.00rem] min-[1140px]:max-w-[71.25rem] min-[1320px]:max-w-[82.50rem]">
          <div className="flex-wrap flex -m-4">
            <div className="px-4 w-full">
              <div className="text-center max-w-[32.50rem] mx-auto mb-16 min-[960px]:mb-20">
                <span className="text-blue-600 text-lg font-semibold mb-2">
                  FAQ
                </span>

                <h2 className="dark:text-white text-gray-900 text-[2.50rem] leading-none font-bold mb-4">
                  Any Questions? Look Here
                </h2>

                <p className="dark:text-white text-gray-500">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>

          <div className="flex-wrap flex -m-4">
            <div className="lg:px-4 w-full min-[960px]:w-2/4">
              <FAQCard />
              <FAQCard />
              <FAQCard />
            </div>
            <div className=" lg:px-4 w-full min-[960px]:w-2/4">
              <FAQCard />
              <FAQCard />
              <FAQCard />
            </div>
          </div>
        </div>

        <div className="bottom-0 absolute right-0 z-[-1]"></div>
      </section>
    </>
  );
}

export default FAQ;
