import React from 'react'
import OrangeImg from "../../assets/website/orangebg.png"
import Navbar from "../Hero/Navbar/Navbar"
import { FaFacebookF, FaLinkedin } from "react-icons/fa"
import { FaInstagram } from 'react-icons/fa6'


const Hero = () => {
  const [sidebar, setSidebar] = React.useState(false);
  return (
   <main className='md:px-12 md:py-6 bg-primaryDark'>
    <section className='relative min-h-[650px] bg-gradient-to-r from-primary to-secondary w-full md:rounded-xl shadow-md'>
      <div className="container">
        {/* Navbar */}
        <Navbar sidebar={sidebar} setSidebar={setSidebar}/>
        {/* Hero section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[650px]">
          {/* text conetent section */}
          <div className='text-white mt-[100px] md:mt-0 p-4 space-y-4'>
             <h1 data-aos="fade-up" className='text-3xl pl-6 md:pl-14'>01___________</h1>
             <h1 data-aos="fade-up" data-aos-delay="300" className='text-5xl font-bold uppercase text-shadow'>A Healthy Fruite </h1>
             <p data-aos="fade-up" data-aos-delay="500"  className='text-sm'>Discover a range of carefully curated products designed to elevate your health and wellness. From nutrient-rich fruits to superfoods packed with essential vitamins, Orange Mint is your go-to destination for all things fresh and nutritious.</p>
            <button data-aos="fade-up" data-aos-delay="700" data-ao-offset="0" className='secondary-btn'>Shop Now</button>
        </div>
          {/* image section */}
          <div data-aos="zoom-in">
            <img src={OrangeImg} alt="NOt Found"  className='relative z-10 w-[400px] img-shadow'/></div>
          {/* blank div section  */}
          <div className='md:hidden'></div>
        </div>

      </div>
      {/* background large text */}
      <h1 className='large-text'>
        Orange
      </h1>
      {/* sidebar section */}
      {
        sidebar &&(
          <div className='absolute top-0 right-0 w-[120px] h-full bg-gradient-to-b from-primary to-secondary z-10'>
            <div className='w-full h-full flex justify-center'>
            <div className='text-white flex flex-col justify-center items-center gap-6'>
              {/* line */}
              <div className='w-[1px] h-[70px] bg-white'></div>

              <div className='inline-block p-2 rounded-full cursor-pointer border border-white'>
                <FaFacebookF className='text-2xl'/>
                
              </div>

              <div className='inline-block p-2 rounded-full cursor-pointer border border-white'>
                
                <FaInstagram/>
              </div>

              <div className='inline-block p-2 rounded-full cursor-pointer border border-white'>
                
                <FaLinkedin/>
              </div>


              {/* line */}
              <div className='w-[1px] h-[70px] bg-white'></div>

            </div>
            </div>
           
          </div>
        )
      }

    </section>
   </main>
  )
}

export default Hero

