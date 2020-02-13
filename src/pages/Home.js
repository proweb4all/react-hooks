import React, { useContext } from 'react'
import { Search } from '../components/Search'
import { Card } from '../components/Card'
import { GithubContext } from '../context/github/githubContext'

export const Home = () => {
  // const cards = new Array(9).fill('').map((_, i) => i)

  const {loading, users} = useContext(GithubContext)
  return (
    <>
      <h1>Поиск пользователя</h1>
      <Search />
      <div className='row'>

        {loading
          ? <p className='text-center'>Загрузка...</p>
          : users.map(user => (
              <div className='col-sm-4 mb-4' key={user}>
                <Card user={user} />
              </div>
            ))
        }
      </div>
    </>
  )
}