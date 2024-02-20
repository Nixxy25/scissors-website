
const Mainpage = () => {
  return (
    <div>
        <div className="flex flex-col gap-20">
            <div className="flex justify-between py-10 items-center">
                <div className="text-3xl font-bold">
                    <div className="">One Stop.</div>
                    <div className="text-blue-600">Four Possibilities.</div>
                </div>

                <div className="flex gap-20 font-bold">
                    <div>
                        <span className="text-xl">3M</span>
                        <h3 className="font-medium">Active users</h3>
                    </div>

                    <div>
                        <span className="text-xl">60M</span>
                        <h3 className="font-medium">Links & QR</h3>
                        <h3 className="font-medium">codes created</h3>
                    </div>

                    <div>
                        <span className="text-xl">1B</span>
                        <h3 className="font-medium">Clicked & Scanned</h3>
                        <h3 className="font-medium">connections</h3>
                    </div>

                    <div>
                        <span className="text-xl">300k</span>
                        <h3 className="font-medium">App Integrations</h3>
                    </div>   
                </div>
            </div>

            <div className="flex gap-16 justify-between  item-center">
                <div className="w-3/12">
                    <div className="flex gap-2 item-center">
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
                        </div>

                        <div className="text-2xl font-bold">Why choose <span className="text-blue-800">Scissors</span></div>
                    </div>

                    <div>
                        Scissors is the hub of everything that has to do with your link management. We shorten your URLs, 
                        allow you creating custom ones for your personal, business, event usage. Our swift QR code creation, 
                        management and usage tracking with advance analytics for all of these is second to none. 
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-8 w-3/5">
                    <div className="flex flex-col gap-5">
                        <div>
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1_203)">
                            <path d="M15.1 7H18.1C18.7566 7 19.4068 7.12933 20.0134 7.3806C20.6201 7.63188 21.1712 8.00017 21.6355 8.46447C22.0998 8.92876 22.4681 9.47996 22.7194 10.0866C22.9707 10.6932 23.1 11.3434 23.1 12C23.1 12.6566 22.9707 13.3068 22.7194 13.9134C22.4681 14.52 22.0998 15.0712 21.6355 15.5355C21.1712 15.9998 20.6201 16.3681 20.0134 16.6194C19.4068 16.8707 18.7566 17 18.1 17H15.1M9.10001 17H6.10001C5.4434 17 4.79322 16.8707 4.18659 16.6194C3.57996 16.3681 3.02877 15.9998 2.56447 15.5355C1.62679 14.5979 1.10001 13.3261 1.10001 12C1.10001 10.6739 1.62679 9.40215 2.56447 8.46447C3.50215 7.52678 4.77392 7 6.10001 7H9.10001" stroke="#141414" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M8.10001 12H16.1" stroke="#005AE2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_1_203">
                            <rect width="24" height="24" fill="white" transform="translate(0.100006)"/>
                            </clipPath>
                            </defs>
                            </svg>
                        </div>

                        <div className="text-xl font-semibold">URL Shortening</div>
                        <div>Scissor allows you to shorten URLs of your business, events. Shorten your URL at scale, URL redirects.</div>
                    </div>

                    <div  className="flex flex-col gap-5">
                        <div>
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.1 4H4.10001C3.56957 4 3.06087 4.21071 2.68579 4.58579C2.31072 4.96086 2.10001 5.46957 2.10001 6V20C2.10001 20.5304 2.31072 21.0391 2.68579 21.4142C3.06087 21.7893 3.56957 22 4.10001 22H18.1C18.6304 22 19.1391 21.7893 19.5142 21.4142C19.8893 21.0391 20.1 20.5304 20.1 20V13" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M18.6 2.49998C18.9978 2.10216 19.5374 1.87866 20.1 1.87866C20.6626 1.87866 21.2022 2.10216 21.6 2.49998C21.9978 2.89781 22.2213 3.43737 22.2213 3.99998C22.2213 4.56259 21.9978 5.10216 21.6 5.49998L12.1 15L8.10001 16L9.10001 12L18.6 2.49998Z" stroke="#005AE2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>  
                        </div>

                        <div className="text-xl font-semibold">Custom URLs</div>
                        <div>With Scissor, you can create custom URLs, with the length you want! A solution for socials and businesses.</div>
                    </div>

                    <div  className="flex flex-col gap-5">
                        <div>
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.8859 3.06763H3.88589V10.0676H10.8859V3.06763Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M21.8859 3.06763H14.8859V10.0676H21.8859V3.06763Z" stroke="#005AE2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M21.8859 14.0676H14.8859V21.0676H21.8859V14.0676Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M10.8859 14.0676H3.88589V21.0676H10.8859V14.0676Z" stroke="#005AE2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>

                        <div className="text-xl font-semibold">QR Codes</div>
                        <div>Generate QR codes to your business, events. Bring your audience and customers to your doorstep with this scan and go solution.</div>
                    </div>

                    <div  className="flex flex-col gap-5">
                        <div>
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1_236)">
                            <path d="M21.1 12H17.1L14.1 21L8.10001 3L5.10001 12H1.10001" stroke="#0065FE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_1_236">
                            <rect width="24" height="24" fill="white" transform="translate(0.100006)"/>
                            </clipPath>
                            </defs>
                            </svg>  
                        </div>

                        <div className="text-xl font-semibold">Data Analytics</div>
                        <div>Receive data on the usage of either your shortened URL, custom URLs or generated QR codes. Embedded to monitor progress.</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Mainpage;