const FormPage = () => {
  return (
    <div className="bg-blue-800 p-14 flex  flex-col items-center mb-8">
        <div className="bg-white p-10  flex flex-col gap-4">
            <div className="rounded-full border-2 border-blue-500 p-2 text-blue-500"><input type="text" value="Paste Url here"></input></div>

            <div className="flex justify gap-8">
              <div className="flex items-center p-2 rounded-full border-2 border-blue-500 outline-none text-blue-500">
                <input className="" type="text" value="Choose Domain"></input>
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.08649 9L12.0865 15L18.0865 9" stroke="#141414" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </div>

              
               
                <input className="rounded-full border-2 border-blue-500 text-blue-500  px-4 py-2" type="text" value="Type Alias here"></input>
            </div>
            
            <div className="bg-blue-500 rounded-full p-2 text-center text-white"><button type="button">Trim URL</button></div>

            <div className="text-blue-500">
                <h3>By clicking TrimURL, I agree to the <span className="text-blue-500 font-bold">Terms of Service,</span></h3>
                <h3><span className="text-blue-500 font-bold">Privacy Policy</span> and Use of Cookies.</h3>
            </div>
        </div>
    </div>
  )
}

export default FormPage;