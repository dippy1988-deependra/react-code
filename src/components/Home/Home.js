import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {increment,decrement} from './homeSlice'


function Home() {
// const [count,setCount] = React.useState(0)
const count = useSelector((state)=>state.counter.count)
const dispatch = useDispatch()
    return (
        <div style={{display:"flex"}}>
            <button onClick={()=>dispatch(increment())}>increment</button>
            <h2>{count}</h2>
            <button onClick={()=>dispatch(decrement())}>decrement</button>

        </div>

    )
}

export default Home