function FAQCard() {

  return (
    <>
      <div className="dark:bg-gray-800 shadow-lg w-full mb-8 rounded-lg p-4 min-[540px]:p-8  min-[960px]:pl-6 min-[960px]:pr-6 min-[1140px]:pl-8 min-[1140px]:pr-8">
        <button className=" items-start cursor-pointer flex w-full h-10">
          <div className="text-blue-600 dark:bg-gray-700 bg-blue-600/[0.05] items-center justify-center flex w-full h-10 max-w-[2.50rem] mr-5 rounded-lg">
            <button className="hover:rotate-180">
              
              <img src="../bottom.svg" alt="" />
            </button>
          </div>

          <div className="w-full text-lg text-gray-900 font-semibold">
            <h4 className="dark:text-white mt-1">How long we deliver your first blog post?</h4>
          </div>
        </button>
      </div>
    </>
  );
}

export default FAQCard;
