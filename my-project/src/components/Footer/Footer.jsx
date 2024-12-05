import React from 'react'
import { FaFacebook, FaGoogle, FaInstagram, FaTelegram } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className=' bg-gradient-to-r  from-primary to-secondary pt-12 pb-8 text-white  '>
      <div className="conatiner  ml-20 mr-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* company deatails section */}
          <div data-aos='fade-up' className='space-y-6'>
            <h1 className='text-4xl font-bold max-w-[300px]'>Orange Mint</h1>
            <p className='text-sm'>Savor the goodness of fruits that delight your taste buds and nourish your body. Choose Orange Mint for freshness you can trust!</p>
          </div>
          {/* NavLink section */}
          <div data-aos='fade-up' data-aos-delay='300' className='space-y-6'>
          <h1 className='text-4xl font-bold'>Quick Links</h1>
          
          <div className='grid grid-cols-2 gap-3'>
            {/* first column links */}
            <div>
            <ul className='space-y-2'>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Search Fruits</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
            </div>

            {/* second column links */}
            <div>
            <ul className='space-y-2'>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Search Fruits</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
            </div>
          </div>

          

          </div>
          {/* social links section */}
          <div data-aos='fade-up' data-aos-delay='500'className='space-y-6'>
            <h1 className='text-4xl font-bold'>Follow Us</h1>
            <div>
              <p>+1 (123) 456-7890</p>
              <p>Noida, Uttar Pradesh</p>
            </div>
            <div className='flex items-center gap-3'>
              <FaFacebook className='text-3xl hover:scale-110 duration-300'/>
              <FaInstagram className='text-3xl hover:scale-110 duration-300'/>
              <FaTelegram className='text-3xl hover:scale-110 duration-300'/>
              <FaGoogle className='text-3xl hover:scale-110 duration-300'/>

            </div>
          </div>
        </div>
        {/* copyright section */}
        <p className='text-white text-center mt-8 pt-8 border-t-2'>Copyright &copy; 2024 Orange Mint. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer