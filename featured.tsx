import React from 'react'
import Dash from './dash'
import Image from 'next/image'

const Featured = () => {
  return (
    <div className='container pt-40  '>
       <div className='ml-20'>
      <h2 className="text-6xl font-bold">Our</h2>
      <h2 className="text-6xl font-bold pt-2">
        Featured <span className="text-orange-500">Food</span>
      </h2>

      <p className="max-w-[550px] pt-10 text-gray-700">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa placeat
        repellat expedita tempore hic iste. Laborum odit illo ex nostrum! Lorem
        ipsum dolor sit amet.
      </p>
      <Dash/>

<div className='grid grid-cols-[1fr,37%,1fr] gap-16 mt-10'>

  <div className='w-fit mx-auto self-end'>
    <Image src={"/assests/grid1.png"} width={300} height={600} alt='grid image'/>

<div className='space-y-4'>
  <Dash/>
  <h2 className='font-medium text-xl'>Shrimp Salad</h2>
  <p className='text-gray-700 text-[14px] xl:text-[16px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit Eaque ab perferendis voluptates .</p>

</div>
  </div>

{/* 2  div */}

  <div className='w-fit mx-auto '>
    <Image src={"/assests/grid2.png"} width={500} height={900} alt='grid image'/>

<div className='space-y-4'>
  <Dash/>
  <h2 className='font-medium text-xl'>Baked Apples</h2>
  <p className='text-gray-700 text-[14px] xl:text-[16px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit Eaque ab perferendis voluptates .</p>

</div>
  </div>


{/* 3 div */}

<div className='w-fit mx-auto self-end'>
    <Image src={"/assests/grid__3.png"} width={300} height={600} alt='grid image'/>

<div className='space-y-4'>
  <Dash/>
  <h2 className='font-medium text-xl'>Cherries chicken</h2>
  <p className='text-gray-700 text-[14px] xl:text-[16px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit Eaque ab perferendis voluptates .</p>

</div>
  </div>



</div>

      </div>
    </div>
  )
}

export default Featured
