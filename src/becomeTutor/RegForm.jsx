import Tutor from '../pictures/best.png'

export default function RegForm () {
    return (
        <div className="waiting-list-form">
        <h4 className="lusitana-bold">Please fill the form to join our waiting list</h4>
        <form>

            <div className="form-badge">
            <img src={Tutor} alt="Darasani Hub Tutor" className="tutor-image" />
            </div>
            <label htmlFor="first" className="alata-regular">
                First Name <span className="required-asterisk">*</span>
            </label>
            <input type="text" id="first" name="firstName" placeholder="First Name" className="form-control montserrat" required />

            <label htmlFor="second" className="alata-regular">
                Second Name <span className="required-asterisk">*</span>
            </label>
            <input type="text" id="second" name="secondName" placeholder="Second Name" className="form-control montserrat" required />

            <label htmlFor="city" className="alata-regular">
                City <span className="required-asterisk">*</span>
            </label>
            <input type="text" id="city" name="city" placeholder="City" className="form-control montserrat" required />

            <label htmlFor="email" className="alata-regular">
                Email <span className="required-asterisk">*</span>
            </label>
            <input type="email" id="email" name="email" placeholder="Email" className="form-control montserrat" required />

            <label htmlFor="number" className="alata-regular">
                Phone Number <span className="required-asterisk">*</span>
            </label>
            <input type="tel" id="number" name="phoneNumber" placeholder="Phone Number" className="form-control montserrat" required />

            <label htmlFor="level" className="alata-regular">
                Teaching School Level <span className="required-asterisk">*</span>
            </label>
            <select id="level" name="level" className="level select-with-arrow form-control montserrat" required>
                <option value="" disabled selected>Select an option</option>
                <option value="primary">Primary</option>
                <option value="secondary">Secondary</option>
            </select>

            <label htmlFor="subjects" className="alata-regular">
                Subject(s) of Specialization <span className="required-asterisk">*</span>
            </label>
            <textarea
                id="subjects"
                name="subjects"
                className="form-control montserrat"
                rows="2"
                placeholder="Enter subjects of specialization"
                required
            ></textarea>

            <label htmlFor="joinReason" className="alata-regular">
                Why would you like to join us? <span className="required-asterisk">*</span>
            </label>
            <textarea
                id="joinReason"
                name="joinReason"
                className="form-control montserrat"
                rows="5"
                placeholder="Your reason for joining"
                required
            ></textarea>

            <label htmlFor="credentials" className="alata-regular">
                Upload Your Credentials (Optional)
            </label>
            <input type="file" id="credentials" name="credentials" className="form-control montserrat" />

            <button className="btn-send">Submit</button>
        </form>
      </div>
    );
}
