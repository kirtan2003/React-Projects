import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data = useLoaderData();

    // const [data, setData] = useState([])

    // useEffect(() => {
    //   fetch('https://api.github.com/users/kirtan2003')
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data);
    //     setData(data);
    //   })
    // }, [])
    
  return (
    <div className='text-center m-4 bg-orange-500 text-2xl'>
      <p>Github Followers: {data.followers}</p>
      <p>Github Repositories: {data.public_repos}</p>
    </div>
  )
}

export default Github

export const getInfo = async() => {
    const response = await fetch('https://api.github.com/users/kirtan2003')
    return response.json()
}
