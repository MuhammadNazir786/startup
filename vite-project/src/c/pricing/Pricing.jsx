import PricingCard from "./PricingCard"
function Pricing() {
  const cards=[
    {
      titel:"Personal",
      price:"$59",
      disc:"personal",
      first:"1 User",
      second:"All UI components",
      third:"Lifetime access",
      fourth:"Free updates",
      fifth:"Use on 1 (one) project",
      sixsth:"3 Months support",
      btn:"Choose Personal"
    },
    {
      titel:"Businessl",
      price:"$199",
      disc:"Business",
      first:"5 User",
      second:"All UI components",
      third:"Lifetime access",
      fourth:"Free updates",
      fifth:"Use on 3 (Three) project",
      sixsth:"4 Months support",
      btn:"Choose Business"
    },
    {
      titel:"Professional",
      price:"$256",
      disc:"Professional",
      first:"Unlimited Users",
      second:"All UI components",
      third:"Lifetime access",
      fourth:"Free updates",
      fifth:"Use on Unlimited project",
      sixsth:"12 Months support",
      btn:"Choose Professional"
    }
  ]
  return (
<>
<section className="dark:bg-gray-900 pb-12 pt-20 relative overflow-hidden min-[960px]:pb-24  min-[960px]:pt-28">
          <div className="lg:px-4 w-full m-auto min-[400px]:max-w-[25.00rem]  min-[540px]:max-w-[33.75rem] min-[720px]:max-w-[45.00rem] min-[960px]:max-w-[60.00rem] min-[1140px]:max-w-[71.25rem] min-[1320px]:max-w-[82.50rem]">
            <div className="flex-wrap flex -m-4">
              <div className="px-4 w-full">
                <div className="text-center max-w-[31.88rem] mx-auto mb-16">
                  <span className="text-blue-600 text-lg font-semibold mb-2">
                    Pricing Table
                  </span>

                  <h2 className="dark:text-white text-gray-900 text-[2.50rem] leading-none font-bold mb-3">
                    Our Pricing Plan
                  </h2>

                  <p className="dark:text-white text-gray-500">
                    There are many variations of passages of Lorem Ipsum
                    available but the majority have suffered alteration in some
                    form.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex-wrap justify-center flex ">
             
<PricingCard {...cards[0]}/>
<PricingCard {...cards[1]}/>
<PricingCard {...cards[2]}/>

            </div>
          </div>
        </section>
</>
  )
}

export default Pricing