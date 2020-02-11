import React from 'react'
import { Link } from 'react-router-dom'

export const Card = () => {
  const nikName = 'User'
  return (
    <div className='card'>
      <img src={''} alt={''} className='card-img-top' />
      <div className='card-body'>
        <h5 className='card-title'>{nikName}</h5>
        <Link to={`/profile/${nikName}`} className='btn btn-primary'>Открыть</Link>
      </div>
    </div>
  )
}
