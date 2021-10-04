import React from 'react';
import './About.css'

import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
const About = () => {

    return (

//  show some info and image with custom css

        <div>
<Header></Header>

           <div className="about-container">

            <div className="image-container">
                <img src="https://images.squarespace-cdn.com/content/v1/5f0ef172b78c7a6ddef4843c/1606139416871-DBFN8TKDILZ1K6NJYQG8/Pathshala%2BCampus_0005.jpg?format=750w" alt="" />
            </div>

             <div className="about-us">
            <h1>Why Pathshala?</h1>
            <p>Despite the wealth of media talent that exists in the region, not to mention its potpourri of cultural heritage, there is currently still a significant dearth of infrastructure for proper training in photography, television and film. Although some very fine photographers and videographers have emerged in spite of this, they have all either settled overseas or work in overseas agencies. For this reason their work is hardly seen locally. There is little scope of involving their expertise in order to train our aspiring visual storytellers. A need for such a regional organization was acutely felt, particularly at the grass-root level.
            Photographers and videographers here are viewed simply as technicians who deliver images for a fee, rather than as interpreters of their culture. Practitioners have found it difficult to rise above this lack of understanding and appreciation. Therefore, the general level of professionalism has so far been poor, and there is little theoretical understanding even in academic circles. In 1998, Pathshala started as an institute of photography with particular emphasis on photojournalism. In 2010, it became a full-fledged institute for visual storytelling by setting up a new department of broadcast and multimedia. The school is now called Pathshala South Asian Media Institute.
                 </p>
             
            </div>
           </div>

           <div className="contact-container">
               <div className="contact-us">
                   <h2>About us</h2>
                   <p>Pathshala is the early school of Photography in South Asia region, which offers various short-term and long-term educational programs in photography, film and multimedia journalism throughout the year. Pathshala started in 1998. Since then, the institution has slowly grown to become a fully-fledged photography educational institution based in Dhaka, Bangladesh. </p>
               </div>
               <div className="contact-us">
                    <h3>Contact us</h3>
                    <p>Mob: +880 1795-094271 [10 AM-6 PM]; except Friday/Gov Holiday</p>
                    <p>Email: pathshala.office@gmail.com</p>
                    <div className="icon">
                    <i class="fab fa-facebook font-icons"></i>
                    <i class="fab fa-instagram-square font-icons"></i>
                    <i class="fab fa-twitter font-icons"></i>
                    <i class="fab fa-google-plus font-icons"></i>
                    </div>
                    <h3>ADDRESS</h3>
                    <p>DrikPath Bhobon, 16 Sukrabad, Panthpath, Dhaka 1207, Bangladesh</p>
               </div>
           </div>


<Footer></Footer>
        </div>
    );
};

export default About;