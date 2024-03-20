import React, { useEffect, useState } from 'react'
import table from '../assets/img/table.png'
import cpu from '../assets/img/cpu.png'
import purse from '../assets/img/purse.png'
import jacket from '../assets/img/jacket.png'
import Card from './Card'
import Loading from './Loading'

const data = [
  {
    id:1,
    image: jacket,
    title: "The north coat",
    price: "$260",
    rating: "5",
    keywords: [
      "hello",
      "how are you"
    ]
  },
  {
    id:2,
    image: purse,
    title: "Gucci duffle bag",
    price: "$960",
    rating: "4.5",
    keywords: [
      "hello",
      "how are you"
    ]
  },
  {
    id:3,
    image: cpu,
    title: "RGB liquid CPU Cooler",
    price: "$160",
    rating: "4.5",
    keywords: [
      "hello",
      "how are you"
    ]
  },
  {
    id:4,
    image: table,
    title: "small BookSelf",
    price: "$360",
    rating: "5",
    keywords: [
      "hello",
      "how are you"
    ]
  },
  {
    id:5,
    image: jacket,
    title: "The north coat",
    price: "$260",
    rating: "5",
    keywords : [
      "hello",
      "how are you"
    ]
  },
  {
    id:6,
    image: purse,
    title: "Gucci duffle bag",
    price: "$960",
    rating: "4.5",
    keywords: [
      "hello",
      "how are you"
    ]
  },
  {
    id:7,
    image: cpu,
    title: "RGB liquid CPU Cooler",
    price: "$160",
    rating: "4.5",
    keywords: [
      "hello",
      "how are you"
    ]
  },
  {
    id:8,
    image: table,
    title: "small BookSelf",
    price: "$360",
    rating: "5",
    keywords: [
      "hello",
      "how are you"
    ]
  }
  ]
const Home = () => {
  const [isLoading, setIsLoading] = useState(false)
  useEffect(()=>{
    setIsLoading(true)
    setTimeout(()=>{
      setIsLoading(false)
    }, 10000)
  }, [])
  
  return (
    <div className='flex flex-row flex-wrap gap-x-5'>
      {isLoading ? <Loading/> : 
        <div className='flex flex-row flex-wrap gap-x-5'>
          {data.map((item, idx )=>(
            <div key={idx}>
             <Card data={item}/>
             <p>{idx}</p>
            </div>
          ))}
        </div>
      }
    </div>
  )
}

export default Home
