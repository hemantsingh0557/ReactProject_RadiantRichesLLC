import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <div className='  bg-slate-900 text-gray-300 text-[14px]  flex justify-center items-center sm:gap-20  h-20 ' >

        <div className=' relative ' >
            <CiSearch className=' absolute left-1 top-1 sm:flex text-2xl text-white font-[700] -mt-14px md:mt-0   md:text-gray-600  hidden ' />
            <input className=' p-1 rounded-md w-60 hidden md:block  ' type="text" />
        </div>

        <div className=' flex gap-3 sm:gap-10 sm:text-base text-[11px] ' >
            <div>Categories</div>
            <div>Website Builders</div>
            <div>Today's deals</div>
        </div>

    </div>
  )
}

export default Header