import NeedsSeven from '../pictures/needs_seven.jpeg';

export default function Feedback () {
    return (
        <div className="feedback">
             <h1 className="text-3xl font-bold text-center mb-2">
                We'd Like to Hear from You. How Can we Serve you Better?
            </h1>
           <div className="feedback-incentive">
            <p className="lusitana-regular">At Darasani Hub, we're committed to providing you with the best experience possible. 
                Your feedback is crucial in helping us improve and tailor our services to meet your needs.
                 Whether you have suggestions, compliments, or concerns, we want to hear from you!</p>
               <h4 className="alata-regular">Why Is Your Feedback Important?</h4>
               <ul className="montserrat">
               <li>
  <h6 className="lusitana-bold">It Shapes Our Services</h6>
  <p className="lusitana-regular">Your insights help us understand what we're doing right and where we can improve.</p>
</li>
<li>
  <h6 className="lusitana-bold">Enhances Your Experience</h6>
  <p className="lusitana-regular">By sharing your thoughts, you directly contribute to creating a better platform tailored just for you.</p>
</li>
<li>
  <h6 className="lusitana-bold">Be Heard</h6>
  <p className="lusitana-regular">We value every piece of feedback and take it seriously to ensure your voice shapes the future of Darasani Hub.</p>
</li>


               
                
               </ul>
           </div>
           <h3 className="lusitana-bold">Take a Moment to Share your Thoughts!</h3>
<div className="feedback-content">
<div className="feedback-img">
    <img src={NeedsSeven} />

</div>

<div className="feedback-form">
<label htmlFor="message" className="alata-regular">
  Leave a Message
</label>
<textarea
    id="message"
    name="message"
    className="w-full p-3 form-control montserrat"
    rows="10"
    placeholder="Type your message here"
    value=""
    // add onChange
></textarea>
<button type="button" className="send-button poppins-regular">Send</button>
</div>


</div>

<h5 className="lusitana-bold">Thank You for Helping Us Grow!</h5>

        </div>
    );
}