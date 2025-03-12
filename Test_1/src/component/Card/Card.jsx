import React from 'react'

const Card = ({name,designation,Email,Bio}) => {
  return (
    
          <div className='bg-white p-4 rounded-lg bg-gray-200 shadow-lg'>
            <h2 className='font-bold'>{name}</h2>
            <p>{designation}</p>
            <p>{Email}</p>
            <p>{Bio}</p>
          </div>
        
  )
}

export default Card