import { GetServerSideProps } from 'next'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

type Data = {
  data: [{
    uuid: string,
    displayName: string,
    fullPortraitV2: string,
    isPlayableCharacter: boolean,
    description: string,
    abilities: Abilities,
    role: Role,
  }]
}

type Role = {
  displayName: string,
}

type Abilities = [{
  displayName: string,
  description: string,
  displayIcon: string,
}]

const Agents = ({agents}: {agents: Data}) => {
  const [activeAgent, setActiveAgent] = useState(agents.data[0])

  const agentsToShow = agents.data.filter(agent => {
    return agent.isPlayableCharacter === true
  })

  console.log(activeAgent)

  console.log(agentsToShow)

  return (
    <div className='px-16 pt-14 overflow-scroll w-screen'>
      <div className='fixed w-1/3 overflow-scroll h-screen pb-16 no-scroll-bar'>
        {agentsToShow.map((agent, i)  => (
          <div key={agent.uuid} className='flex items-center'>
            <div className='flex flex-col gap-3'>
              <h1 onClick={() => setActiveAgent(agentsToShow[i])} className={`transition ease-in-out text-white text-7xl font-bold agent-name cursor-grab`}>{agent.displayName.toUpperCase()}</h1>
            </div>
          </div>
        ))}
      </div>
      <div className='ml-[440px] pb-9 flex flex-col items-center justify-center'>
        <Image className='z-10' width={600} height={600} src={activeAgent.fullPortraitV2} alt='agent' objectFit='contain'/>
        <div className='flex flex-col gap-6 justify-between mt-9'>
          <div className='w-4/5'>
            <h1 className='text-white text-5xl mb-3 font-bold italic'>{activeAgent.role.displayName.toUpperCase()}</h1>
            <h1 className='text-white z-0'>{activeAgent.description}</h1>
          </div>
          <div className='flex justify-between w-4/5'>
            {activeAgent.abilities.filter((ability, i) => i < 4).map((ability) => (
              <div className='flex flex-col items-center gap-3 h-28 justify-between' key={ability.displayName}>
                <div className='border py-1 px-2'>
                  <Image src={ability.displayIcon} alt='ability' width={60} height={60} objectFit='contain'/>
                </div>
                <h1 className='text-center text-white text-sm w-full py-1'>{ability.displayName}</h1>
              </div>
            ))}
          </div>
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