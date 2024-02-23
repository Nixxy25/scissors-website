import { useState } from "react";

const FaqPage = ({Data}) => {
    const [isOpen, setIsOpen] = useState(new Array(Data.length).fill(false));

    const handleOpen = (position) => {
        const upadateOpen = isOpen.map((item, index) =>
        index === position ? !item : item);
        setIsOpen(upadateOpen);
    }
    
  return (
    <div className="flex flex-col items-center mb-24">
        <div>
            <div className="flex gap-2 items-center justify-center mb-6">
                <svg width="6" height="48" viewBox="0 0 6 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 0V48" stroke="url(#paint0_linear_1_334)" stroke-width="5"/>
                <defs>
                <linearGradient id="paint0_linear_1_334" x1="3.05" y1="0" x2="3.05" y2="48" gradientUnits="userSpaceOnUse">
                <stop stop-color="#112232"/>
                <stop offset="1" stop-color="#4D6B88" stop-opacity="0"/>
                </linearGradient>
                </defs>
                </svg>
            
                <h3 className="font-bold text-2xl">FAQs</h3>
            </div>
        {Data.map((items, index) => {
                return(
                    <div key={index} className="flex flex-col gap-4 py-8 border-b-2 border-ash-500 font-semibold">
                        <div className="flex justify-between gap-2">
                            <p>{items.title}</p>

                            <div onClick={() => handleOpen(index)}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 5V19" stroke="#141414" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M5 12H19" stroke="#141414" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                           
                        </div>
                        


                        <div>
                            {isOpen[index] && (<p>{items.name}</p>)}
                        </div>
                        
                    </div>
                )
            })
        }
    </div>
    </div>
  )
}

export default FaqPage;