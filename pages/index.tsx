import { GetServerSideProps, NextApiResponse } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import z from 'zod'



export default function Home() {

  return (
    <div className=''>
      <Link href={'/agents'}>
        <button>Agents</button>
      </Link>
    </div>
  )
}


