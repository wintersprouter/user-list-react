import React from 'react'
const AddUser = props => {
  const addUserHandler = event => {
    event.preventDefault()
  }
  return (
    <from onSubmit={addUserHandler}>
      <label htmlFor="username">Username</label>
      <input id="username" type="text"></input>
      <label htmlFor="age">Age (Years)</label>
      <input id="age" type="number"></input>
      <button type="submit">Add User</button>
    </from>
  )
}
export default AddUser
