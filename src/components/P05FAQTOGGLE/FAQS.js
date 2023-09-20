import React, { useState } from 'react'
import { faqsdt } from './faqsdata'
import FAQ from './FAQ';
const FAQS = () => {
    const [faqs,setFaqs]=useState(faqsdt);
    
  return (
    <div>
        {faqs.map((faq,key)=>(<FAQ key={faq.id} {...faq} />))}
    </div>
  )
}

export default FAQS