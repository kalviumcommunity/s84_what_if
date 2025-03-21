import React from 'react'
import axios from 'axios'
import './explore.css'
import { useState, useEffect } from 'react'

export default function Explore() {
    const [post, setPosts] = useState([])
    const [error, setError] = useState(null)
    const fetchposts = async() => {
        try{
            const response = await axios.get('http://localhost:8000/posts')
            setPosts(response.data.data


            )
        }
        catch(err){
            console.log(err)
            setError('Failed to fetch data')
        }

    }
    useEffect(()=> {
        fetchposts()
    }, [])
  return (
    <div>
      <div className='container'>
        {post.map((ele)=> (
            <QuestionCard key={ele.id} post={ele}/>
        ))}
      </div>
    </div>
  )
}
