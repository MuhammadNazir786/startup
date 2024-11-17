import TeamCard from "./TeamCard"
import img1 from "../../assets/new/1.jpg"
import img2 from "../../assets/new/2.jpg"
import img3 from "../../assets/new/3.jpg"
import img4 from "../../assets/new/4.jpg"
function Team() {
  const cards=[
    {
     img:img1,
     name:"Melissa Tatcher",
     job:"MARKETING OPERATIONS"
    },
    {
      img:img2,
      name:"Stuard Ferrel",
      job:"DIGITAL MARKETER"
     },
     {
      img:img3,
      name:"Eva Hudson",
      job:"UI/UX DESIGNER"
     },
     {
      img:img4,
      name:"Martin Ethariam",
      job:"GRAPHIC DESIGNER"
     }
  ]
  return (
    <>
      <section className="bg-gray-100 dark:bg-gray-700 py-20 overflow-hidden min-[960px]:pb-28  min-[960px]:pt-28">
        <div className="px-4 w-full m-auto min-[400px]:max-w-[25.00rem]  min-[540px]:max-w-[33.75rem] min-[720px]:max-w-[45.00rem] min-[960px]:max-w-[60.00rem] min-[1140px]:max-w-[71.25rem] min-[1320px]:max-w-[82.50rem]">
          <div className="flex-wrap flex -m-4">
            <div className="px-4 w-full">
              <div className="text-center max-w-[31.88rem] mx-auto mb-16">
                <span className="text-blue-600 text-lg font-semibold mb-2">
                  Our Team
                </span>

                <h2 className="dark:text-white text-gray-900 text-[2.50rem] leading-none font-bold mb-3">
                  Our Team Members
                </h2>

                <p className="dark:text-white text-gray-500">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>

          <div className="flex-wrap justify-center flex -m-4">
            <div className="px-4 w-full min-[1140px]:w-5/6  min-[1320px]:w-3/4">
              <div className="dark:bg-gray-900 bg-gray-50 flex-wrap px-6 pt-10 relative flex shadow-xl rounded-xl">
               
<TeamCard {...cards[0]}/>
<TeamCard {...cards[1]}/>
<TeamCard {...cards[2]}/>
<TeamCard {...cards[3]}/>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Team;
