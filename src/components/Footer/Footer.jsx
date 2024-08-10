
const Footer = () => {
  return (
    <>
    <div className="grid lg:grid-cols-4  w-[80%] mx-auto my-20 md:grid-cols-3 sm:grid-cols-2 text-center">
      <div>
        <h3 className="text-xl font-bold my-2">Men's Shoes</h3>
        <p className="my-2 text-sm font-bold text-[#858484] hover:text-black cursor-pointer">Running</p>
        <p className="my-2 text-sm font-bold text-[#858484] hover:text-black cursor-pointer">Basketball</p>
        <p className="my-2 text-sm font-bold text-[#858484] hover:text-black cursor-pointer">Golf</p>
        <p className="my-2 text-sm font-bold text-[#858484] hover:text-black cursor-pointer">Tennis Shoes</p>
      </div>


      <div>
        <h3 className="text-xl font-bold my-2">Women's Shoes</h3>
        <p className="my-2 text-sm font-bold text-[#858484] hover:text-black cursor-pointer">Running</p>
        <p className="my-2 text-sm font-bold text-[#858484]  hover:text-black cursor-pointer">Basketball</p>
        <p className="my-2 text-sm font-bold text-[#858484] hover:text-black cursor-pointer">Golf</p>
        <p className="my-2 text-sm font-bold text-[#858484] hover:text-black cursor-pointer">Tennis Shoes</p>
      </div>


      <div>
        <h3 className="text-xl font-bold my-2">Kids's Shoes</h3>
        <p className="my-2 text-sm font-bold text-[#858484] hover:text-black cursor-pointer">Running</p>
        <p className="my-2 text-sm font-bold text-[#858484] hover:text-black cursor-pointer">Basketball</p>
        <p className="my-2 text-sm font-bold text-[#858484] hover:text-black cursor-pointer">Golf</p>
        <p className="my-2 text-sm font-bold text-[#858484] hover:text-black cursor-pointer">Tennis Shoes</p>
      </div>

      <div>
        <h3 className="text-xl font-bold my-2">About Us</h3>
        <p className="my-2 text-sm font-bold text-[#858484] hover:text-black cursor-pointer">Our Story</p>
        <p className="my-2 text-sm font-bold text-[#858484] hover:text-black cursor-pointer">Careers</p>
        <p className="my-2 text-sm font-bold text-[#858484] hover:text-black cursor-pointer">Contact Us</p>
        <p className="my-2 text-sm font-bold text-[#858484] hover:text-black cursor-pointer">Press</p>
      </div>


    </div>
    <div className="flex flex-row justify-between items-center flex-wrap bg-[#ffa27f] p-5 sm:felx-col gap-4">
      <div className="sm:text-center w-[100%]">
      <p className="text-sm font-semibold sm:text-center"> © 2024 <span className="text-red-600">Offside.</span> All rights reserved.Design By <a href="https://www.linkedin.com/in/sherifemad/" target="_blank"><span className="text-red-600">Sherif Emad.</span></a></p>
      </div>

      <div className="flex justify-center items-center gap-4 sm:text-center w-[100%]">
      <p className="text-sm font-semibold hover:text-[#858484] cursor-pointer">Privacy Policy</p>
      <p className="text-sm font-semibold hover:text-[#858484] cursor-pointer">Terms & Conditions</p>
      <p className="text-sm font-semibold hover:text-[#858484] cursor-pointer">Cookie Policy</p>
      </div>
    </div>
    </>
  )
}

export default Footer