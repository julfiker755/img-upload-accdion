import React, { useRef, useState } from 'react'; // Ensure React is imported
function Home() {
  const inputref=useRef(null)
  const [image,setimage]=useState("")

  const hanldeimage=()=>{
    inputref.current.click()
  }


  // main funtion
  const handleimagechange=(e)=>{
    setimage(e.target.files[0])
    const file=e.target.files[0]
    

    // image set 
    
  }
  return (
    <div className="h-screen w-screen flex  justify-center  py-12 px-4 sm:px-6 lg:px-8 bg-gray-500 bg-no-repeat bg-cover relative items-center"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1621243804936-775306a8f2e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)',
      }}
    >
      <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
      <div className="sm:max-w-lg w-full p-10 bg-white rounded-xl z-10">
        <div className="text-center">
          <h2 className="mt-5 text-3xl font-bold text-gray-900">
            Image Upload!
          </h2>
          <p className="mt-2 text-sm text-gray-400">Lorem ipsum is placeholder text.</p>
        </div>
        <div className="mt-8 space-y-3">
         
          <div className="grid grid-cols-1 space-y-2">
            <label className="text-sm font-bold text-gray-500 tracking-wide">Attach Document</label>
            <div className="flex items-center justify-center w-full">
              <div className="flex flex-col rounded-lg border-4 border-dashed w-full  p-2 group text-center">
                <div className="h-full w-full text-center flex flex-col">
                  <div className="flex h-[250px] w-full">
                  {image ?  <img  className='rounded-md w-full'  src={URL.createObjectURL(image)} alt="" /> : <img className="has-mask w-full object-cover rounded-md" src="https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg"  alt="freepik image" />}
                   
                  </div>
                 
                </div>
                <input type="file" ref={inputref} onChange={handleimagechange} className="hidden" />
              </div>
            </div>
          </div>
          
          <div>
            <button onClick={hanldeimage} type="submit" className="my-5 w-full flex justify-center bg-blue-500 text-gray-100 p-4  rounded-full tracking-wide font-semibold focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300">
              Upload
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
