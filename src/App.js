import React from 'react'
import AddUser from './components/Users/AddUser'
import UsersList from './components/Users/UsersList'

function App() {
  return (
    <div>
      <AddUser />
      <UsersList user={[]} />
    </div>
  )
}

export default App
