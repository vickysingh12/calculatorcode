import React from 'react';
import ReactDOM from 'react-dom';

export default function OutputScreen(props) {
    return(
        <div className='outputScreen'>{props.value}</div>
    )
}