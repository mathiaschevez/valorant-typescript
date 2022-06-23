import { GetServerSideProps } from 'next'
import Image from 'next/image'
import React, { useState } from 'react'

type Data = {
  data: [{
    uuid: string,
    displayName: string,
    fullPortraitV2: string,
    isPlayableCharacter: boolean,
    description: string,
    abilities: Abilities,
  }]
}

type Abilities = [{
  displayName: string,
  description: string,
  displayIcon: string,
}]

const Agents = ({agents}: {agents: Data}) => {
  const [activeAgent, setActiveAgent] = useState(agents.data[0])

  console.log(agents)
  const agentsToShow = agents.data.filter((agent) => {
    return agent.isPlayableCharacter === true
  })

  return (
    <div className='px-16 pt-14 overflow-scroll w-screen'>
      <div className='fixed w-1/3 overflow-scroll h-screen pb-16 no-scroll-bar'>
        {agentsToShow.map((agent, i)  => (
          <div key={agent.uuid} className='flex items-center'>
            <div className='flex flex-col gap-3'>
              <h1 onClick={() => setActiveAgent(agents.data[i])} className='transition ease-in-out text-white text-7xl font-bold agent-name cursor-grab'>{agent.displayName.toUpperCase()}</h1>
            </div>
          </div>
        ))}
      </div>
      <div className='ml-[430px]'>
        <Image className='z-10' width={600} height={600} src={activeAgent.fullPortraitV2} alt='agent' objectFit='contain'/>
        <h1 className='text-white z-0'>{activeAgent.description}</h1>
        <div className='flex gap-3'>
          {activeAgent.abilities.map((ability) => (
            <div className='border border-black' key={ability.displayName}>
              <Image src={ability.displayIcon} alt='ability' width={60} height={60} objectFit='contain'/>
              <h1>{ability.displayName}</h1>
            </div>
          ))}
        </div>
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

export default Agents