import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Faq.css'
const Faq = () => {
    return (
        <div>
            

<Carousel variant="dark">

  <Carousel.Item>
      <div className="slider">
        <div className="tag">
            <h1>1</h1>
        </div>
        <div className="text">
            <h2>How can I enroll in courses at Pathshala South Asian Media Institute?</h2>
            <h4>You are kindly requested to visit Pathshala premises for taking admission. Address: 16 Sukrabad, Panthapath, Dhaka 1207 or call +8801795094271 to know further details.</h4>
        </div>
    </div> 
  </Carousel.Item>

  <Carousel.Item>
  <div className="slider">
        <div className="tag">
            <h1>2</h1>
        </div>
        <div className="text">
            <h2>What are the documents needed to complete the admission process?</h2>
         <h4>A) One copy of passport size photograph</h4>
        <h4>B) Photocopy of national ID card/birth certificate/passport copy </h4>
            <h4>C) Course Fees</h4>    
        </div>
    </div> 
  </Carousel.Item>

  <Carousel.Item>
  <div className="slider">
        <div className="tag">
            <h1>3</h1>
        </div>
        <div className="text">
            <h2>Is there any process to take admission Online?</h2>
            <h4>Yes, you will be able to take admission online. Firstly you are requested to visit the course navigation section from our website. Then click on the desired short course you find an application request form press the link and fill up the application form and then ‘press submit’. And to confirm your place please make the payment by paying money through Bkash [Merchant Number: +8801795094271]</h4>
        </div>
    </div> 
  </Carousel.Item>
  <Carousel.Item>
  <div className="slider">
        <div className="tag">
            <h1>4</h1>
        </div>
        <div className="text">
            <h2>Is there any discount on the course?</h2>
            <h4>Ans: Sorry, we do not offer any discounts</h4>
        </div>
    </div> 
  </Carousel.Item>

  <Carousel.Item>
  <div className="slider">
        <div className="tag">
            <h1>5</h1>
        </div>
        <div className="text">
            <h2>Can I have the contact details of Pathshala?</h2>
            <h4>Yes, Sure.
                <br/>

       Pathshala South Asian Media Institute
     16 Sukrabad, Panthapath, Dhaka 1207
     Tel: +8801795094271, email: pathshala.office@gmail.com
      NB: [10.00AM to 6.00PM] [except Friday and governments holiday]</h4>
        </div>
    </div> 
  </Carousel.Item>
  <Carousel.Item>
  <div className="slider">
        <div className="tag">
            <h1>6</h1>
        </div>
        <div className="text">
    <h2>Do you provide certificates after completing the course ?</h2>
            <h4>Yes, after completing the course successfully, we will award you with a certificate.</h4>
        </div>
    </div> 
  </Carousel.Item>
</Carousel>

        </div>
    );
};

export default Faq;
