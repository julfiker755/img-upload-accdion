import React, { useState } from 'react'
import { useRef } from 'react';

const Home = () => {
  const inputref=useRef(null)
  const [image,setimage]=useState("")

  const hanldeimage=()=>{

    inputref.current.click()
  }

  const handleimagechange=(e)=>{
    setimage(e.target.files[0])
    const file=e.target.files[0]
    console.log(file)

    // image set 
    
  }

   
  return (
    <div onClick={hanldeimage} className='w-fit'>
       {image ?  <img   src={URL.createObjectURL(image)} alt="" /> : <img   src="" alt="" />}
       <input ref={inputref} onChange={handleimagechange} type="file" className='hidden' />
    </div>
  );
};

export default Home;