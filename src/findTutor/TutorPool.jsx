import TutorCard from "./TutorCard";
import TutorSearchAndFilter from "./TutorSearchAndFilter";
import DiversityFive from '../pictures/diversity_five.jpeg';


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
                   
                    <span>✔</span> Withdraw your savings at any time
                    </li>
                </ul>
                  
             </div>

             <div className="pool-two">
             <img src={DiversityFive} alt=""/>
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