import React from 'react';

const Footer = () => {
    return (
        <footer className='w-[95%] max-w-[1100px] h-auto pb-10  bg-[#1E1E1E] mx-auto rounded-t-3xl overflow-hidden'>
            <div className='w-full h-[65px] flex flex-col items-start justify-center pl-4.5'>
                <img src="/aurea-ia-white-and-gray-logo.png" className='w-[100px]' alt="AureaIA logo" />
            </div>
            <nav className='flex max-w-[950px] mx-auto flex-wrap justify-evenly items-start gap-5 mt-2.5 px-5 sm:mt-5 sm:px-0' aria-label="Main footer navigation">
                <div className=' flex flex-col items-start justify-center gap-0.5 text-white text-sm'>
                    <h2 className='text-[20px] font-semibold sm:text-[18px]'>Company</h2>
                    <ul className='flex flex-col gap-0.5'>
                        <li className='text-[18px] text-[#929292] sm:text-[16px] cursor-pointer'>Home</li>
                        <li className='text-[18px] text-[#929292] sm:text-[16px] cursor-pointer'>Problems</li>
                        <li className='text-[18px] text-[#929292] sm:text-[16px] cursor-pointer'>Solutions</li>
                        <li className='text-[18px] text-[#929292] sm:text-[16px] cursor-pointer'>About</li>
                        <li className='text-[18px] text-[#929292] sm:text-[16px] cursor-pointer'>Blog</li>
                        <li className='text-[18px] text-[#929292] sm:text-[16px] cursor-pointer'>Team</li>
                    </ul>
                </div>
                <div className='flex flex-col items-center justify-center gap-15 text-white'>
                    <div>
                        <h2 className='text-[20px] text-center font-semibold sm:text-[18px]'>Need Help</h2>
                        <ul className='flex flex-col gap-0.5'>
                            <li className='text-[18px] text-[#929292] sm:text-[16px]'>support@aurea.com</li>
                        </ul>
                    </div>
                    <div className='flex flex-col justify-center'>
                        <h3 className='text-[20px] font-semibold text-center sm:text-[18px]'>Social</h3>
                        <ul className='flex gap-3 mt-2'>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-[25px] h-[25px] sm:w-[20px] smh-[20px] bi bi-instagram" viewBox="0 0 16 16">
                                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                                </svg>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-[25px] h-[25px] sm:w-[20px] smh-[20px] bi bi-threads" viewBox="0 0 16 16">
                                    <path d="M6.321 6.016c-.27-.18-1.166-.802-1.166-.802.756-1.081 1.753-1.502 3.132-1.502.975 0 1.803.327 2.394.948s.928 1.509 1.005 2.644q.492.207.905.484c1.109.745 1.719 1.86 1.719 3.137 0 2.716-2.226 5.075-6.256 5.075C4.594 16 1 13.987 1 7.994 1 2.034 4.482 0 8.044 0 9.69 0 13.55.243 15 5.036l-1.36.353C12.516 1.974 10.163 1.43 8.006 1.43c-3.565 0-5.582 2.171-5.582 6.79 0 4.143 2.254 6.343 5.63 6.343 2.777 0 4.847-1.443 4.847-3.556 0-1.438-1.208-2.127-1.27-2.127-.236 1.234-.868 3.31-3.644 3.31-1.618 0-3.013-1.118-3.013-2.582 0-2.09 1.984-2.847 3.55-2.847.586 0 1.294.04 1.663.114 0-.637-.54-1.728-1.9-1.728-1.25 0-1.566.405-1.967.868ZM8.716 8.19c-2.04 0-2.304.87-2.304 1.416 0 .878 1.043 1.168 1.6 1.168 1.02 0 2.067-.282 2.232-2.423a6.2 6.2 0 0 0-1.528-.161" />
                                </svg>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-[25px] h-[25px] sm:w-[20px] smh-[20px] bi bi-facebook" viewBox="0 0 16 16">
                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                                </svg>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-[25px] h-[25px] sm:w-[20px] smh-[20px] bi bi-twitter" viewBox="0 0 16 16">
                                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
                                </svg>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className=' flex flex-col justify-center m-2.5 gap-0.5 text-white sm:m-0'>
                    <h2 className='text-[20px] font-semibold text-center sm:text-[18px]'>Location</h2>
                    <ul className='flex flex-col gap-0.5'>
                        <li className='text-[18px] text-[#929292] sm:text-[16px]'>support@aurea.com</li>
                    </ul>
                </div>
            </nav>
            <p className='w-full text-[16px] px-4 mt-5 font-semibold font-[Poppins] text-[#929292] sm:mt-10 sm:px-10 sm:text-[15px]'>
                IMPORTANT INFORMATION ABOUT PROCEDURES FOR OPENING A NEW ACCOUNT
            </p>
            <p className='w-full text-[14px] px-4 mt-5 font-[Poppins] text-[#929292] sm:px-10 sm:text-[13px]'>
                To help the government fight the funding of terrorism and money laundering activities, federal law requires all financial institutions to obtain, verify, and record information that identifies each person who opens an account. What this means for you: When you open an account, we will ask for your name, address,
                date of birth, and other information that will allow us to identify you. We may also ask to see a copy of your driver's license.
            </p>
        </footer>
    );
};

export default Footer;