function TestimonialsCards(props) {
  return (
    <>
    <div className=" lg:px-4 w-full min-[720px]:w-2/4">
                <div className="shadow-md bg-gray-50 dark:bg-gray-800 relative mb-10 rounded-xl overflow-hidden p-8 min-[540px]:p-10  min-[720px]:pl-6 min-[720px]:pr-6 min-[720px]:pt-10 min-[720px]:pb-10 min-[960px]:p-10">
                  <div className="items-center flex mb-10">
                    <div className="w-full h-20 max-w-[5.00rem] mr-5 rounded overflow-hidden min-[720px]:h-16  min-[720px]:max-w-[3.75rem] min-[960px]:h-20 min-[960px]:max-w-[5.00rem]">
                      <img
                        className="w-full h-auto max-w-full"
                        src={props.img}
                      />
                    </div>

                    <div className="w-full">
                      <h5 className="dark:text-white text-gray-900 text-lg font-semibold mb-1">
                        {props.name}
                      </h5>

                      <p className="dark:text-white text-gray-500 text-xs">
                        {props.job}
                      </p>
                    </div>
                  </div>

                  <p className="dark:text-white text-gray-500">
                    “I believe in lifelong learning and Learn. is a great place
                    to learn from experts. I've learned a lot and recommend it
                    to all my friends and familys.”
                  </p>

                  <div>
                    <span className="absolute right-0 top-0">
                     <img src="../circle.svg" alt="" />
                    </span>
                  </div>
                </div>
              </div>
    </>
  )
}

export default TestimonialsCards