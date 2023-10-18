import SectionHead from "./SectionHead"
import {BiSolidQuoteLeft} from 'react-icons/bi'
import Card from "../UI/Card"
import {IoIosArrowDropleft,IoIosArrowDropright } from 'react-icons/io'
import { testimonials } from "../data"


import { useState } from "react"

const Testimonial = () => {
    const [index, setIndex] = useState(0)
   const {name, quote, job, avatar} = testimonials[index];

   const prevTestimonialHandler = ( )=>{
    setIndex(prev => prev - 1)

    if(index <=0){
        setIndex(testimonials.length - 1);
     }
   }

   const nextTestimonialHandler = ( )=>{
     setIndex(prev => prev + 1)
     if(index >= testimonials.length - 1){
        setIndex(0);
     }
   }



  return (
   <section className="testimonials">
    <div className="container testimonials_container">
        <SectionHead icon={<BiSolidQuoteLeft/> } title="Testimonials" className="testimonials_head" />

        <Card className="testimonial">
            <div className="testimonial_avatar">
                <img src={avatar} alt="name" />
            </div>
            <p className="testimonial_quote"> {`"${quote}"`} </p>
            <h5>{name}</h5>
            <small className="testimonial_title">
                {job}
            </small>
            
        </Card>
        <div className="testimonial_btn-container">
                <button className="testimonials_btn" onClick={prevTestimonialHandler} > <IoIosArrowDropleft/> </button>
                <button className="testimonials_btn"onClick={nextTestimonialHandler} > <IoIosArrowDropright/> </button>
            </div>
    </div>
   </section>
  )
}

export default Testimonial
