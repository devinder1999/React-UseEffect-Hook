import React from 'react'
import '../Component/Dependency.css';
import { useState , useEffect } from 'react'

function Dpendncyuseeffect() {

    const [state , setState] = useState(0); //This is Our UseState() Hook
    const [state2 , setState2] = useState(0);

    //This is Our UseEffect() Hook With Dependency

    /*
    Note--> This Program Is For Practice .

useEffect(() => {

      alert("Useeffect Called "); 
   
   } , 
   [])  (Note:--> []<-- This is Our Dependency in UseEffect() Hook)
   
   (This is Our Arrary[]-->
    Agr Hum Blank Array[] Dekr UseEffect() Call kre to Normal Page Load Hone se Phle UseEffect() 
    Call hoga uske Bad Call ni hoga UseEffect() )

    */


    useEffect(() => {

      alert("Useeffect Call Ho Gya "); 
   
   },[state2])// []<-- is Dependency ke Andr Hum State , Props , or Kuch v Define kr skte hai 

  return (
    <>

    <div className='div'>

        <h1 className='text1'>This is The Dependency Declare In UseEffect() Program with Second Component </h1>

        <h3 className='text2'> Press Is First Button<br/><br/>
          First Button Me Koi UseEffect Nhi Dia isliye Normal State Change Hogi<br/><br/>

          Click Me is a Second Buttion<br/><br/>

          Second Buton Me Phle UseEffect Call hoga Fr State Change Hogi
          
          </h3>

       
        <button className="btn" onClick={()=>setState(state+1)}>Press{state}</button>

    <button className="btn" onClick={()=>setState2(state2+1,alert("Second Button Was Pressed ok Krne ke Bad useeffect Call Hoga"))}>Click Me{state2}</button>
    
    </div>

    </>
  )
}

export default Dpendncyuseeffect