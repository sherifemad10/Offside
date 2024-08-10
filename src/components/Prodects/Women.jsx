
import {myProdect} from './Prodectlist'
import { MdOutlineShoppingCart } from "react-icons/md";
import contextlist from '../context/ThemeContext'
import { useContext } from 'react';




const Women = () => {
  const { addToCart} = useContext(contextlist);


    

  return (
    <div id='Women' className='w-[87%] mx-auto my-40'>
      <h2 className='text-start text-3xl font-barlow font-bold my-10'>Women Sneakers</h2>
       <div className='flex flex-wrap justify-center items-center gap-4 w-[100%]'>
        {
            myProdect.map((items) => {
              if(items.cata=== "women"){
                  return (
                    <>
                    <div key={items.id} className='flex flex-col flex-wrap w-[20rem] md:w-[20rem] sm:w-[90%] rounded-md p-4 transition-all hover:border-x-2 cursor-pointer'>
            <img className='w-full rounded-lg h-[320px] ' src={items.img} alt={items.name}/>
            
            <div>
              <h3 className='text-2xl font-bold p-3 '>{items.name}</h3>
              <hr/>
              <div className='flex justify-between px-3'>
                <p className='py-2 text-xl font-bold text-[#b34e2a]'>${items.price}</p>
                <button onClick={()=>{addToCart(items.id),this}} className='cursor-pointer bg-orange-200 rounded-full px-2 py-2 my-2 active:scale-95'><MdOutlineShoppingCart className='text-2xl'/></button>
              </div>

              </div>
            </div>
                    </>
                  )
          }
        })
          }

          
          
      

        
       </div>
      
      
    </div>
  )
}

export default Women
