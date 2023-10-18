import { useState } from 'react'
import {BiPlus} from 'react-icons/bi'
import {BiMinus} from 'react-icons/bi'

const FAQ = ({question, answer}) => {
    const [isAnswerShow, setIsAnswerShow] = useState(false)
  return (
   <article className="faq" onClick={() => setIsAnswerShow (prev => !prev)}>
    <div>
        <h4>{question}</h4>
        <button className="faq_icon">
            
            {
                isAnswerShow ? <BiMinus/> : <BiPlus/>
            }
             </button>
    </div>
    { isAnswerShow && <p> {answer} </p>}
   </article>
  )
}

export default FAQ
