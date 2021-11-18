//create a functional component
//use rafce as shortcut but install ES7 extension
//useState to handle data, so we import it
import React from 'react'
import { useState } from 'react';

const Bloglist = () => {

    const [name, setName] = useState('Gerald')


    //let name  = 'john';
    let count = 0;
    const handleClick = () => {
        console.log(count++)
        console.log ( name='wick' );

    }
    return (
        <div>
            <h1>welcome to my blog!</h1>
            <h2>Hello { name }</h2>
            <button onClick={handleClick}> Click here to change my name</button>
        </div>
    )
}

export default Bloglist
