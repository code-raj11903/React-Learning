import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp()
{
  return(
  <div>
  <h3>Custome React Method</h3>  
  </div>
  )
}// the whole coded is convert in to object form and internally handled



const anotherElement  = (
  <a href= "https://google.com">hello i am  working fine </a>
)


const user ="Raj gupta"
const reactElement  = React.createElement(   // babel inject this method 
  'a',
  {href : 'https://google.com', target : '_blank' }, 
  'click me to visit google',
   user  // aise  variable inject hota hai  last mein hi 
)


ReactDOM.createRoot(document.getElementById('root')).render(
    
   
    reactElement

 
)  /* <MyApp/>             work */
/* <App/>    work */
/* MyApp()    doesn't work */
// anotherElement  works 
