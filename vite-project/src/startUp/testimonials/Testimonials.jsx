import TestimonialsCards from "./TestimonialsCards";
import img1 from "../../assets/new/c1.jpg"
import img2 from "../../assets/new/1.jpg"
import img3 from "../../assets/new/c3.jpg"
import img4 from "../../assets/new/c4.jpg"

function Testimonials() {
  const cards=[
{
  img:img1,
  name:"Jason Keys",
  job:"Founder @ Dreampeet."
},
{
  img:img2,
  name:"Anee Doe",
  job:"CEO @ Trorex."
},
{
  img:img3,
  name:"Dipali Dow",
  job:"Founder @ Cradow."
},
{
  img:img4,
  name:"John Doe",
  job:"Founder @ Poettry"
}
  ]
  return (
    <>
      <section className=" dark:bg-gray-900 pb-7 pt-20 min-[960px]:pb-14  min-[960px]:pt-28">
        <div className="px-4 w-full m-auto min-[400px]:max-w-[25.00rem]  min-[540px]:max-w-[33.75rem] min-[720px]:max-w-[45.00rem] min-[960px]:max-w-[60.00rem] min-[1140px]:max-w-[71.25rem] min-[1320px]:max-w-[82.50rem]">
          <div className="flex-wrap justify-center flex -m-4">
            <div className="px-4 w-full">
              <div className="max-w-[31.88rem] mb-16 min-[960px]:mb-16">
                <span className="text-blue-600 text-lg font-semibold mb-2">
                  Testimonials
                </span>

                <h2 className="dark:text-white text-gray-900 text-[2.50rem] leading-none font-bold mb-3">
                  What our Clients Says
                </h2>

                <p className="dark:text-white text-gray-500">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>

          <div className=" flex-wrap justify-center flex -m-4">
            <TestimonialsCards {...cards[0]}/>
            <TestimonialsCards {...cards[1]}/>
            <TestimonialsCards {...cards[2]}/>
            <TestimonialsCards {...cards[3]}/>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
