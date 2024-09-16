import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpenReader, faUserGraduate, faUniversalAccess } from '@fortawesome/free-solid-svg-icons';

export default function Steps () {
    return (
        <div className="steps">
            <p className="lusitana-regular value-proposition">
            Become part of a thriving community of educators.
             At Darasani Hub, we provide the tools and support you need to succeed as a tutor. 
        <br/>      
        <strong className="spec">
        We Specialize in:
      </strong>
            </p>  
          
           
           
           
            <ul className="lusitana-bold">
            <li><span><FontAwesomeIcon icon={faBookOpenReader} size="lg"  style={{color: "#74C0FC",}} /></span>Primary and Secondary Education</li>
            <li><span><FontAwesomeIcon icon={faUserGraduate} size="lg" style={{color: "#74C0FC",}} /></span>Education and Tutoring</li>
            <li><span><FontAwesomeIcon icon={faUniversalAccess} size="lg" style={{color: "#74C0FC",}} /></span>Special Needs Education</li>
        </ul>
       


       
        </div>
    )
}