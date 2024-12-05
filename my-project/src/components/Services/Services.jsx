import React from 'react'
import Fruits1 from "../../assets/fruits/fruits1.png"
import Fruits2 from "../../assets/fruits/fruits2.png"
import Fruits3 from "../../assets/fruits/fruits3.png"

const ServicesData = [
    {
        id: 1,
        image: Fruits1,
        title: "Fresh Friuts",
        subtitle: "Only the finest fruits make it to your table.",
        aosDelay: "300" 
    },
    {
        id: 2,
        image: Fruits2,
        title: "Fresh Friuts",
        subtitle: "Perfect for fueling a healthy lifestyle.",
        aosDelay: "500" 
    },
    {
        id: 3,
        image: Fruits3,
        title: "Orange Juice",
        subtitle:"Sweet, tangy, and everything in between.",
        aosDelay: "700" 
    }
]

function Services() {
  return (
    <div className='container my-16 space-y-4'>
        {/* header section */}
        <div className='text-center max-w-lg mx-auto space-y-2'>
            <h1 data-aos="fade-up" className='text-3xl font-bold text-dark'>Fresh and <span className='text-primary'>Tasty Fruits</span> {" "}</h1>
            <p data-aos="fade-up" data-aos-delay="300" className='text-sm opacity-50'>At Orange Mint, we bring you the juiciest and most flavorful fruits straight from nature’s lap. Whether you’re craving exotic delicacies or locally grown favorites, our selection ensures freshness and taste in every bite.</p>
        </div>
        {/* card section */}

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
            {ServicesData.map(({ id, image, title, subtitle, aosDelay}) => (

                <div key={id} data-aos="fade-up" data-aos-dealay={aosDelay} className='p-4 text-center'>
                    <img src={image} alt=""  className='max-w-[200px] mx-auto hover:scale-110 duration-300 img-shadow2 '/>
                    <div className='space-y-2'>

                        <h1 className='text-2xl font-bold text-primary'>{title}</h1>
                        <p className='text-dark'>{subtitle}</p>
                    </div>
                </div>
            ))
            }
        </div>    


    </div>
  )
}

export default Services