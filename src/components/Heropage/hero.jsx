import Image from "../../assets/hero-cap.png"
import Image2 from "../../assets/hero-image2.png";

const HeroPage = () => {
  return (
    <div>
        <div className="flex flex-col gap-16">
            <nav className="flex justify-between">
                <div className="flex items-center">
                    <div className="border-r-2 border-blue-500 pr-1">
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.6471 0.439381C23.0613 -0.14646 22.1032 -0.14646 21.5173 0.439381L18.4643 3.49483C17.2134 2.66275 15.7779 2.24971 14.3365 2.24971C12.4174 2.24971 10.4737 2.98219 9.03367 4.44691L4.53365 8.94716C1.96732 11.5106 1.65099 15.4747 3.57868 18.384L0.525869 21.4394C-0.0599739 22.0253 -0.0599739 22.9745 0.525869 23.5606C0.81891 23.8536 1.20267 24 1.58643 24C1.97044 24 2.35396 23.8536 2.647 23.5606L5.69981 20.5051C6.95094 21.3372 8.39503 21.7502 9.83648 21.7502C11.7306 21.7502 13.6743 21.0178 15.1393 19.553L19.6307 15.053C22.197 12.4893 22.5133 8.52524 20.5854 5.61595L23.6471 2.56051C24.2329 1.97466 24.2329 1.02522 23.6471 0.439381ZM18.8276 9.74996C18.8276 10.9512 18.3589 12.0821 17.5096 12.9317L13.0182 17.4317C12.1657 18.2813 11.013 18.75 9.83648 18.75C9.15679 18.75 8.50639 18.5832 7.90879 18.2988L10.1223 16.0605C10.7082 15.4747 10.7082 14.5255 10.1223 13.9394C9.56119 13.3536 8.61199 13.3536 8.02615 13.9394L5.7879 16.1777C5.50085 15.5829 5.33669 14.9325 5.33669 14.25C5.33669 13.0488 5.80542 11.9179 6.65502 11.0683L11.1301 6.56828C11.9797 5.71867 13.1353 5.24995 14.3365 5.24995C15.0162 5.24995 15.6635 5.41675 16.2613 5.70115L13.9791 7.9862C13.3933 8.57204 13.3933 9.52124 13.9791 10.1073C14.2722 10.4004 14.6557 10.5468 15.0397 10.5468C15.4206 10.5468 15.8043 10.4004 16.0971 10.1073L18.3767 7.82228C18.6635 8.41676 18.8276 9.0674 18.8276 9.74996Z" fill="#0065FE"/>
                        </svg>
                    </div>

                    <div className="pl-1 text-blue-600">SCISSOR</div>
                </div>

                <div className="flex items-center gap-10">
                    <div className="text-blue-600">My URLs</div>
                    <div className="flex">
                        <div>Features</div>
                        <div>
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.08649 9L12.0865 15L18.0865 9" stroke="#141414" /*stroke-Linecap="round" stroke-Linejoin="round"*//>
                            </svg>   
                        </div>
                    </div>
                    <div>Pricing</div>
                    <div>Analytics</div>
                    <div>FAQs</div>
                </div>

                <div className="flex gap-5 items-center">
                    <div className="text-blue-600">Log In</div>
                    <button className="rounded-full px-5 py-1.5 bg-blue-600 text-white">Try for free</button>
                </div>
            </nav>

            <div className="flex flex-col items-center">
            <div className="text-center items-center flex flex-col gap-8 w-2/3">
                <h1 className="text-4xl font-bold">Optimize Your Online Experience with Our</h1>
                <div className="flex text-4xl font-bold gap-2">
                <h1 className=" ">Advanced</h1>
                
                <div className="text-blue-800">
                    URL Shortening
                    <svg width="174" height="21" viewBox="0 0 174 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M162.517 0.905029C75.1007 1.58333 17.7488 11.4833 0 16.3486L9.28502 15.694L2.32125 17.9693L10.2135 17.6848L6.03526 19.3913L12.0705 20.8133C52.0748 16.4528 149.09 6.6406 173.63 5.2387L155.524 4.88668C165.556 3.5543 166.666 3.60686 166.666 3.60686C166.666 3.60686 162.517 2.61145 162.517 0.905029Z" fill="#005AE2"/>
                    </svg></div>
                    <h1>Solution</h1>
                </div>
                <h3 className="mx-32">Personalize your shortened URLs to align with your brand identity. Utilize custom slugs, branded links, and domain customization options to reinforce your brand presence and enhance user engagement.</h3>

                <div className="flex gap-5 items-center">
                    <button className="rounded-full px-8 py-2 bg-blue-600 text-white" type="button">Sign Up</button>
                    <h3 className="text-blue-700">Learn more</h3>
                </div>
            </div>
            </div>

            
            <div className="flex justify-center item-center ml-20">
                <img alt="hero-image2" src={Image}/>
            </div>

            <div>
                <img alt="hero-image2" src={Image2}/>
            </div>
        </div>
    </div>
  )
}

export default HeroPage;