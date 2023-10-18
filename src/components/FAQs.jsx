import SectionHead from "./SectionHead"
import {FaQuestion} from 'react-icons/fa'
import {faqs} from '../data'
import FAQ from "./FAQ"

const FAQs = () => {
  return (
    <div className="container faqs_container">
         <SectionHead icon={<FaQuestion/>} title="FAQs" />
         <div className="faqs_wrapper">
          {
            faqs.map(({id, question, answer}) =>{
              return <FAQ key={id} question={question} answer={answer}/>
            })
          }


         </div>
      </div>
  )
   
}

export default FAQs



  
  