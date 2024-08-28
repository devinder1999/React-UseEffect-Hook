import React from 'react'
import { useState , useEffect } from 'react'

function Simpleprogram() {
    const [state , setState] = useState(0);
    const [state2 , setState2] = useState(0);

    useEffect(() => {
        /* 1st. useEffect()--> In This Hook we will use via Dependency for Mostly Data Fetch
        From Http Request & Api Also Include.

        2nd. Component Will Render with UseEffect() Hook when our Component
             called nd if Component will Re-Render nd 

        3rd. third is IF any Dependency Will Change so Basically every
              Render the Component will re-render. 
        */



    })
  return (
    <>
    
    <button onClick={()=>setState(state+1)}>click Me{state}</button>
    <button onClick={()=>setState2(state2+1)}>click Me{state2}</button>

    </>
  )
}

export default Simpleprogram