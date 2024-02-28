import checkIcon from '../../assets/checkIcon.svg';
import info from '../../assets/info.svg';
import leftDropdown from '../../assets/leftDropdown.svg';
import builderdata from './Builderdata';
import builderImage from '../../assets/builderImage.svg';
import builderDropdown from '../../assets/builderDropdown.svg';
import Stars4 from '../../assets/Stars4.svg';
import checkbox from '../../assets/checkbox.svg';
import carddata from './CardData';

const Home = () => {
  return (
    <div className='  text-main_col bg--500 flex flex-col md:pl-10 md:pr-10  lg:px-28 2xl:pl-80 2xl:pr-96 xl:px-28 sm:pl-8 sm:pr-12 p-8  gap-12'>

      <div> 
    
        <div className='bg--500  md:text-[3rem] text-main_co whitespace-nowrap text-center md:text-left pt-2 pb-2 '> Best Website builders in the US </div>

        <div className='bg--500 text-[14px] text-main_col flex flex-col md:flex-row justify-between border-t-2 border-b-2 py-3 gap-2'> 
          <p className='flex gap-2 flex-col md:flex-row md:gap-8'>
          <p>


            <img className='inline pr-2' src={checkIcon} alt="ok" />
            <span>Last Updated - February 22, 2020</span>
          </p>
            <p>

            <img className='inline pr-2 ' src={info} alt="ok" />
            <span>Advertising Disclosure</span>
            </p>
          </p>
          <p className='flex '>
            <span>Top Relevant</span>
            <select name="" id="" className='ml-2'></select>
          </p>
        </div>

        <div className='text-main_col sm:text-[12px] text-[11px] flex  my-3 lg:my-5 py-2 items-center justify-center md:items-start  md:justify-normal md:gap-12 lg:gap-20 md:text-[15px] gap-3 whitespace-nowrap '> 
          <span>Tools</span>
          <span>AWS Builder</span>
          <span>Start Build</span>
          <span>Build Supplies</span>
          <span>Tooling</span>
          <span>BlueHosting</span>
        </div>

        <div className='text-main_col sm:text-[15px] text-[11px] mb-6 lg:mb-12 py-1 pl-1 flex gap-1 whitespace-nowrap items-center justify-center  md:justify-normal md:text-[16px] md:gap-3'> 
          <span>Home</span>
          <img className='inline w-2' src={leftDropdown} alt="ok" />
          <span>Hosting for all</span>
          <img className='inline w-2' src={leftDropdown} alt="ok" />
          <span>Hosting</span>
          <img className='inline w-2' src={leftDropdown} alt="ok" />
          <span>Hosting6</span>
          <img className='inline w-2' src={leftDropdown} alt="ok" />
          <span>Hosting5</span>
        </div>

      </div>

      <div>
        <div className='flex flex-col gap-12'>
          {builderdata.map((item, i) => (
            <div key={i} className='flex flex-col  lg:flex-row justify-between gap-2 relative pb-2 mb-6 lg:mb-14'>
              {i <= 1 && (
                <div className='absolute left-0 top-0 -mt-4 -ml-1 bg-col_remark_bg h-h_remarks w-w_remarks rounded-r-lg gap-2 flex items-center justify-center'>
                  <img className='w-5' src={item.icon} alt="ok" />
                  <span className='text-white text-[16px] lg:text-[18px]'>{item.remarks}</span>
                </div>
              )}

              <div className='border border-1px rounded-full w-11 h-11 text-[20px] bg-white-500 text-main_col absolute left-0 top-4 -ml-6 mt-4 flex items-center justify-center'>
                {i + 1}   
              </div>

              <div className='flex flex-col md:items-center lg:flex-row gap-4 lg:gap-14 pl-4 lg:pl-14'>
                <div className='border-green-700 pt-6 lg:pt-12 flex flex-col justify-center items-center'>
                  <img className='inline' src={item.image} alt="ok" />
                  <p className=' lg:pt-10 text-main_col'>{item.builder}</p>
                </div>

                <div className='w-full md:w-3/4 lg:w-w_card  border-green-500'>
                  <div>
                    <span className='text-main_col text-[16px] font-bold'>{item.Topic1}</span>
                    <span className='text-main_col text-[16px]'>{item.description1}</span>
                  </div>
                  <div>
                    <p className='p-1 text-main_col2 text-[16px] font-bold'>{item.Topic2}</p>
                    <p className='pl-8 md:pl-0 lg:pl-10 pt-1 text-main_col text-[16px]'>{item.description2}</p>
                  </div>
                  <div className=' text-center'>
                    <span className='text-blue-500'>{item.showmore}</span>
                    <img className='inline' src={item.dropdown} alt="ok" />
                  </div>
                </div>
              </div>
            

              <div className='w-full lg:w-w_rating flex items-center md:pt-4 mt-4 flex-row lg:flex-col  justify-center gap-8'>
                <div className='bg-bg_rating text-col_rating px-6 lg:px-8 py-2 lg:py-3 rounded-b-lg flex flex-col items-center'>
                  <p className='text-[24px] lg:text-[32px] font-[470]'>{item.rating}</p>
                  <p>{item.feedback}</p>
                  <img className='p-1 lg:p-2' src={item.stars} alt="ok" />
                </div>
                <button className='bg-bg_view_col text-[14px] lg:text-[16px] text-white rounded-xl h-10 lg:h-view_h w-24 lg:w-view_w flex items-center justify-center'> View </button>
                {/* <div className='bg-bg_view_col text-[14px] lg:text-[16px] text-white rounded-xl h-10 lg:h-view_h w-24 lg:w-view_w flex items-center justify-center'> View </div> */}
              </div>
            </div>
          ))}
        </div>

        <div>
          <div className='flex flex-col lg:flex-row justify-between md:items-center gap-2 relative pb-2 mb-3 lg:mb-5'>
            <div className='border border-1px rounded-full w-11 h-11 text-[20px] bg-white-500 text-main_col absolute left-0 top-8 -ml-6 mt-4 flex items-center justify-center'>
              4
            </div>

            <div className='flex flex-col lg:flex-row gap-4 lg:gap-14 pl-4 lg:pl-14 pt-12'>
              <div className='border-green-700 pt-6 lg:pt-12 flex flex-col justify-center items-center'>
                <img className='inline' src={builderImage} alt="ok" />
                <p className='  text-main_col'>CDK</p>
              </div>

              <div className='w-full md:w-3/4 lg:w-w_card  border-green-500'>
                <div className='py-2 px-8'>
                  <span className='text-main_col text-[16px] font-bold'>CDK Resposive Builder:</span>
                  <span className='text-main_col text-[16px]'>An extensive library of widgets and apps, and detailed step-by-step guides</span>
                </div>

                <div className='text-main_col text-[13px] bg-gray-200 pl-1 pr-2  pb-2 rounded-md mt-3 w-16'>26 % Off</div>

                <div>
                  <p className='pt-1 pb-1 text-main_col2 text-[16px] font-bold pl-5'>Main highlights</p>
                  <ul className='pt-4 text-main_col text-[16px] bg-red-50 rounded-lg flex flex-col justify-center pl-8 '>
                    <li className='mb-3'> 
                      <span className='text-blue-500 px-2 py-1 rounded-md bg-white'>9.9</span> 
                      <span className='pl-1'>Building responsive</span>  
                    </li>
                    <li className='mb-3'> 
                      <span className='text-blue-500 px-2 py-1 rounded-md bg-white'>8.9</span> 
                      <span className='pl-1'>Cool</span>  
                    </li>
                    <li className='mb-3'> 
                      <span className='text-blue-500 px-2 py-1 rounded-md bg-white'>8.9</span> 
                      <span className='pl-1'>Docs</span>  
                    </li>
                  </ul>
                </div>

                <div className='text-main_col mt-3'>
                  <p className='p-1 text-main_col2 text-[16px] pl-4'>Why we love it</p>
                  <ul className='text-[16px] pl-8'>
                    <li>  
                      <img className='inline pr-1' src={checkbox} alt="" /> 
                      <span>Documentation</span>  
                    </li>
                    <li>  
                      <img className='inline pr-1' src={checkbox} alt="" /> 
                      <span>Easy Use</span>  
                    </li>
                    <li>  
                      <img className='inline pr-1' src={checkbox} alt="" /> 
                      <span>Out of box</span>  
                    </li>
                  </ul>
                </div>

                <div className='pt-2 text-center p-4'>
                  <span className='text-blue-500'>Show More</span>
                  <img className='inline' src={builderDropdown} alt="ok" />
                </div>
              </div>
            </div>

            

            <div className='w-full lg:w-w_rating flex md:flex-row lg:flex-col items-center md:pt-4 flex-row justify-center gap-16'>
              <div className='bg-bg_rating text-col_rating px-6 lg:px-8 py-2 lg:py-3 rounded-b-lg flex flex-col items-center'>
                <p className='text-[24px] lg:text-[32px] font-[470]'>9.1</p>
                <p>Very Good</p>
                <img className='p-1 lg:p-2' src={Stars4} alt="ok" />
              </div>
              <button className='bg-bg_view_col text-[14px] lg:text-[16px] text-white rounded-xl h-10 lg:h-view_h w-24 lg:w-view_w flex items-center justify-center'> View </button>
              {/* <div className='bg-bg_view_col text-[14px] lg:text-[16px] text-white rounded-xl h-10 lg:h-view_h w-24 lg:w-view_w flex items-center justify-center'> View </div> */}
            </div>
          </div>
        </div>

      </div>
      


      <div className='text-[15px] text-center text-main_col p-12 whitespace-nowrap md:text-[30px]'> Related deals you might like for </div>

      <div className='flex flex-col md:flex-row md:justify-center gap-6 lg:gap-12 mb-6 lg:mb-10'>
        {carddata.map((item, i) => (
          <div className='w-full lg:w-card_w bg--500 flex flex-col items-center  justify-center'  key={i}>
            <div className='px-auto flex justify-center bg--500 mb-4 lg:mb-14'>
              <img src={item.image} alt="" />
            </div>

            <div>
              <p className='flex items-center justify-center gap-4'>
                <span className='text-blue-900 font-bold text-[12px] lg:text-[13px] bg-gray-100 '>{item.offer}</span>
                <span className='text-blue-900 font-bold text-[12px] lg:text-[13px] bg-gray-100  whitespace-nowrap'>{item.deal}</span>
              </p>
              <p className='py-2 pr-3 lg:pr-5 text-center text-[14px] lg:text-[16px] text-gray-500 font-bold'>{item.builder}</p>
              <p className='text-gray-500 text-[12px] lg:text-[14px]'>{item.description}</p>
              <p className='h-9 bg--500 flex items-center justify-center'>
                <span className='text-gray-500 text-[16px] lg:text-[20px]'>{item.price}</span>
                <span className='text-gray-400 text-[12px] lg:text-[14px] ml-2 lg:ml-3 mt-2'>{item.mrp}</span>
                <span className='text-red-500 text-[12px] lg:text-[14px] ml-2 lg:ml-3 mt-2'>({item.offer})</span>
              </p>
              <button className='bg-bg_view_col text-[12px] lg:text-[16px] text-gray-50 rounded-xl h-8 lg:h-10 w-1/2 lg:w-card_w mx-auto flex items-center justify-center mt-2 lg:mt-0'> View Deal </button>
              {/* <div className='bg-bg_view_col text-[12px] lg:text-[16px] text-gray-50 rounded-xl h-8 lg:h-10 w-1/2 lg:w-card_w mx-auto flex items-center justify-center mt-2 lg:mt-0'> View Deal </div> */}
            </div>

          </div>
        ))}

      </div>


      <div className='flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0 md:justify-normal lg:justify-around w-full border-red-500 p-4'>
        <div className='bg--500 sm:text-[14px] text-[11px]  text-gray-500 w-full  whitespace-nowrap  text-center md:text-left md:w-3/4  md:text-[25px] md:py-3'> Sign up and get exclusive special deals </div>
        <div className='flex justify-center items-center w-full lg:w-fit'> 
          <button className='h-12 lg:h-14 text-[14px] lg:text-[14px] bg-blue-500 lg:w-32 text-white rounded-xl flex items-center justify-center w-1/2'> Sign Up </button>
          {/* <p className='h-12 lg:h-14 text-[14px] lg:text-[14px] bg-blue-500 lg:w-32 text-white rounded-xl flex items-center justify-center w-1/2'> Sign Up </p> */}
        </div>
      </div>

    </div>
  );
}

export default Home;
