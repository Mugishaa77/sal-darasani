import TutorCard from "./TutorCard";
import TutorSearchAndFilter from "./TutorSearchAndFilter";
import NeedsFive from '../pictures/needs_five.jpeg';

export default function TutorPool () {
    return (
        <div className="pool">
            <div className="pool-inner">
            <h1 className="text-3xl font-bold text-center mb-2">
             Pick Your Preferred Tutor From Our Wide Pool of Professionals</h1>
             <div className="pool-intro">                  
          
             <div className="pool-one">             
             <p className="lusitana-regular intro">
             <span className="quotes">“</span>At Darasani Hub, we simplify the process of finding the right tutor for your unique 
  needs.<span className="quotes">”</span>
        
                 </p>
                 
                <ul className="poppins-regular">
                    <li>
                    
                    <span>✔</span> Browse through our wide array of professional educators, each with detailed 
                    profiles and specializations in various subjects.
                    </li>
                    <li>
                   
                    <span>✔</span> Easily view 
                their credentials and connect directly with tutors for personalized
                 learning support.
                    </li>
                    <li>
                   
                    <span>✔</span> Start your educational journey with confidence by selecting your
                    preferred tutor from our extensive pool today!
                    </li>
                </ul>
                  
             </div>

             <div className="pool-two">
             <img src={NeedsFive} alt=""/>
             </div>

             
             </div>
            </div>
            
             <div>
                <TutorSearchAndFilter />

                <TutorCard />
             </div>
        </div>
    );
}