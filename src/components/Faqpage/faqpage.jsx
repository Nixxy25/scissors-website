
const FaqPage = ({Data}) => {
  return (
    <div>
        <div>
            <svg width="6" height="48" viewBox="0 0 6 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 0V48" stroke="url(#paint0_linear_1_334)" stroke-width="5"/>
            <defs>
            <linearGradient id="paint0_linear_1_334" x1="3.05" y1="0" x2="3.05" y2="48" gradientUnits="userSpaceOnUse">
            <stop stop-color="#112232"/>
            <stop offset="1" stop-color="#4D6B88" stop-opacity="0"/>
            </linearGradient>
            </defs>
            </svg>
        
            <h3>FAQs</h3>
        </div>

        {
            Data.map((items, index) => {
                return(
                    <div key={index}>
                        <p>{items.title}</p>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 5V19" stroke="#141414" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M5 12H19" stroke="#141414" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19" stroke="#141414" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <p>{items.name}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default FaqPage;