import ServiceCard from "./ServiceCard";
import img1 from "../../assets/new/1.svg"
import img2 from "../../assets/new/2.svg"
import img3 from "../../assets/new/3.svg"
function Service() {
  const cards=[
    {
     img:img1,
     titel:"Marketing Solutions"
    },
    {
     img:img2,
     titel:"Business Analytics" 
    },
    {
     img:img3,
     titel:"UX & UI Design"
    }
 ]
  return (
    <>
      <section className="dark:bg-gray-900 pb-12 pt-20 min-[960px]:pb-24  min-[960px]:pt-28">
        <div className=" px-4 w-full m-auto min-[400px]:max-w-[25.00rem]  min-[540px]:max-w-[33.75rem] min-[720px]:max-w-[45.00rem] min-[960px]:max-w-[60.00rem] min-[1140px]:max-w-[71.25rem] min-[1320px]:max-w-[82.50rem]">
          <div className="pb-12 flex-wrap flex -m-4">
            <div className="px-4 w-full">
              <div className="text-center max-w-[31.88rem] mx-auto mb-16">
                <span className="dark:text-white text-blue-600 text-lg font-semibold mb-2">
                  What we Serve
                </span>

                <h2 className="dark:text-white text-gray-900 text-[2.50rem] leading-none font-bold mb-3">
                  Our Best Services
                </h2>

                <p className="dark:text-white text-gray-500">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>

          <div className="flex-wrap justify-center flex -m-4">
<ServiceCard {...cards[0]}/>
<ServiceCard {...cards[1]}/>
<ServiceCard {...cards[2]}/>

          </div>
        </div>
      </section>
    </>
  );
}

export default Service;
