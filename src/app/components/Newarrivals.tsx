import React from 'react'
import Item from './Items';
import data1 from '../../../public/aab'

const Newarrivals = () => {
    return (
        <div className='flex flex-col items-center gap-2 h-auto mt-[50px] '>
          <h1 className='text-3xl font-semibold'>NEW COLLECTIONS</h1>
          <hr className='w-[200px] h-[4px] rounded-[10px] bg-[#252525]'/>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-[50px]">
            {data1.map((item) => {
              return (
                <Item
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />
              );
            })}
          </div>
        </div>
      )
    }
export default Newarrivals