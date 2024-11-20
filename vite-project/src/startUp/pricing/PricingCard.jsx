function PricingCard(props) {
  return (
    <>
      <div className=" px-4 w-full min-[720px]:w-2/4  min-[960px]:w-1/3">
        <div className="dark:bg-gray-800 py-10 dark:border-gray-500 ps-8 relative mb-10 border-1 shadow-xl border-zinc-200 border-solid rounded-xl overflow-hidden min-[540px]:p-12  min-[960px]:pl-6 min-[960px]:pr-6 min-[960px]:pt-10 min-[960px]:pb-10 min-[1140px]:p-12">
          <span className="text-blue-600 text-lg font-semibold mb-3">
            {props.titel}
          </span>

          <h2 className="dark:text-white text-gray-900 text-[2.63rem] leading-none font-bold mb-5">
            {props.price}
            <span className="dark:text-white text-gray-500 font-medium">
              / year
            </span>
          </h2>
          <p className="dark:text-white text-gray-500 dark:border-gray-600 border-b-2 pb-8 mb-8 border-zinc-200 border-solid">
            Perfect for using in a {props.disc} website or a client project.
          </p>

          <div className="flex-col flex mb-9 gap-[0.88rem] dark:text-white text-gray-500">
            <p>{props.first}r</p>

            <p>{props.second}</p>

            <p>{props.third}</p>

            <p>{props.fourth}</p>

            <p>{props.fifth}</p>

            <p>{props.sixsth}</p>
          </div>

          <a
            className="no-underline dark:border-blue-600 hover:text-blue-600 bg-blue-600  text-white font-medium text-center w-full border-1 border-zinc-200 border-solid rounded-md px-16 lg:px-16 py-3 md:px-8"
            href="#"
          >
            {props.btn}
          </a>
        </div>
      </div>
    </>
  );
}

export default PricingCard;
