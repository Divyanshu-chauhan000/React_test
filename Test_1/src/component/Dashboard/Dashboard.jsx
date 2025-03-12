import React from 'react'
import Card from '../Card/Card.jsx'
import {data} from '../../assets/data.js'
const Dashboard = () => {
  return (
    <div className='grid grid-cols-3 gap-4  p-4 '> 
      {data.map((data, index) => (
          <Card key={index} name={data.name} Email={data.Email} designation={data.designation} Bio ={data.Bio} />
        ))}
</div>
  )
}

export default Dashboard