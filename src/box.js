import React from 'react';
import{useSelector,useDispatch} from 'react-redux';
import {minus} from './slice';

export default function Box()
{

    const x=useSelector(state=>state.reducerNumber.total);
    const dispatch = useDispatch();

    return(<div>
    <hr/>
    {x}
    <hr/>
     Box<button onClick={()=>{
        console.log('click');
        // call to Redux minus action
        dispatch(minus());
    }}>-</button>
    
    
    </div>)
}