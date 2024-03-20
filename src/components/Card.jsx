import React from 'react'
const Card = ({data}) => {
  const {image,title,price,rating} = data;
  return (
    <div className='h-screen flex items-center justify-center'>
      <div className='border border-black/80 p-5'>
        <div className='h-60 w-60'>
            <img src={image} className='h-full w-full' alt="" />
        </div>
        <div className='my-5 text-3xl space-y-2'>
            <p>{title}</p>
            <p>Price : {price}</p>
            <p>Rating : {rating}</p>
            {data.keywords.map((i, index)=>(
              <div key={index}>
                <p>{i}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Card
