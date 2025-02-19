import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    // if i have given the parameter in main.jsx as userid, than it automatically can be accessed in the element we have mentioned with that route i.e user.jsx
    <div className='text-center text-3xl bg-orange-500 max-w-52 m-auto my-5 p-5'>
      User: {userid}
    </div>
  )
}

export default User
