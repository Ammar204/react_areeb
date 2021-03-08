import React, {useEffect,useState}from 'react'
import {useDispatch} from "react-redux";
import {ADD_TO_CART} from '../../../redux/actions/cartActions'


export default function(props){
    const dispatch = useDispatch();

    const name = (n) => {
        dispatch(ADD_TO_CART(n))
    }
    return(
        <div>

        <h1>{props.name}</h1>
        <button onClick={() => name('areeb')}>Click</button>
        </div>
    )
}

