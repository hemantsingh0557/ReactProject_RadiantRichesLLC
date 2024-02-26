
const Footer = () => {
  return (
    <div className=' bg-slate-800 text-[13px] text-gray-400 sm:h-f_h h-full pt-8  gap-4  md:pl-24 md:px-10  p-0 flex  justify-between sm:flex-row flex-col    ' >

      <div className=' flex md:gap-48  gap-8 p-4 bg-r-500 '>
        <ul  className='list-none flex flex-col gap-4 ' >
          <li className=' uppercase text-gray-200 text-[16px] ' >Categories</li>
          <li>Web Builder</li>
          <li>Hosting</li>
          <li>Data Center</li>
          <li>Robotic-Automation</li>
        </ul>

        <ul className='list-none flex flex-col gap-4  ' >
          <li  className=' uppercase text-gray-200 ' >Contact</li>
          <li>Contact</li>
          <li>Privacy Policy</li>
          <li>Terms Of Service</li>
          <li>Categories</li>
          <li>About</li>
        </ul>

      </div>

           

      <div className=' text-gray-400 md:pr-40 sm:pt-14 flex gap-3 justify-center sm:justify-normal p-4 sm:p-0 ' >
        <div className="whitespace-nowrap">United States</div>
        <select className='bg-slate-800 h-6 text-gray-300  ' name="" id=""></select>
      </div>

    </div>
  )
}

export default Footer