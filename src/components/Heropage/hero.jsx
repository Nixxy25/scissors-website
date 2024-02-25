import Image from "../../assets/hero-cap.png"
import Image2 from "../../assets/hero-image2.png";

const HeroPage = () => {
  return (
    <div>
        <div className="flex flex-col gap-12">
            <div className="bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-white via-orange to-white b-2 border-blue">
            <div className="flex flex-col gap-12 mx-20 my-4">
            <nav className="flex justify-between ">
                <div className="">
                <svg width="156" height="40" viewBox="0 0 156 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M31.6471 8.43938C31.0613 7.85354 30.1032 7.85354 29.5173 8.43938L26.4643 11.4948C25.2134 10.6627 23.7779 10.2497 22.3365 10.2497C20.4174 10.2497 18.4737 10.9822 17.0337 12.4469L12.5336 16.9472C9.96732 19.5106 9.65099 23.4747 11.5787 26.384L8.52587 29.4394C7.94003 30.0253 7.94003 30.9745 8.52587 31.5606C8.81891 31.8536 9.20267 32 9.58643 32C9.97044 32 10.354 31.8536 10.647 31.5606L13.6998 28.5051C14.9509 29.3372 16.395 29.7502 17.8365 29.7502C19.7306 29.7502 21.6743 29.0178 23.1393 27.553L27.6307 23.053C30.197 20.4893 30.5133 16.5252 28.5854 13.616L31.6471 10.5605C32.2329 9.97466 32.2329 9.02522 31.6471 8.43938ZM26.8276 17.75C26.8276 18.9512 26.3589 20.0821 25.5096 20.9317L21.0182 25.4317C20.1657 26.2813 19.013 26.75 17.8365 26.75C17.1568 26.75 16.5064 26.5832 15.9088 26.2988L18.1223 24.0605C18.7082 23.4747 18.7082 22.5255 18.1223 21.9394C17.5612 21.3536 16.612 21.3536 16.0261 21.9394L13.7879 24.1777C13.5009 23.5829 13.3367 22.9325 13.3367 22.25C13.3367 21.0488 13.8054 19.9179 14.655 19.0683L19.1301 14.5683C19.9797 13.7187 21.1353 13.25 22.3365 13.25C23.0162 13.25 23.6635 13.4168 24.2613 13.7012L21.9791 15.9862C21.3933 16.572 21.3933 17.5212 21.9791 18.1073C22.2722 18.4004 22.6557 18.5468 23.0397 18.5468C23.4206 18.5468 23.8043 18.4004 24.0971 18.1073L26.3767 15.8223C26.6635 16.4168 26.8276 17.0674 26.8276 17.75Z" fill="#0065FE"/>
                <path d="M40.0865 8V32" stroke="#0065FE" strokeWidth="2" strokeLinecap="round"/>
                <path d="M55.3825 27.336C52.0465 27.336 49.7185 25.752 48.7825 23.184L51.6145 21.528C52.2625 23.232 53.5585 24.096 55.4785 24.096C57.3265 24.096 58.1665 23.352 58.1665 22.32C58.1665 21.72 57.9025 21.264 57.3745 20.952C56.8465 20.616 55.9105 20.256 54.5425 19.872C53.0305 19.416 52.1185 19.056 51.0625 18.312C50.0305 17.544 49.4785 16.392 49.4785 14.856C49.4785 13.344 50.0065 12.12 51.0865 11.232C52.1665 10.32 53.4865 9.864 54.9985 9.864C57.7105 9.864 59.8465 11.256 60.9985 13.632L58.2145 15.24C57.5425 13.8 56.4625 13.08 54.9985 13.08C53.6305 13.08 52.7905 13.776 52.7905 14.76C52.7905 15.288 53.0065 15.72 53.4385 16.056C53.8945 16.368 54.7345 16.728 55.9825 17.112L57.1345 17.496C57.3985 17.568 57.7585 17.712 58.2145 17.904C58.6705 18.072 59.0305 18.24 59.2705 18.408C59.7745 18.72 60.5425 19.32 60.8545 19.896C61.2145 20.472 61.4785 21.312 61.4785 22.272C61.4785 23.832 60.9025 25.056 59.7745 25.968C58.6465 26.88 57.1825 27.336 55.3825 27.336ZM71.4895 27.336C68.9695 27.336 66.8815 26.496 65.2255 24.816C63.5695 23.136 62.7535 21.072 62.7535 18.6C62.7535 16.128 63.5695 14.04 65.2255 12.384C66.8815 10.704 68.9695 9.864 71.4895 9.864C74.5375 9.864 77.2735 11.4 78.7135 13.824L75.8575 15.48C75.0175 13.968 73.4095 13.08 71.4895 13.08C69.8575 13.08 68.5375 13.584 67.5295 14.616C66.5455 15.648 66.0415 16.968 66.0415 18.6C66.0415 20.208 66.5455 21.528 67.5295 22.56C68.5375 23.592 69.8575 24.096 71.4895 24.096C73.4095 24.096 75.0655 23.184 75.8575 21.72L78.7135 23.376C77.2735 25.8 74.5615 27.336 71.4895 27.336ZM80.748 27V10.2H84.06V27H80.748ZM92.6481 27.336C89.3121 27.336 86.9841 25.752 86.0481 23.184L88.8801 21.528C89.5281 23.232 90.8241 24.096 92.7441 24.096C94.5921 24.096 95.4321 23.352 95.4321 22.32C95.4321 21.72 95.1681 21.264 94.6401 20.952C94.1121 20.616 93.1761 20.256 91.8081 19.872C90.2961 19.416 89.3841 19.056 88.3281 18.312C87.2961 17.544 86.7441 16.392 86.7441 14.856C86.7441 13.344 87.2721 12.12 88.3521 11.232C89.4321 10.32 90.7521 9.864 92.2641 9.864C94.9761 9.864 97.1121 11.256 98.2641 13.632L95.4801 15.24C94.8081 13.8 93.7281 13.08 92.2641 13.08C90.8961 13.08 90.0561 13.776 90.0561 14.76C90.0561 15.288 90.2721 15.72 90.7041 16.056C91.1601 16.368 92.0001 16.728 93.2481 17.112L94.4001 17.496C94.6641 17.568 95.0241 17.712 95.4801 17.904C95.9361 18.072 96.2961 18.24 96.5361 18.408C97.0401 18.72 97.8081 19.32 98.1201 19.896C98.4801 20.472 98.7441 21.312 98.7441 22.272C98.7441 23.832 98.1681 25.056 97.0401 25.968C95.9121 26.88 94.4481 27.336 92.6481 27.336ZM106.125 27.336C102.789 27.336 100.461 25.752 99.5247 23.184L102.357 21.528C103.005 23.232 104.301 24.096 106.221 24.096C108.069 24.096 108.909 23.352 108.909 22.32C108.909 21.72 108.645 21.264 108.117 20.952C107.589 20.616 106.653 20.256 105.285 19.872C103.773 19.416 102.861 19.056 101.805 18.312C100.773 17.544 100.221 16.392 100.221 14.856C100.221 13.344 100.749 12.12 101.829 11.232C102.909 10.32 104.229 9.864 105.741 9.864C108.453 9.864 110.589 11.256 111.741 13.632L108.957 15.24C108.285 13.8 107.205 13.08 105.741 13.08C104.373 13.08 103.533 13.776 103.533 14.76C103.533 15.288 103.749 15.72 104.181 16.056C104.637 16.368 105.477 16.728 106.725 17.112L107.877 17.496C108.141 17.568 108.501 17.712 108.957 17.904C109.413 18.072 109.773 18.24 110.013 18.408C110.517 18.72 111.285 19.32 111.597 19.896C111.957 20.472 112.221 21.312 112.221 22.272C112.221 23.832 111.645 25.056 110.517 25.968C109.389 26.88 107.925 27.336 106.125 27.336ZM128.4 24.816C126.696 26.496 124.632 27.336 122.208 27.336C119.784 27.336 117.72 26.496 116.016 24.816C114.336 23.112 113.496 21.048 113.496 18.6C113.496 16.152 114.336 14.088 116.016 12.408C117.72 10.704 119.784 9.864 122.208 9.864C124.632 9.864 126.696 10.704 128.4 12.408C130.104 14.088 130.944 16.152 130.944 18.6C130.944 21.048 130.104 23.112 128.4 24.816ZM118.344 22.56C119.376 23.592 120.672 24.096 122.208 24.096C123.744 24.096 125.04 23.592 126.072 22.56C127.104 21.528 127.632 20.208 127.632 18.6C127.632 16.992 127.104 15.672 126.072 14.64C125.04 13.608 123.744 13.08 122.208 13.08C120.672 13.08 119.376 13.608 118.344 14.64C117.312 15.672 116.784 16.992 116.784 18.6C116.784 20.208 117.312 21.528 118.344 22.56ZM146.063 27H142.487L139.103 21.168H136.583V27H133.271V10.2H139.991C141.551 10.2 142.871 10.752 143.951 11.832C145.031 12.912 145.583 14.232 145.583 15.768C145.583 17.856 144.287 19.776 142.343 20.664L146.063 27ZM139.991 13.296H136.583V18.264H139.991C141.239 18.264 142.271 17.136 142.271 15.768C142.271 14.4 141.239 13.296 139.991 13.296Z" fill="#0065FE"/>
                </svg>
                
                </div>

                <div className="flex items-center gap-10">
                    <div className="text-blue ">My URLs</div>
                    <div className="flex">
                        <div className="text-black">Features</div>
                        <div>
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.08649 9L12.0865 15L18.0865 9" stroke="#141414" /*stroke-Linecap="round" stroke-Linejoin="round"*//>
                            </svg>   
                        </div>
                    </div>
                    <div className="text-black">Pricing</div>
                    <div className="text-black">Analytics</div>
                    <div className="text-black">FAQs</div>
                </div>

                <div className="flex gap-5 items-center">
                    <div className="text-black">Log In</div>
                    <button className="rounded-full px-5 py-1.5 bg-blue text-white focus:outline-none">Try for free</button>
                </div>
            </nav>

            <div className="flex flex-col items-center ">
            <div className="text-center items-center flex flex-col gap-8 w-2/3">
                <h1 className="text-4xl font-bold text-black">Optimize Your Online Experience with Our</h1>
                <div className="flex text-4xl font-bold gap-2 text-black">
                <h1 className=" ">Advanced</h1>
                
                <div className="text-blue">
                    URL Shortening
                    <svg width="174" height="21" viewBox="0 0 174 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M162.517 0.905029C75.1007 1.58333 17.7488 11.4833 0 16.3486L9.28502 15.694L2.32125 17.9693L10.2135 17.6848L6.03526 19.3913L12.0705 20.8133C52.0748 16.4528 149.09 6.6406 173.63 5.2387L155.524 4.88668C165.556 3.5543 166.666 3.60686 166.666 3.60686C166.666 3.60686 162.517 2.61145 162.517 0.905029Z" fill="#005AE2"/>
                    </svg></div>
                    <h1>Solution</h1>
                </div>
                <h3 className="mx-20 text-black">Personalize your shortened URLs to align with your brand identity. Utilize custom slugs, branded links, and domain customization options to reinforce your brand presence and enhance user engagement.</h3>

                <div className="flex gap-8 items-center">
                    <button className="rounded-full px-8 py-2 bg-blue text-white focus:outline-none" type="button">Sign Up</button>
                    <h3 className="text-blue">Learn more</h3>
                </div>
            </div>
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