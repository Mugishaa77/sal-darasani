import Needs from '../../pictures/needs.jpeg';
import NeedsTwo from '../../pictures/needs_two.jpeg';
import NeedsThree from '../../pictures/needs_three.jpeg';
import NeedsFour from '../../pictures/needs_four.jpeg';
import TutorSearchForm from '../../findTutor/TutorSearchForm';
import TutorPool from '../../findTutor/TutorPool';
import Feedback from '../../findTutor/Feedback';
import Winning from '../../pictures/winning.jpg';
import Personalized from '../../pictures/personalized.jpeg';
import Search from '../../pictures/find.jpeg';

export default function Find() {

    return (
        <div className="find">
            <h2 className="hero-h1 text-5xl md:text-[36px] font-bold text-center">
                Discover the Perfect Tutor Tailored to Your Needs!
            </h2>
            <div className="incentives poppins-regular">
                {/* 
                <div className="incentive-item">
                <img src={Needs} alt="Identify Your Tutor Needs" className="mb-3 mx-auto" />
                <figcaption className="text-lg font-semibold">Identify Your Unique Needs</figcaption>
                    <p  className="text-sm text-gray-600">Understand your specific learning requirements to find a tutor who fits your goals.</p>
                   
                </div>
                 */}

                <div className="incentive-item">
                    <img src={Search} alt="Search for Tutors" className="mb-3 mx-auto" />
                    <figcaption className="text-lg font-semibold">1.Find the Perfect Match</figcaption>
                    <p  className="text-sm text-gray-600">Use our advanced search tools to connect with tutors who are perfect for you.</p>
                </div>

                <div className="incentive-item">
                    <img src={Personalized} alt="Get Connected with Tutors" className="mb-3 mx-auto" />
                    <figcaption className="text-lg font-semibold">2.Connect with Top Tutors</figcaption>
                    <p  className="text-sm text-gray-600">Get connected with experienced tutors who are ready to help you succeed.</p>
                </div>

                <div className="incentive-item">
                    <img src={Winning} alt="Improve Your Grades" className="mb-3 mx-auto" />
                    <figcaption className="text-lg font-semibold">3.Boost Your Grades Effortlessly</figcaption>
                    <p  className="text-sm text-gray-600">Achieve better results with personalized tutoring designed to fit your learning style.</p>
                </div>
            </div>

           <hr/>

            <div className="tutor-search">
               
                <TutorSearchForm />
            </div>
            
            
            <div className="pool-container">
                <TutorPool />
            </div>

          

            <div className="message-box">
                <Feedback />

            </div>
            <div className="text-center pt-4 ds-footer">
                        <p className="text-sm">&copy; 2024 Darasani Hub. All rights reserved.</p>
                    </div>
        </div>
    );
}
           
            