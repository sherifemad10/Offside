import banner from '../../assets/images/banner.png'
const Banner = () => {
  return (
    <div id='Customize' className=' w-[100%] relative'>

      <div className='w-[100%]'>
        <img className='w-[100%] h-[75vh]' src={banner} alt='banner'/>
        </div>

        <div className='absolute left-[20px] bottom-[4rem] w-[100%] text-white'>
          <p className='mx-20 font-bold'>Nike Electric Pack</p>
          <h2 className='text-5xl font-bold my-3'>WIN ON AIR</h2>
          <p className='text-sm font-bold'>Engineered for those who stand out.</p>
          <button className='bg-red-500 my-4 px-4 py-2 text-white rounded-md hover:bg-primary'>Shop Now</button>
        </div>
      

      
    </div>
  )
}

export default Banner
