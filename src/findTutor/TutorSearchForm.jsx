import React, { useState } from 'react';



export default function FindTutorForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [city, setCity] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [education, setEducation] = useState('');
    const [tutoring, setTutoring] = useState('');
    const [subjects, setSubjects] = useState('');
    const [availability, setAvailability] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    const handleReset = () => {
        setFirstName('');
        setLastName('');
        setCity('');
        setEmail('');
        setPhoneNumber('');
        setEducation('');
        setTutoring('');
        setSubjects('');
        setAvailability('');
        setMessage('');
    };
    

    return (
        <div className="tutor-search-form rounded ">
            <div className="find-cover">
                <div className="find-inner max-w-3xl mx-auto">
                    <h1 className="text-3xl font-bold text-center mb-2">
                    Find Your Ideal Tutor by Search</h1>
                    <p className="text-center mb-5 lusitana-regular">Welcome! Please fill out the form below to connect with a tutor who fits your needs.</p>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <h3 className="text-2xl font-semibold mb-4"> Enter Your Details</h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="first" className="block mb-1 text-sm font-medium">First Name</label>
                                <input
                                    type="text"
                                    id="first"
                                    name="first"
                                    className="w-full p-3 form-control"
                                    placeholder="Enter your first name"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </div>

                            <div>
                                <label htmlFor="last" className="block mb-1 text-sm font-medium">Last Name</label>
                                <input
                                    type="text"
                                    id="last"
                                    name="last"
                                    className="w-full p-3 form-control"
                                    placeholder="Enter your last name"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>

                            <div>
                                <label htmlFor="city" className="block mb-1 text-sm font-medium">City</label>
                                <input
                                    type="text"
                                    id="city"
                                    name="city"
                                    className="w-full p-3 form-control"
                                    placeholder="Enter your city"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block mb-1 text-sm font-medium">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full p-3 form-control"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div>
                                <label htmlFor="number" className="block mb-1 text-sm font-medium">Phone</label>
                                <input
                                    type="tel"
                                    id="number"
                                    name="phoneNumber"
                                    className="w-full p-3 form-control"
                                    placeholder="Enter your phone number"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                />
                            </div>
                        </div>

                        <fieldset className="mb-4">
                            <label htmlFor="education" className="block mb-1 text-sm font-medium">Level of Education</label>
                            <select
                                id="education"
                                name="education"
                                className="w-full p-3 form-control"
                                value={education}
                                onChange={(e) => setEducation(e.target.value)}
                            >
                                <option value="" disabled>Select your level of education</option>
                                <option value="Primary">Primary School</option>
                                <option value="Secondary">Secondary School</option>
                                <option value="University">University</option>
                            </select>
                        </fieldset>

                        <fieldset className="mb-4">
                            <label htmlFor="tutoring" className="block mb-1 text-sm font-medium">Preferred Method of Tutoring</label>
                            <select
                                id="tutoring"
                                name="tutoring"
                                className="w-full p-3 form-control"
                                value={tutoring}
                                onChange={(e) => setTutoring(e.target.value)}
                            >
                                <option value="" disabled>Select your preferred method of tutoring</option>
                                <option value="online">Online</option>
                                <option value="in-person">In Person</option>
                                <option value="hybrid">Hybrid</option>
                            </select>
                        </fieldset>

                        <label htmlFor="subjects" className="block mb-1 text-sm font-medium">Subject(s) of Interest</label>
                        <textarea
                            id="subjects"
                            name="subjects"
                            className="w-full p-3 form-control"
                            rows="2"
                            placeholder="Enter subjects of interest"
                            value={subjects}
                            onChange={(e) => setSubjects(e.target.value)}
                        ></textarea>

                        <label htmlFor="availability" className="block text-sm font-medium">Preferred Tutoring Times</label>
                        <input
                            type="text"
                            id="availability"
                            name="availability"
                            className="w-full p-3 form-control"
                            placeholder="e.g., Weekdays after 5 PM, Weekends"
                            value={availability}
                            onChange={(e) => setAvailability(e.target.value)}
                        />

                        <button type="submit" className="submit-button" >Submit</button>

                       
                    </form>
                    
                </div>
            </div>
        </div>
    );
}
