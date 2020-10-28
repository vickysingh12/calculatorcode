import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Calculator from './components/Calculator'
import { useState } from 'react';

export default function App (props) {
    const [count, setCount] = useState(0);



return (<>
    <div className='calculator'>
        <Calculator className='calculator'></Calculator>
    </div>
   </>
)



}