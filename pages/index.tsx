import React from 'react'

export default function Home() {
  const image = 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt881609ccc5207499/60b1901d3aac347374b5d9d1/VALORANT_YR1_ArticleHero_16_9.jpg'

  return (
    <div>
      <img className='w-screen' src={image}/>
      <div>
        <h1 className='text-white'>WELCOME TO VALORANT HEADQUARTERS</h1>
      </div>
    </div>
  )
}


