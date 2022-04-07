
import React from 'react'
import { useGetAllPostsQuery, useGetPostByIdQuery, useCreatePostMutation,useUpdatePostMutation } from '../../sevices/post'


function About() {
    const [id, setId] = React.useState('')
    const [userData, setUserData] = React.useState({
        "title": '',
        "body": '',
        "userId": ''
    });
    //update post
    const [updatePost, responseInfo1] = useUpdatePostMutation()
    console.log(responseInfo1)
    const updatePostData={
        "id":1,
        "title":'update post',
        "body":"update body",
        "userId":1
    }
    //get all data
    const { data, error, isLoading } = useGetAllPostsQuery([])
    //get data from id
    const dataById = useGetPostByIdQuery(id)
    //create data
    const [createPost, responseInfo] = useCreatePostMutation()
    const createData = (e) => {
        e.preventDefault()
        createPost(userData)
    }

    return (
        <div>
            {
                error ? (
                    <>Oh no, there was an error</>
                ) : isLoading ? (
                    <>Loading...</>
                ) : data ? (
                    data.map((res, i) => {
                        return (
                            <div key={i}>
                                <h3 onClick={() => setId(res.id)}>{res.title}</h3>
                            </div>
                        )
                    })

                ) : null
            }
            {dataById.data ?
                <div>
                    <h1>Description</h1>
                    <h3>{dataById.data.body}</h3>
                    <h3>{dataById.data.id}</h3>
                </div> : null
            }

            <div>
                <h1>Form</h1>
                <form onSubmit={e => createData(e)}>
                    <input placeholder='title' onChange={e => setUserData({ ...userData, title: e.target.value })} />
                    <br />
                    <input placeholder='body' onChange={e => setUserData({ ...userData, body: e.target.value })} />
                    <br />
                    <input placeholder='userId' onChange={e => setUserData({ ...userData, userId: e.target.value })} />
                    <br />
                    <button type='submit'>Create</button>
                </form>
            </div>
            {/* update data */}
            <button onClick={()=>updatePost(updatePostData)}>Update post</button>


        </div>
    )
}

export default About