import React from 'react'
const Card = ({ data }) => {
  return (
    <div className='w-52 bg-blue-100 rounded-lg p-3 flex flex-col gap-8 shadow'>
      <h2 className='text-lg font-bold mt-2'>{data.title}</h2>
      <p className='text-xs text-black'>{data.description}</p>
      <button className='border px-4 py-2 bg-red-500 text-white rounded-xl border-transparent '>Delete</button>
    </div>
  )
}
export default Card
