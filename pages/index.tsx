import React from 'react'

export default function Home() {
  const image = 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt881609ccc5207499/60b1901d3aac347374b5d9d1/VALORANT_YR1_ArticleHero_16_9.jpg'

  return (
    <div>
      <img className='w-screen' src={image}/>
      <div className='pb-6'>
        <h1 className='text-white text-center text-3xl my-9'>WELCOME TO VALORANT HEADQUARTERS</h1>
        <div className='grid grid-cols-4'>
          <div className='flex items-center justify-center'>
            <h1>AGENTS</h1>
          </div>
          <div className='flex items-center justify-center'>
            <h1>WEAPONS</h1>
          </div>
          <div className='flex items-center justify-center'>
            <h1>MAPS</h1>
          </div>
          <div className='flex items-center justify-center'>
            <h1>SKINS</h1>
          </div>
        </div>
      </div>
    </div>
  )
}


