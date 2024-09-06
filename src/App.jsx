import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch( import.meta.env.VITE_API+'getuser')
      .then(res => res.json())
      .then(result =>
        setUsers(result)
      )
  }, [])
  return (
    <div>
      <ul>
        {
          users.map(user =>
          (
            <li key={user.id}>{user.id} {user.name} {user.email}</li>
          )
          )
        }
      </ul>
    </div>
  )
}

export default App
