import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ContextTest = () => {
    const [posts, setPosts] = useState([])
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const client = axios.create({
        baseURL: 'https://jsonplaceholder.typicode.com/posts'
    })

    //GET   
    useEffect(() => {
        const fetchData = async () => {
            let res = await client.get('?_limits=11')

            setPosts(res.data)
            // console.log(res.data)
        }
        fetchData()
    }, [])

    //POST
    const addPosts = async (title,body) =>{
        let res = await client.post('',{
            title : title,
            body : body
        })
        setPosts((posts) => [res.data, ...posts])
    }

    //DELETE
    const deletePost = async(id) =>{
        await client.delete(`${id}`)
        setPosts(
            posts.filter((post) =>{
                return post.id !== id
            })
        )
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        addPosts(title,body)
    }
    return (
        <>
            <form onSubmit={() => handleSubmit()}>
                <input type="text" className="form-control" value={title}
                onChange={(e)=> setTitle(e.target.value)}
                />
                <textarea name="" className="form-control" id="" cols="10" rows="8"
                    value={body} 
                    onChange={(e) => setBody(e.target.value)}
                    ></textarea>
                <button type="submit">Add Post</button>
            </form>
            <table border={{ border: "1px solid grey" }}>
                <thead>
                    <tr>
                        <th>
                            ID
                        </th>
                        <th>
                            Title
                        </th>
                        
                        <th>
                            Body
                        </th>
                        <th>
                            Action
                        </th>
                    </tr>
                </thead>
                {
                    posts.map((post) => {
                        const {id,title,body} = post
                       return(
                        <tbody key={id}>
                            <tr >
                                <td>{id}</td>
                                <td>{title}</td>
                                <td>{body}</td>
                                <td>
                                    <button onClick={() => deletePost(id)}>Delete</button>
                                </td>
                            </tr>
                        </tbody>
                       )
                    })

                }

            </table>
        </>

    )
}

export default ContextTest