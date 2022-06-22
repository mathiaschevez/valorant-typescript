import { GetServerSideProps } from 'next'
import Image from 'next/image'
import React from 'react'

type Data = {
  data: [{
    uuid: string,
    displayName: string,
    fullPortraitV2: string,
    isPlayableCharacter: boolean,
  }]
}

const agents = ({agents}: {agents: Data}) => {
  console.log(agents)
  const agentsToShow = agents.data.filter((agent) => {
    return agent.isPlayableCharacter === true
  })

  return (
    <div className=''>
      <div className='flex flex-col items-center'>
        {agentsToShow.map((agent)  => (
          <div key={agent.uuid} className='flex flex-col'>
            <Image width={250} height={250} src={agent.fullPortraitV2} alt='agent' objectFit='contain'/>
            <h1 className='text-white'>{agent.displayName}</h1>
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