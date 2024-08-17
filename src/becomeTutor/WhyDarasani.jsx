import Join from '../pictures/join.jpeg'
import Time from '../pictures/time.jpeg';
import Payment from '../pictures/payment.jpeg';
import Support from '../pictures/support.jpeg';
import Inclusivity from '../pictures/inclusive.jpeg';

export default function WhyDarasani () {
    return (
        <div className="become-top">
        <div className="ul-wrapper">
        <h3 className="lusitana-bold why">Why Choose Darasani Hub?</h3>
          <ul className="lusitana-regular">

   <li>
      <img src={Time}/>
      <span><span className="tick">&#10003;</span> Enjoy Flexible hours</span>
      <img src={Support}/>
      <span><span className="tick">&#10003;</span>Supportive Teaching Community</span>
            
      </li>
     

      <li>
      
   </li>
   <li>
  
   
   <img className="pay"src={Payment}/>
   <span><span className="tick">&#10003;</span>Competitive compensation</span>
   <img src={Inclusivity}/>
   <span><span className="tick">&#10003;</span>Inclusivity and Diversity</span>
   
  
      </li>
     
   

      <li>
      <span className="fact-check lusitana-bold">
“Did you know, The Average Teacher impacts over 3,000
students during their career?”
</span> 
      <img  src={Join}/>                  
<span><span className="tick">&#10003;</span>Help Students Achieve their Potential </span>



</li> 
      
</ul>
</div> 
</div>
    );
}