import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';

export default function Button(props) {

    
    function handleClick() {
        const result =  props.maxCount()

       if (result) {
           props.changeValue(props.value)
       }
       else {
           props.changeValue(props.value ,'max count')
       }

    }

    return(
        <button onClick={handleClick} className={props.className} value={props.value}>{props.value}</button>
    )
}