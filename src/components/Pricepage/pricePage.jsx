

const PricePage = ({PriceData}) => {
  return (
    <div className="mb-16 mx-20 max-sm:mx-10 max-lg:mx-10">

    
        <div className="flex flex-col my-16 gap-12">
            <div className="flex flex-col justify-center items-center text-black mb-8">
                <div className="flex items-center gap-2">
                    <svg width="6" height="48" viewBox="0 0 6 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 0V48" stroke="url(#paint0_linear_1_334)" strokeWidth="5"/>
                    <defs>
                    <linearGradient id="paint0_linear_1_334" x1="3.05" y1="0" x2="3.05" y2="48" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#112232"/>
                    <stop offset="1" stopColor="#4D6B88" stopOpacity="0"/>
                    </linearGradient>
                    </defs>
                    </svg>
                    <h1 className="text-4xl max-sm:text-2xl font-bold">A <span className="text-blue">price perfect </span>for your needs.</h1>
                </div>

                <h3>From catering for your personal, business, event, socials needs, you can</h3>
                <h3>be rest assured we have you in mind in our pricing.</h3>
            </div>

            {PriceData.map((items, index) => (
                <div key={index} className="flex gap-14 relative justify-around  text-black mb-12 max-sm:flex max-sm:flex-col max-lg:grid max-lg:grid-cols-2">
                    {items.array1.map((arrayItems, arrayIndex) => (
                        <div key={arrayIndex} className="flex flex-col gap-6 border-2 border-blues rounded-lg p-12">
                            <h3 className="pb-6 text-xl">{arrayItems.title}</h3>
                            <h1 className="text-2xl font-bold">{arrayItems.price}</h1>
                            <h3>{arrayItems.more}</h3>
                            
                            <div className="flex items-center gap-2">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clipPath="url(#clip0_1_262)"><path d="M14.6667 7.38666V8C14.6659 9.43761 14.2003 10.8364 13.3396 11.9879C12.4788 13.1393 11.2689 13.9816 9.89025 14.3893C8.51163 14.7969 7.03818 14.7479 5.68966 14.2497C4.34113 13.7515 3.18978 12.8307 2.40732 11.6247C1.62485 10.4187 1.2532 8.99204 1.34779 7.55754C1.44239 6.12304 1.99815 4.75755 2.9322 3.66471C3.86625 2.57188 5.12853 1.81025 6.5308 1.49343C7.93307 1.1766 9.40019 1.32155 10.7133 1.90666" stroke="#005AE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M14.6667 2.66667L8 9.34001L6 7.34001" stroke="#005AE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></g><defs> <clipPath id="clip0_1_262"><rect width="16" height="16" fill="white"/></clipPath></defs></svg>
                                <h3>{arrayItems.details.one}</h3>
                            </div>

                            <div className="flex items-center gap-2">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clipPath="url(#clip0_1_262)"><path d="M14.6667 7.38666V8C14.6659 9.43761 14.2003 10.8364 13.3396 11.9879C12.4788 13.1393 11.2689 13.9816 9.89025 14.3893C8.51163 14.7969 7.03818 14.7479 5.68966 14.2497C4.34113 13.7515 3.18978 12.8307 2.40732 11.6247C1.62485 10.4187 1.2532 8.99204 1.34779 7.55754C1.44239 6.12304 1.99815 4.75755 2.9322 3.66471C3.86625 2.57188 5.12853 1.81025 6.5308 1.49343C7.93307 1.1766 9.40019 1.32155 10.7133 1.90666" stroke="#005AE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M14.6667 2.66667L8 9.34001L6 7.34001" stroke="#005AE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></g><defs> <clipPath id="clip0_1_262"><rect width="16" height="16" fill="white"/></clipPath></defs></svg>
                                <h3>{arrayItems.details.two}</h3>
                            </div>

                            <div className="flex items-center gap-2">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clipPath="url(#clip0_1_262)"><path d="M14.6667 7.38666V8C14.6659 9.43761 14.2003 10.8364 13.3396 11.9879C12.4788 13.1393 11.2689 13.9816 9.89025 14.3893C8.51163 14.7969 7.03818 14.7479 5.68966 14.2497C4.34113 13.7515 3.18978 12.8307 2.40732 11.6247C1.62485 10.4187 1.2532 8.99204 1.34779 7.55754C1.44239 6.12304 1.99815 4.75755 2.9322 3.66471C3.86625 2.57188 5.12853 1.81025 6.5308 1.49343C7.93307 1.1766 9.40019 1.32155 10.7133 1.90666" stroke="#005AE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M14.6667 2.66667L8 9.34001L6 7.34001" stroke="#005AE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></g><defs> <clipPath id="clip0_1_262"><rect width="16" height="16" fill="white"/></clipPath></defs></svg>
                                <h3>{arrayItems.details.three}</h3>
                            </div>

                            <div className="flex items-center gap-2">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clipPath="url(#clip0_1_262)"><path d="M14.6667 7.38666V8C14.6659 9.43761 14.2003 10.8364 13.3396 11.9879C12.4788 13.1393 11.2689 13.9816 9.89025 14.3893C8.51163 14.7969 7.03818 14.7479 5.68966 14.2497C4.34113 13.7515 3.18978 12.8307 2.40732 11.6247C1.62485 10.4187 1.2532 8.99204 1.34779 7.55754C1.44239 6.12304 1.99815 4.75755 2.9322 3.66471C3.86625 2.57188 5.12853 1.81025 6.5308 1.49343C7.93307 1.1766 9.40019 1.32155 10.7133 1.90666" stroke="#005AE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M14.6667 2.66667L8 9.34001L6 7.34001" stroke="#005AE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></g><defs> <clipPath id="clip0_1_262"><rect width="16" height="16" fill="white"/></clipPath></defs></svg>
                                <h3>{arrayItems.details.four}</h3>
                            </div>

                            <div className="flex items-center gap-2">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clipPath="url(#clip0_1_262)"><path d="M14.6667 7.38666V8C14.6659 9.43761 14.2003 10.8364 13.3396 11.9879C12.4788 13.1393 11.2689 13.9816 9.89025 14.3893C8.51163 14.7969 7.03818 14.7479 5.68966 14.2497C4.34113 13.7515 3.18978 12.8307 2.40732 11.6247C1.62485 10.4187 1.2532 8.99204 1.34779 7.55754C1.44239 6.12304 1.99815 4.75755 2.9322 3.66471C3.86625 2.57188 5.12853 1.81025 6.5308 1.49343C7.93307 1.1766 9.40019 1.32155 10.7133 1.90666" stroke="#005AE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M14.6667 2.66667L8 9.34001L6 7.34001" stroke="#005AE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></g><defs> <clipPath id="clip0_1_262"><rect width="16" height="16" fill="white"/></clipPath></defs></svg>
                                <h3>{arrayItems.details.five}</h3>
                            </div>
                        </div>
                    ))}

                    {items.array2.map((arrayItems, arrayIndex) => (
                        <div key={arrayIndex} className="flex absolute h-[600px] -top-14 rounded-lg max-lg:h-auto  max-lg:relative max-lg:top-0  justify-center flex-col gap-6 bg-deep-blue text-white z-20 p-12 max-sm:relative max-sm:top-0" style={{
                            
                        }}>
                            <h3 className="pb-6 text-xl">{arrayItems.title}</h3>
                            <h1 className="text-2xl font-bold">{arrayItems.price}</h1>
                            <h3>{arrayItems.more}</h3>
                            
                            <div className="flex items-center gap-2">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_1_316)"><path d="M14.6667 7.38668V8.00001C14.6658 9.43763 14.2003 10.8365 13.3396 11.9879C12.4788 13.1393 11.2689 13.9817 9.89023 14.3893C8.51162 14.7969 7.03817 14.7479 5.68964 14.2497C4.34112 13.7515 3.18976 12.8307 2.4073 11.6247C1.62484 10.4187 1.25319 8.99205 1.34778 7.55755C1.44237 6.12305 1.99813 4.75756 2.93218 3.66473C3.86623 2.57189 5.12852 1.81027 6.53079 1.49344C7.93306 1.17662 9.40017 1.32157 10.7133 1.90668" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M14.6667 2.66666L8 9.33999L6 7.33999" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></g><defs><clipPath id="clip0_1_316"><rect width="16" height="16" fill="wh"/></clipPath></defs></svg>
                                <h3>{arrayItems.details.one}</h3>
                            </div>

                            <div className="flex items-center gap-2">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_1_316)"><path d="M14.6667 7.38668V8.00001C14.6658 9.43763 14.2003 10.8365 13.3396 11.9879C12.4788 13.1393 11.2689 13.9817 9.89023 14.3893C8.51162 14.7969 7.03817 14.7479 5.68964 14.2497C4.34112 13.7515 3.18976 12.8307 2.4073 11.6247C1.62484 10.4187 1.25319 8.99205 1.34778 7.55755C1.44237 6.12305 1.99813 4.75756 2.93218 3.66473C3.86623 2.57189 5.12852 1.81027 6.53079 1.49344C7.93306 1.17662 9.40017 1.32157 10.7133 1.90668" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M14.6667 2.66666L8 9.33999L6 7.33999" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></g><defs><clipPath id="clip0_1_316"><rect width="16" height="16" fill="wh"/></clipPath></defs></svg>

                                <h3>{arrayItems.details.two}</h3>
                            </div>

                            <div className="flex items-center gap-2">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_1_316)"><path d="M14.6667 7.38668V8.00001C14.6658 9.43763 14.2003 10.8365 13.3396 11.9879C12.4788 13.1393 11.2689 13.9817 9.89023 14.3893C8.51162 14.7969 7.03817 14.7479 5.68964 14.2497C4.34112 13.7515 3.18976 12.8307 2.4073 11.6247C1.62484 10.4187 1.25319 8.99205 1.34778 7.55755C1.44237 6.12305 1.99813 4.75756 2.93218 3.66473C3.86623 2.57189 5.12852 1.81027 6.53079 1.49344C7.93306 1.17662 9.40017 1.32157 10.7133 1.90668" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M14.6667 2.66666L8 9.33999L6 7.33999" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></g><defs><clipPath id="clip0_1_316"><rect width="16" height="16" fill="wh"/></clipPath></defs></svg>
                                <h3>{arrayItems.details.three}</h3>
                            </div>

                            <div className="flex items-center gap-2">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_1_316)"><path d="M14.6667 7.38668V8.00001C14.6658 9.43763 14.2003 10.8365 13.3396 11.9879C12.4788 13.1393 11.2689 13.9817 9.89023 14.3893C8.51162 14.7969 7.03817 14.7479 5.68964 14.2497C4.34112 13.7515 3.18976 12.8307 2.4073 11.6247C1.62484 10.4187 1.25319 8.99205 1.34778 7.55755C1.44237 6.12305 1.99813 4.75756 2.93218 3.66473C3.86623 2.57189 5.12852 1.81027 6.53079 1.49344C7.93306 1.17662 9.40017 1.32157 10.7133 1.90668" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M14.6667 2.66666L8 9.33999L6 7.33999" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></g><defs><clipPath id="clip0_1_316"><rect width="16" height="16" fill="wh"/></clipPath></defs></svg>

                                <h3>{arrayItems.details.four}</h3>
                            </div>

                            <div className="flex items-center gap-2">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_1_316)"><path d="M14.6667 7.38668V8.00001C14.6658 9.43763 14.2003 10.8365 13.3396 11.9879C12.4788 13.1393 11.2689 13.9817 9.89023 14.3893C8.51162 14.7969 7.03817 14.7479 5.68964 14.2497C4.34112 13.7515 3.18976 12.8307 2.4073 11.6247C1.62484 10.4187 1.25319 8.99205 1.34778 7.55755C1.44237 6.12305 1.99813 4.75756 2.93218 3.66473C3.86623 2.57189 5.12852 1.81027 6.53079 1.49344C7.93306 1.17662 9.40017 1.32157 10.7133 1.90668" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M14.6667 2.66666L8 9.33999L6 7.33999" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></g><defs><clipPath id="clip0_1_316"><rect width="16" height="16" fill="wh"/></clipPath></defs></svg>

                                <h3>{arrayItems.details.five}</h3>
                            </div>
                        </div>
                    ))}

                    {items.array3.map((arrayItems, arrayIndex) => (
                        <div key={arrayIndex} className="flex flex-col gap-6 border-2 border-blues p-12 max-sm:left-0 max-lg:relative max-lg:left-1/2">
                            <h3 className="pb-6 text-xl">{arrayItems.title}</h3>
                            <h1 className="text-2xl font-bold">{arrayItems.price}</h1>
                            <h3>{arrayItems.more}</h3>
                            
                            <div className="flex items-center gap-2">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clipPath="url(#clip0_1_262)"><path d="M14.6667 7.38666V8C14.6659 9.43761 14.2003 10.8364 13.3396 11.9879C12.4788 13.1393 11.2689 13.9816 9.89025 14.3893C8.51163 14.7969 7.03818 14.7479 5.68966 14.2497C4.34113 13.7515 3.18978 12.8307 2.40732 11.6247C1.62485 10.4187 1.2532 8.99204 1.34779 7.55754C1.44239 6.12304 1.99815 4.75755 2.9322 3.66471C3.86625 2.57188 5.12853 1.81025 6.5308 1.49343C7.93307 1.1766 9.40019 1.32155 10.7133 1.90666" stroke="#005AE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M14.6667 2.66667L8 9.34001L6 7.34001" stroke="#005AE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></g><defs> <clipPath id="clip0_1_262"><rect width="16" height="16" fill="white"/></clipPath></defs></svg>
                                <h3>{arrayItems.details.one}</h3>
                            </div>

                            <div className="flex items-center gap-2">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clipPath="url(#clip0_1_262)"><path d="M14.6667 7.38666V8C14.6659 9.43761 14.2003 10.8364 13.3396 11.9879C12.4788 13.1393 11.2689 13.9816 9.89025 14.3893C8.51163 14.7969 7.03818 14.7479 5.68966 14.2497C4.34113 13.7515 3.18978 12.8307 2.40732 11.6247C1.62485 10.4187 1.2532 8.99204 1.34779 7.55754C1.44239 6.12304 1.99815 4.75755 2.9322 3.66471C3.86625 2.57188 5.12853 1.81025 6.5308 1.49343C7.93307 1.1766 9.40019 1.32155 10.7133 1.90666" stroke="#005AE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M14.6667 2.66667L8 9.34001L6 7.34001" stroke="#005AE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></g><defs> <clipPath id="clip0_1_262"><rect width="16" height="16" fill="white"/></clipPath></defs></svg>
                                <h3>{arrayItems.details.two}</h3>
                            </div>

                            <div className="flex items-center gap-2">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clipPath="url(#clip0_1_262)"><path d="M14.6667 7.38666V8C14.6659 9.43761 14.2003 10.8364 13.3396 11.9879C12.4788 13.1393 11.2689 13.9816 9.89025 14.3893C8.51163 14.7969 7.03818 14.7479 5.68966 14.2497C4.34113 13.7515 3.18978 12.8307 2.40732 11.6247C1.62485 10.4187 1.2532 8.99204 1.34779 7.55754C1.44239 6.12304 1.99815 4.75755 2.9322 3.66471C3.86625 2.57188 5.12853 1.81025 6.5308 1.49343C7.93307 1.1766 9.40019 1.32155 10.7133 1.90666" stroke="#005AE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M14.6667 2.66667L8 9.34001L6 7.34001" stroke="#005AE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></g><defs> <clipPath id="clip0_1_262"><rect width="16" height="16" fill="white"/></clipPath></defs></svg>
                                <h3>{arrayItems.details.three}</h3>
                            </div>

                            <div className="flex items-center gap-2">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clipPath="url(#clip0_1_262)"><path d="M14.6667 7.38666V8C14.6659 9.43761 14.2003 10.8364 13.3396 11.9879C12.4788 13.1393 11.2689 13.9816 9.89025 14.3893C8.51163 14.7969 7.03818 14.7479 5.68966 14.2497C4.34113 13.7515 3.18978 12.8307 2.40732 11.6247C1.62485 10.4187 1.2532 8.99204 1.34779 7.55754C1.44239 6.12304 1.99815 4.75755 2.9322 3.66471C3.86625 2.57188 5.12853 1.81025 6.5308 1.49343C7.93307 1.1766 9.40019 1.32155 10.7133 1.90666" stroke="#005AE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M14.6667 2.66667L8 9.34001L6 7.34001" stroke="#005AE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></g><defs> <clipPath id="clip0_1_262"><rect width="16" height="16" fill="white"/></clipPath></defs></svg>
                                <h3>{arrayItems.details.four}</h3>
                            </div>

                            <div className="flex items-center gap-2">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clipPath="url(#clip0_1_262)"><path d="M14.6667 7.38666V8C14.6659 9.43761 14.2003 10.8364 13.3396 11.9879C12.4788 13.1393 11.2689 13.9816 9.89025 14.3893C8.51163 14.7969 7.03818 14.7479 5.68966 14.2497C4.34113 13.7515 3.18978 12.8307 2.40732 11.6247C1.62485 10.4187 1.2532 8.99204 1.34779 7.55754C1.44239 6.12304 1.99815 4.75755 2.9322 3.66471C3.86625 2.57188 5.12853 1.81025 6.5308 1.49343C7.93307 1.1766 9.40019 1.32155 10.7133 1.90666" stroke="#005AE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M14.6667 2.66667L8 9.34001L6 7.34001" stroke="#005AE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></g><defs> <clipPath id="clip0_1_262"><rect width="16" height="16" fill="white"/></clipPath></defs></svg>
                                <h3>{arrayItems.details.five}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>

        <div className="flex items-center gap-8 max-sm:gap-2 justify-center">
          <button className="rounded-full py-2 px-4 max-sm:px-2  text-sm border-2 border-blue text-blue focus:outline-none" type="text">Get Custom Pricing</button>      
          <button type="text" className="text-white rounded-full max-sm:px-2 bg-blue py-2 px-6 focus:outline-none">Select Pricing</button>                      
        </div>
    </div>
  )
}

export default PricePage;