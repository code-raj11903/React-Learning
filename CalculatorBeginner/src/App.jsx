import { useReducer } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { DigitButton } from './components/DigitButton'
import { OperationButton } from './components/OperationButton'


let overwrite = false;
export const ACTIONS={
  ADD_DIGIT : "add_digit",
  CHOOSE_OPERATION : "choose-operation",
  DELETE_DIGIT : "delete_digit",
  CLEAR : "clear",
  EVALUATE : "evaluate",
}
function reducer(state, {type, payload})
{
  switch(type){
    case ACTIONS.ADD_DIGIT:
      if(overwrite==true)
      {
        return {
          ...state, currentOperand: payload.digit,
          overwrite: false,
        }
      }
      if(payload.digit === "0" && state.currentOperand === "0")return state
      if(payload.digit === "." && state.currentOperand.includes("."))return state

      return{ 
        ...state, currentOperand: `${state.currentOperand || ""}${payload.digit}`,
            }
    
    case ACTIONS.CHOOSE_OPERATION:
      if(state.currentOperand ==null && state.previousOperand ==null)
      {
        return state
      }
      if (state.currentOperand == null)
      {
        return {...state , operation: payload.operation}
      }
      if(state.previousOperand ==null)
      {
        return{...state, operation: payload.operation,
        previousOperand: state.currentOperand,
      currentOperand : null,
            }
      }
      return {
        ...state, previousOperand:evalaute(state),
        operation :payload.operation,
        currentOperand: null
      }
    case ACTIONS.EVALUATE:
      if(state.operation ==null ||
        state.currentOperand ===null|| 
        state.previousOperand ==null)
        {return state}
        return{...state,
         currentOperand:evalaute(state),
          operation: null,
          previousOperand: null,
          overwrite : true
        }
                    
      case ACTIONS.CLEAR:
      return {}
    case ACTIONS.DELETE_DIGIT:
      if(state.overwrite) return { 
        ...state,
        overwrite : false,
        currentOperand:null
      }
      if(state.currentOperand == null) return state
      if(state.currentOperand.length ===1) {return {...state , currentOperand : null}}
     return {
      ...state, currentOperand: state.currentOperand.slice(0,-1)
     }

      
    
}

}

function evalaute({currentOperand, previousOperand, operation})
{ const prev = previousOperand;
  const curr = currentOperand;
  if(isNaN(prev)|| isNaN(curr)) return ""
  let result  =""
  switch(operation)
  {
    case "+":
      result = prev +curr
      break
    case "-":
      result = prev -curr
      break
    case "*":
      result = prev*curr
      break
    case "/":
      result = prev /curr
      break

  }
  return result.toString()

}

const INTEGER_FORMATOR =new Intl.NumberFormat("en-us", {
  maximumFractionDigits:0,
})

function formatOperand (opernad)
{
  if(opernad ==null) return
  const [Integer, Decimal] = opernad.split('.');

  if(Decimal ==null) return INTEGER_FORMATOR.format(Integer)

  return  `${INTEGER_FORMATOR.format(Integer)}.${Decimal}`
}

function App() {
  const [{currentOperand, previousOperand, operation},dispatch] = useReducer(reducer, {})

  return (
    <>
  <div className="calculator-grid">
    <div className="output">
      <div className="previous-operand"> {formatOperand(previousOperand)}{operation}</div>
      <div className="current-opernad">{formatOperand(currentOperand)}</div>
    </div>
    <button className='span-two' onClick={()=>dispatch({type:ACTIONS.CLEAR})} >AC</button>
   <button onClick={()=>dispatch({type:ACTIONS.DELETE_DIGIT})}>DEL</button>
   <OperationButton  operation="/"dispatch={dispatch} />

   <DigitButton  digit ="1"dispatch={dispatch} />
   <DigitButton  digit ="2"dispatch={dispatch} />
   <DigitButton  digit ="3"dispatch={dispatch} />
   <OperationButton  operation ="*"dispatch={dispatch} />
<DigitButton  digit ="4"dispatch={dispatch} />
   <DigitButton  digit ="5"dispatch={dispatch} />
   <DigitButton  digit ="6"dispatch={dispatch} />
   <OperationButton  operation ="+"dispatch={dispatch} />
   <DigitButton  digit ="7"dispatch={dispatch} />
   <DigitButton  digit ="8"dispatch={dispatch} />
   <DigitButton  digit ="9"dispatch={dispatch} />
   <OperationButton  operation ="-"dispatch={dispatch} />
   <DigitButton  digit ="."dispatch={dispatch} />
   <DigitButton  digit ="0"dispatch={dispatch} />
   <button className='span-two'onClick={()=>dispatch({type:ACTIONS.EVALUATE})}>=</button>

  </div>
    </>
  )
}

export default App
