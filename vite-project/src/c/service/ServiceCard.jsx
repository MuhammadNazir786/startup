function ServiceCard(props) {
  return (
    <>
      <div className="  px-4 w-full min-[540px]:w-4/5  min-[720px]:w-2/4 min-[960px]:w-1/3">
        <div className="dark:bg-gray-800 hover:scale-105 transation-all duration-300 shadow-lg relative text-center mb-8  border-zinc-200 border-solid rounded-xl p-10 min-[720px]:pl-8  min-[720px]:pr-8 min-[960px]:pl-6 min-[960px]:pr-6 min-[960px]:pt-9 min-[960px]:pb-9 min-[1140px]:pl-11 min-[1140px]:pr-11 min-[1140px]:pt-11 min-[1140px]:pb-11">
          <div className="items-center relative inline-flex h-11 mx-auto mb-10">
            <img src={props.img} alt="" />
          </div>

          <h4 className="dark:text-white text-gray-900 text-2xl font-bold mb-3.5">
            {props.titel}
          </h4>

          <p className="dark:text-white text-gray-500">
            Lorem Ipsum is simply dummy text of the printing and industry.
          </p>
        </div>
      </div>
    </>
  );
}

export default ServiceCard;
