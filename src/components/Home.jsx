import React from 'react'
import table from '../assets/img/table.png'
import Card from './Card'
const Home = () => {
  return (
    <div className='flex flex-row'>
        <Card image={table} title={"Table"} price={"$10"} rating={"5"} />
        <Card image={table} title={"Table"} price={"$10"} rating={"5"} />
        <Card image={table} title={"Table"} price={"$10"} rating={"5"} />
        <Card image={table} title={"Table"} price={"$10"} rating={"5"} />
        <Card image={table} title={"Table"} price={"$10"} rating={"5"} />
    </div>
  )
}

export default Home
