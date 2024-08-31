import React from 'react'
import { useState , useEffect } from 'react'

function Simpleprogram() {


  /* UseEffect Defination & Uses-->
    
  1st. useEffect()--> In This Hook we will use via Dependency for Mostly Data Fetch
  From Http Request & Api Also Include.
  
  2nd. Component Will Render with UseEffect() Hook when our Component
  called nd if Component will Re-Render nd 
  
  3rd. third is IF any Dependency Will Change so Basically every
  Render the Component will re-render. 
  */

  const [state , setState] = useState(0); //This is  Our UseState()
  const [state2 , setState2] = useState(0);
  
  
  
  /*Third Time UseEffect() JSX Body Se Akr Call Hoga Ek Normal Call Hoga or Second Agr Koi Component Re-Render Hua Hoga to 
  Second Time v Useeffect Re-render Hoga
  */
  
 useEffect(() => {

   
   alert("Last Time Useeffect Called Two Times"); 


   /*Two Time Last me Call hoga First Time Normal Call hoga
   Second Time Me age hmara koi Component Re-Render Hua hoga to Call Hoga*/

   
   /* Note:--> First the window messeage was render then after react js was Loaded and Page will open then re-render the component of a page
   after click on Click Me Button the useeffect() window message was render nd then state will change .
   */
  
});


//This is Our Function Body So First UseEffect() will Come In This Function Body

alert("First Useeffect Will Come this Function Body") ;


  // Suppose we click 10 times on click me button so the useeffect will render and after re-render the state will change 10 times.
  
  
  const btn ={
    backgroundColor:'blue',
    color:'white',
    height:'180px',
    width:'280px',
    fontSize:'40px',
    margin:'200px 150px'
  }
  
  /* 1. We don't want to render this useeffect on one time called and re-render our Components so we can't give dependency to this useeffect.
  2. if we want to render this useeffect on on time called and re-render our components so we use to Give Dependency to this useeffect.
  
  (Note:-The use effect Program with dependency so Check The File --> )
  */
    

  return (
    <>

    {
      // Second Time UseEffect() Function Body Ke Bad UseEffect JSX Body Me Ayega Or Call hoga

    alert("Second Useeffect Will Come this JSX Body ")
    
    }

<h1>This is The Without Dependency Declare In UseEffect() Program with Second Component </h1>



    
    <button 
    style={btn} onClick={()=>
    
    setState(state+1,

      alert("First Button Was Clicked & Then Ok So UseEffect() Function Body Called"))}

    >Press{state}</button>


    <button 
    style={btn} 

    onClick={()=>
      
      setState2(state2+1,

      alert("Second Button Was Clicked & Then Ok So UseEffect() Function Body Called "))}

      //last Me Sab UseEffect Call Hone k Bad Button ki State Change Hogi

      >Click Me{state2}
      
      </button>



    </>
  )
}

export default Simpleprogram