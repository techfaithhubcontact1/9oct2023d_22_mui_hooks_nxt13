"use client"
import { Button } from '@mui/material';
//1. Import Area
import React, { useEffect, useState } from 'react'


// Defination area 
function page() {
    //2.1 Hooks Area

    const [name4, setName4] = useState('Rahul');

    // useEffect(<function, <DepayndencyArray);
    useEffect( ()=>{
        console.log(`Hello  ${name4}, usEffact is functon and page loaded successfully do anything`)
    }, []);
   
    //2.2 defination Area
    const aagg = ()=>{
        console.log('Hello Aagg');
        let aa = prompt('Enter Your Namme');
        // document.write(aa);
        console.log(aa);
        setName4(aa);
    }
    //2.3 function returning some jsx 
  return (
    <>
    
        <div>This is usEffact page {name4}</div>
        <Button variant="contained" onClick={ ()=>{ aagg() } } >Button</Button>
        
    </>
    

  )
}

//3. Export Area
export default page;