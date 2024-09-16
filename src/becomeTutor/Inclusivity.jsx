import DiversitySix from '../pictures/diversity_six.jpeg';
import DiversityNine from '../pictures/diversity_nine.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStarOfLife } from '@fortawesome/free-solid-svg-icons';


export default function Inclusivity () {
    return (
        <div className="incl">       
                <div className="incl-txt">
                <p className="lusitana-regular">
                We are looking for passionate teachers who are dedicated to making a 
                positive impact in the lives of students with special needs.
         </p>
  
            <h4 className="lusitana-bold">Why Choose Darasani?</h4> 
                <ul className="poppins-regular">
                    <li>
                    
                    <span>✔</span>Free Training Courses after Verification
                    </li>
                    <li>       
            <span>✔</span>Flexible Working Hours
                    </li>
                    <li>
                   
                    <span>✔</span>Withdraw your Earnings anytime
                    </li>
                </ul>            
           
            </div>
            <div className="incl-img">
         <img src={DiversitySix}/>           
           </div>  

           

            
            

        </div>
    );
}