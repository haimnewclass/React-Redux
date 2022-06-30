import React from 'react';
import{useSelector,useDispatch} from 'react-redux';
import {plus,mult} from './slice';


export default function Item()
{

    const x=useSelector(state=>state.reducerNumber.total);
    const xMore=useSelector(state=>state.reducerNumber.andmore);
    const dispatch = useDispatch();


    return(<div>Item
    
    <hr/>
    {x}...and more {xMore}
    <hr/>
    <button onClick={()=>{
        console.log('click');
        dispatch(mult());
    }}>+</button></div>)
}