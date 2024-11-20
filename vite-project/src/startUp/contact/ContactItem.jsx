function ContactItem(props) {
  return (
    <>
    <div className="flex w-full max-w-[23.13rem] mb-8">
                    <div className="text-blue-600 bg-blue-600/[0.05] items-center justify-center flex w-full max-w-[3.75rem] mr-6 h-16 rounded overflow-hidden min-[540px]:h-16  min-[540px]:max-w-[4.38rem]">
                     <img src= {props.img} alt="" />
                    </div>

                    <div className="w-full">
                      <h4 className="dark:text-white text-gray-900 text-xl font-bold mb-1">
                        {props.title}
                      </h4>

                      <p className="dark:text-white text-gray-500">{props.desic}</p>
                    </div>
                  </div>
    
    </>
  )
}

export default ContactItem