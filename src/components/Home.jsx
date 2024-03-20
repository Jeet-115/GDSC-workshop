import React from 'react'
import table from '../assets/img/table.png'
import cpu from '../assets/img/cpu.png'
import purse from '../assets/img/purse.png'
import jacket from '../assets/img/jacket.png'
import Card from './Card'

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
  return (
    <div className='flex flex-row flex-wrap gap-x-5'>
      {data.map((item, idx )=>(
          <div key={idx}>
          <Card data={item}/>
          <p>{idx}</p>
        </div>
      ))}
        {/* <Card data={data} />
        <Card image={table} title={"Table"} price={"$10"} rating={"5"} />
        <Card image={cpu} title={"CPU"} price={"$20"} rating={"4"} />
        <Card image={purse} title={"Purse"} price={"$10"} rating={"5"} />
        <Card image={jacket} title={"Jacket"} price={"$10"} rating={"5"} /> */}
    </div>
  )
}

export default Home
