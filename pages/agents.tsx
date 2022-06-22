import { GetServerSideProps } from 'next'
import Image from 'next/image'
import React from 'react'

type Data = {
  data: [{
    uuid: string,
    displayName: string,
    fullPortraitV2: string,
    isPlayableCharacter: boolean,
    description: string,
  }]
}

const agents = ({agents}: {agents: Data}) => {
  console.log(agents)
  const agentsToShow = agents.data.filter((agent) => {
    return agent.isPlayableCharacter === true
  })

  return (
    <div className='px-6 pt-12'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {agentsToShow.map((agent)  => (
          <div key={agent.uuid} className='flex items-center'>
            <Image className='z-10' width={800} height={800} src={agent.fullPortraitV2} alt='agent' objectFit='contain'/>
            <div className='flex flex-col gap-3'>
              <h1 className='text-red-600 text-2xl'>{agent.displayName}</h1>
              <h1 className='text-white'>{agent.description}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('https://valorant-api.com/v1/agents')
  const agents = await res.json()

  return {
    props: {
      agents
    }
  }
}

export default agents