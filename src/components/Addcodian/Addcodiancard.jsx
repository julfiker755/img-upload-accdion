import React, { useState } from 'react';

const Addcodiancard = ({question,answer}) => {
    const [show,setshow]=useState(false)
    return (
        <div className='relative ' onClick={()=>setshow(!show)}>
            <div  className='flex border-b-[1px] justify-between bg-[#a72323] cursor-pointer p-3 text-white'>
            <h1 className='text-xl font-bold'>{question}</h1>
            <h1 className='text-xl font-bold cursor-pointer'>{show ? "-" : "+"}</h1>
            </div>
            <p className={`${show ? 'bg-[green] p-3  text-[#d0cccc] static origin-top [transform:scaleY(1)] [transition:1s]':'bg-[green] p-3  text-[#d0cccc] absolute [transform:scaleY(0)] origin-top duration-500'}`}>{answer}</p>
        </div>
    );
};

export default Addcodiancard
