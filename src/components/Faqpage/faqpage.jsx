import { useState } from "react";

const FaqPage = ({Data}) => {
    const [isOpen, setIsOpen] = useState(new Array(Data.length).fill(false));

    const handleOpen = (position) => {
        const upadateOpen = isOpen.map((item, index) =>
        index === position ? !item : item);
        setIsOpen(upadateOpen);
    }
    
  return (
    <div className="flex flex-col items-center relative text-black">

    <div className="absolute top-0 left-0">
        <svg width="350"  height="860" viewBox="0 0 350 860" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.8">
        <path fillRule="evenodd" clipRule="evenodd" d="M-81.7899 -40.0418C-34.25 -31.0674 62.214 45.6115 98.9723 87.4865C133.132 126.401 146.346 146.375 159.649 203.471C172.408 258.235 159.321 344.28 156.062 401.142C151.886 474.013 190.414 576.912 144.342 615.42C96.9481 655.032 38.1705 583.275 -16.4212 563.7C-52.7113 550.688 -87.2397 540.994 -121.494 520.1C-164.116 494.102 -223.481 485.983 -239.919 427.375C-256.333 368.849 -202.849 317.576 -195.468 256.348C-186.384 180.988 -230.488 88.6975 -192.316 32.4982C-155.347 -21.9293 -136.792 -50.4248 -81.7899 -40.0418Z" fill="url(#paint0_linear_1_430)" fillOpacity="0.3"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M-98.2132 72.0822C-56.1038 72.1661 -14.4496 84.4072 21.2936 114.953C54.5106 143.34 76.4616 188.03 93.2194 235.678C109.293 281.379 94.576 321.602 96.9275 371.743C99.9403 436.002 145.318 527.069 108.811 568.173C71.2553 610.458 13.6644 557.428 -35.5363 549.245C-68.2419 543.804 -99.1163 540.973 -130.772 528.325C-170.161 512.588 -222.464 515.176 -242.081 466.721C-261.672 418.333 -219.89 364.883 -219.059 310.259C-218.036 243.029 -264.754 169.693 -236.72 114.44C-209.57 60.9296 -146.933 71.9854 -98.2132 72.0822Z" fill="url(#paint1_linear_1_430)" fillOpacity="0.4"/>
        <path opacity="0.4" fillRule="evenodd" clipRule="evenodd" d="M-88.6289 170.849C-49.6353 185.12 -13.3557 210.402 13.997 250.5C39.4159 287.763 51.3256 336.202 57.867 385.604C64.1407 432.987 57.6883 478.694 50.4137 525.531C41.0901 585.554 51.1947 670.74 9.62603 696.178C-33.1347 722.346 -76.4887 654.238 -120.523 630.137C-149.795 614.117 -177.862 601.11 -204.803 578.825C-238.325 551.095 -287.264 535.843 -296.302 484.735C-305.328 433.697 -256.547 398.701 -245.479 348.822C-231.856 287.432 -261.309 204.342 -224.922 163.054C-189.683 123.07 -133.743 154.336 -88.6289 170.849Z" fill="url(#paint2_linear_1_430)" fillOpacity="0.6"/>
        </g>
        <defs>
        <linearGradient id="paint0_linear_1_430" x1="-180.687" y1="534.041" x2="64.3511" y2="101.829" gradientUnits="userSpaceOnUse">
        <stop stopColor="#9EE6F7" stopOpacity="0"/>
        <stop offset="1" stopColor="#9EE6F7" stopOpacity="0.46"/>
        </linearGradient>
        <linearGradient id="paint1_linear_1_430" x1="-191.283" y1="546.344" x2="-38.3052" y2="121.941" gradientUnits="userSpaceOnUse">
        <stop stopColor="#9EE6F7" stopOpacity="0"/>
        <stop offset="1" stopColor="#9EE6F7" stopOpacity="0.46"/>
        </linearGradient>
        <linearGradient id="paint2_linear_1_430" x1="-264.255" y1="574.973" x2="-16.7186" y2="256.916" gradientUnits="userSpaceOnUse">
        <stop stopColor="#005AE2"/>
        <stop offset="1" stopColor="#73E6FF" stopOpacity="0.38"/>
        </linearGradient>
        </defs>
        </svg>
    
    
    </div>

    <div className="absolute bottom-0 right-0">
        <svg width="300" height="358" viewBox="0 0 543 358" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.7">
        <path fillRule="evenodd" clipRule="evenodd" d="M74.4161 555.549C59.9173 509.393 82.0605 388.172 101.659 336.012C119.873 287.541 131.258 266.471 175.338 227.821C217.618 190.749 299.67 161.723 351.352 137.789C417.586 107.116 490.166 24.6264 545.847 47.1018C603.125 70.2218 567.554 155.888 576.029 213.26C581.664 251.399 589.393 286.419 587.117 326.479C584.285 376.323 605.112 432.504 561.176 474.632C517.302 516.7 446.87 493.706 389.393 516.064C318.652 543.582 258.055 625.989 190.497 618.821C125.068 611.878 91.1911 608.95 74.4161 555.549Z" fill="url(#paint0_linear_1_491)" fillOpacity="0.3"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M181.04 517.17C161.261 479.995 152.418 437.489 162.504 391.567C171.878 348.89 200.941 308.462 235.06 271.219C267.785 235.498 310.195 229.513 353.306 203.8C408.555 170.847 467.471 87.8944 520.932 100.711C575.928 113.895 556.314 189.685 572.294 236.933C582.915 268.34 594.974 296.903 598.745 330.783C603.437 372.939 630.378 417.844 596.895 457.989C563.458 498.079 496.623 486.432 448.059 511.451C388.287 542.246 345.639 618.021 283.695 619.348C223.705 620.632 203.924 560.181 181.04 517.17Z" fill="url(#paint1_linear_1_491)" fillOpacity="0.4"/>
        <path opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M263.622 462.153C257.824 421.037 263.015 377.123 285.481 334.097C306.359 294.112 343.461 260.772 383.944 231.712C422.774 203.84 466.124 187.981 510.858 172.315C568.187 152.239 638.548 103.166 680.579 127.832C723.817 153.204 684.193 223.548 683.699 273.744C683.372 307.111 685.134 337.996 678.182 372.261C669.532 414.897 679.154 465.247 638.344 497.313C597.59 529.335 543.729 502.814 494.522 516.57C433.961 533.499 374.571 598.647 321.005 586.024C269.13 573.798 270.329 509.724 263.622 462.153Z" fill="url(#paint2_linear_1_491)" fillOpacity="0.6"/>
        </g>
        <defs>
        <linearGradient id="paint0_linear_1_491" x1="627.318" y1="372.108" x2="130.63" y2="359.783" gradientUnits="userSpaceOnUse">
        <stop stopColor="#9EE6F7" stopOpacity="0"/>
        <stop offset="1" stopColor="#9EE6F7" stopOpacity="0.46"/>
        </linearGradient>
        <linearGradient id="paint1_linear_1_491" x1="643.164" y1="375.652" x2="196.766" y2="440.831" gradientUnits="userSpaceOnUse">
        <stop stopColor="#9EE6F7" stopOpacity="0"/>
        <stop offset="1" stopColor="#9EE6F7" stopOpacity="0.46"/>
        </linearGradient>
        <linearGradient id="paint2_linear_1_491" x1="702.815" y1="426.507" x2="305.621" y2="358.159" gradientUnits="userSpaceOnUse">
        <stop stopColor="#005AE2"/>
        <stop offset="1" stopColor="#73E6FF" stopOpacity="0.38"/>
        </linearGradient>
        </defs>
        </svg>
    </div>
        <div className="mb-24 mx-60 max-sm:mx-14 max-lg:mx-40">
            <div className="flex gap-2 items-center justify-center mb-6">
                <svg width="6" height="48" viewBox="0 0 6 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 0V48" stroke="url(#paint0_linear_1_334)" strokeWidth="5"/>
                <defs>
                <linearGradient id="paint0_linear_1_334" x1="3.05" y1="0" x2="3.05" y2="48" gradientUnits="userSpaceOnUse">
                <stop stopColor="#112232"/>
                <stop offset="1" stopColor="#4D6B88" stopOpacity="0"/>
                </linearGradient>
                </defs>
                </svg>
            
                <h3 className="font-bold text-3xl max-sm:text-3xl">FAQs</h3>
            </div>
        {Data.map((items, index) => {
                return(
                    <div key={index} className="flex flex-col justify-center gap-4 py-8 border-b-2 border-ash">
                        <div className="flex justify-between gap-2">
                            <p>{items.title}</p>

                            <div onClick={() => handleOpen(index)}>
                                {isOpen[index] ? (
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 12H19" stroke="#141414" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                ) : (
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 5V19" stroke="#141414" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M5 12H19" stroke="#141414" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>

                                )}
                            </div>
                           
                        </div>
                        


                        <div>
                            {isOpen[index] && (<p>{items.name}</p>)}
                        </div>

                        <div>
                            
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