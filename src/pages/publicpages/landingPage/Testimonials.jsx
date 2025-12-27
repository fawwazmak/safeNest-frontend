import React from 'react'
import sarah from "/sarah.png"
import chen from "/chen.png"
import emily from "/emily.png"
import star from "/star-icon.png"

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            rate: 5,
            testimonial: "Safe Nest made finding our dream home effortless. Their team was professional, responsive, and truly understood our needs. Highly recommended!",
            testimonerName: "Sarah Johnson",
            testimonerImgUrl: sarah,
            testimonerRole: "Accountant"
        },
        {
            id: 2,
            rate: 5,
            testimonial: "Outstanding service from start to finish. They helped me invest in multiple properties and the returns have been excellent. True professionals!",
            testimonerName: "Micheal Chen",
            testimonerImgUrl: chen,
            testimonerRole: "Architect"
        },
        {
            id: 3,
            rate: 5,
            testimonial: "The best real estate experience I've ever had. They guided us through every step and made the entire process stree-free. Thank you!",
            testimonerName: "Emily Rodriguez",
            testimonerImgUrl: emily,
            testimonerRole: "Lawyer"
        }
    ]
    return (
        <div className='bg-[#f4f8fd] md:p-8 sm:p-4 p-2 font-[Inter]'>
            <h2 className='text-center md:text-3xl font-bold'>What Our Clients Say</h2>

            <p className='text-center mb-6'>Real stories from satisfied homeowners and investors</p>

            <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 p-3'>
                {testimonials.map(testimonial => (
                    <div key={testimonial.id} className='bg-white md:text-start text-center rounded-xl md:p-8 sm:p-4 p-2'>
                        <div className="flex items-center gap-1 w-fit md:mx-0 mx-auto mb-6">
                            {Array(testimonial.rate).fill().map((_, i) => (
                                <img key={i} src={star} alt="star rating" className="w-6 h-6" />
                            ))}
                        </div>

                        <p>{testimonial.testimonial}</p>

                        <div className='flex md:flex-row flex-col md:text-start text-center items-center gap-4 mt-4'>
                            <img src={testimonial.testimonerImgUrl} alt={testimonial.testimonerName} className='block' />

                            <div className=''>
                                <p className='lg:text-xl md:text-lg sm:text-md text-sm font-medium'>{testimonial.testimonerName}</p>
                                <small className='font-extralight'>{testimonial.testimonerRole}</small>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonials
