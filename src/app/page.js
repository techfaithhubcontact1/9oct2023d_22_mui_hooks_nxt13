"use client"
//1. Import Arae 

import { useState } from "react";


//2. Defination Area 
var name1 = "Anil";
function Home() {
  //2.1 Hook Area
  // const [variableName,SetVariableFunction] = usState(initialData)
  const [name3,setVariableFunction] = useState('RAKASH');
  let name2 = "Suresh";
   
  // Every function may return something 
  // Every function some HTML i.e JSX
  return (
    <>
      <main>
        <h2>How Are You {name1} </h2>
        <h2>How Are You {name2} </h2>
        <h2>How Are You {name3} </h2>
      </main>
    </>
  )
}

// 3. exportarea 
export default  Home;