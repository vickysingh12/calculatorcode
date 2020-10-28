import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Button from './Button'
import FormulaScreen from './FormulaScreen'
import OutputScreen from './OutputScreen'

export default function Calculator(props) {

    const [ outputScreenValue , setOutputScreenValue ] = useState('0')
    const [ formulaScreenValue , setFormulaScreenValue ] = useState('')
    const [ maxdigits , setMaxdigits ] = useState(24)
    var result

    function checkmaxCount() {    //function for checking max number of digits

        if(String(outputScreenValue).length < maxdigits) {
            console.log("count checked")  
            return true
        }
        else {
            setOutputScreenValue('max count reached')
            return false
        }
    }

    function changeValueOutputScreen(valuefrombtn , checkCount) {  //changes outputfield values
        
        if(valuefrombtn == 'AC') {   //if AC button is pressed
            setOutputScreenValue(0)
            setFormulaScreenValue('')   
            return          
        }

        if ( checkCount === 'max count') {  // if count reaches max
            
            let storedValue = outputScreenValue

            setOutputScreenValue(checkCount) 

            setTimeout(function () {
               setOutputScreenValue(storedValue) 
            },400)
            return
        }

        if ( valuefrombtn == '=' ) {      // equal button pressed calculates result
            result = formulaScreenValue
            setFormulaScreenValue(formulaScreenValue + ' = '+eval(result) )   
            setOutputScreenValue(eval(result))    
            return

        }
        if (outputScreenValue == 0 ) {     // initial stage of output field
           
            setOutputScreenValue(valuefrombtn) 
            setFormulaScreenValue(valuefrombtn)              
        
        } else if (outputScreenValue == '-' | outputScreenValue == '+' | outputScreenValue == '*' | outputScreenValue == '/') {
            
            setOutputScreenValue(valuefrombtn)
            setFormulaScreenValue(`${formulaScreenValue} ${valuefrombtn}`)  
        }        
        
        else if (valuefrombtn == '+' | valuefrombtn == '-' | valuefrombtn == "*"  | valuefrombtn == '/' ){
            if(String(formulaScreenValue).includes('=')) {

                var pos = String(formulaScreenValue).slice(String(formulaScreenValue).indexOf("=")+1)
                setFormulaScreenValue(`${pos} ${valuefrombtn}`)
                setOutputScreenValue(valuefrombtn)
            }
            else {          
                setOutputScreenValue(valuefrombtn)                   
                setFormulaScreenValue(formulaScreenValue+' ' + valuefrombtn)     
            
            }

        }   else {
                setOutputScreenValue(`${outputScreenValue}${valuefrombtn}`) 
                setFormulaScreenValue(`${formulaScreenValue}${valuefrombtn}`)            

                if(String(formulaScreenValue).includes('=')) {

                    setFormulaScreenValue(valuefrombtn)
                    setOutputScreenValue(valuefrombtn)

                }
        }
    }
    

    return( <>
        <FormulaScreen value={formulaScreenValue}></FormulaScreen>
        <OutputScreen  value={outputScreenValue}></OutputScreen>
        <div className='buttonwrapper'>

        <Button changeValue = {changeValueOutputScreen} maxCount={checkmaxCount} className='AC' value={'AC'}/>
        <Button changeValue = {changeValueOutputScreen} maxCount={checkmaxCount} className='operationbtn' value={'/'}/>
        <Button changeValue = {changeValueOutputScreen} maxCount={checkmaxCount} className='operationbtn' value={'*'}/>
        <Button changeValue = {changeValueOutputScreen} maxCount={checkmaxCount} value={7}/>
        <Button changeValue = {changeValueOutputScreen} maxCount={checkmaxCount} value={8}/>
        <Button changeValue = {changeValueOutputScreen} maxCount={checkmaxCount} value={9}/>
        <Button changeValue = {changeValueOutputScreen} maxCount={checkmaxCount} className='operationbtn' value={'-'}/>
        <Button changeValue = {changeValueOutputScreen} maxCount={checkmaxCount} value={4}/>
        <Button changeValue = {changeValueOutputScreen} maxCount={checkmaxCount} value={5}/>
        <Button changeValue = {changeValueOutputScreen} maxCount={checkmaxCount} value={6}/>
        <Button changeValue = {changeValueOutputScreen} maxCount={checkmaxCount} className='operationbtn' value={'+'}/>
        <Button changeValue = {changeValueOutputScreen} maxCount={checkmaxCount} value={1}/>
        <Button changeValue = {changeValueOutputScreen} maxCount={checkmaxCount} value={2}/>
        <Button changeValue = {changeValueOutputScreen} maxCount={checkmaxCount} value={3}/>
        <Button changeValue = {changeValueOutputScreen} maxCount={checkmaxCount} className='operationbtn' className='equalbtn' value={'='}/>
        <Button changeValue = {changeValueOutputScreen} maxCount={checkmaxCount} className='zerobtn' value={0}/>
        <Button changeValue = {changeValueOutputScreen} maxCount={checkmaxCount}  value={'.'}/>  
    </div>          
    </>
    )

}