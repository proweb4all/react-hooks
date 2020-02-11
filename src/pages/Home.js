import React from 'react'
import { Search } from '../components/Search'
import { Card } from '../components/Card'

export const Home = () => {
  const cards = new Array(9).fill('').map((_, i) => i)
  return (
    <>
      <h1>Поиск пользователя</h1>
      <Search />
      <div className='row'>
        {cards.map(card => {
          return (
            <div className='col-sm-4 mb-4' key={card}>
              <Card />
            </div>
          )
        })}
      </div>
    </>
  )
}