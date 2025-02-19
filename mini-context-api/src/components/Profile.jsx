import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
  const {user} = useContext(UserContext);
  return (
    <div className='text-lg m-7'>
      {
        !user ? (
         <p>Please Login</p>
        ) : (
         <>
          <p>Welcome: {user.username}</p>
         </>
        )
      }
    </div>
  )
}

export default Profile
