import ContactItem from "./ContactItem";
import img1 from "../../assets/new/home.svg";
import img2 from "../../assets/new/call.svg";
import img3 from "../../assets/new/email.svg";
function Contact() {
  const cards = [
    {
      img: img1,
      titel: "Our Location",
      desic: "99 S.t Jomblo Park Pekanbaru 28292. Indonesia",
    },
    {
      img: img2,
      titel: "Phone Number",
      desic: "(+62)81 414 257 9980",
    },
    {
      img: img3,
      titel: "Email Address",
      desic: "info@yourdomain.com",
    },
  ];
  return (
    <>
      <section className="dark:bg-gray-900 py-20 relative overflow-hidden min-[960px]:pt-28  min-[960px]:pb-28">
        <div className="px-4 w-full m-auto min-[400px]:max-w-[25.00rem]  min-[540px]:max-w-[33.75rem] min-[720px]:max-w-[45.00rem] min-[960px]:max-w-[60.00rem] min-[1140px]:max-w-[71.25rem] min-[1320px]:max-w-[82.50rem]">
          <div className="flex-wrap flex -m-4 min-[960px]:justify-between">
            <div className="px-4 w-full min-[960px]:w-2/4  min-[1140px]:w-2/4">
              <div className="max-w-[35.63rem] mb-12 min-[960px]:mb-0">
                <span className="text-blue-600 font-semibold mb-4">
                  Contact Us
                </span>

                <h2 className="dark:text-white text-gray-900 text-[2.50rem] leading-none font-bold uppercase mb-6">
                  GET IN TOUCH WITH US
                </h2>

                <p className="dark:text-white text-gray-500 mb-9">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eius tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim adiqua minim veniam quis nostrud exercitation ullamco
                </p>

                <ContactItem {...cards[0]} />
                <ContactItem {...cards[1]} />
                <ContactItem {...cards[2]} />
              </div>
            </div>
            




            {/* <div className="absolute" >
              <img
                className="relative left-4 top-16 bottom-1 z-[-1]"
                src="../dot.svg"
                alt=""
              />
            </div> */}
            <section className=" lg:me-6 dark:bg-gray-800 rounded-lg shadow-lg px-3 w-full min-[960px]:w-2/4  min-[1140px]:w-[41.6667%]">
          
              <div className="relative rounded-lg p-8 min-[540px]:p-12">
                <form>
                  <div className=" mb-6 text-gray-500">
                    <input
                      className="dark:bg-gray-900 dark:border-gray-600 cursor-text py-3 px-3.5 inline-block w-full h-12 border-1 border-zinc-300 border-solid rounded"
                      placeholder="Your Name"
                      type="text"
                    />
                  </div>

                  <div className="mb-6 text-gray-500">
                    <input
                      className="dark:bg-gray-900 dark:border-gray-600 cursor-text py-3 px-3.5 inline-block w-full h-12 border-1 border-zinc-300 border-solid rounded"
                      placeholder="Your Email"
                      type="email"
                    />
                  </div>

                  <div className="mb-6 text-gray-500">
                    <input
                      className="dark:bg-gray-900 dark:border-gray-600 cursor-text py-3 px-3.5 inline-block w-full h-12 border-1 border-zinc-300 border-solid rounded"
                      placeholder="Your Phone"
                      type="text"
                    />
                  </div>

                  <div className="mb-6 text-gray-500">
                    <textarea className="dark:bg-gray-900 dark:border-gray-600 cursor-text py-3 px-3.5 inline-block w-full h-44 border-1 border-zinc-300 border-solid rounded" />
                  </div>

                  <div className="text-white">
                    <button className="bg-blue-600 items-start cursor-pointer text-center inline-block w-full h-12 border-2 border-blue-600 border-solid rounded-sm ">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </section>
            
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
