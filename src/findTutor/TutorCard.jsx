import React, { useState } from 'react';
import teacher from '../pictures/teacher.jpg';

export default function TutorCard() {
  // Hardcoded JSON data
  const initialData = [
    {
      title: "Teacher's Name",
      text: "Short sentence",
      imageUrl: teacher,
     subject1: "subject 1",
     subject2: "subject 2",
      profile: "profile-url",
      tutorDm: "profile-url/message"
    },
    {
      title: "Teacher's Name",
      text: "Another example text",
      imageUrl: teacher,
      subject1: "subject 1",
     subject2: "subject 2",
      profile: "profile-url",
      tutorDm: "profile-url/message"
    },
    {
      title: "Teacher's Name",
      text: "Short sentence",
      imageUrl: teacher,
      subject1: "subject 1",
     subject2: "subject 2",
      profile: "profile-url",
      tutorDm: "profile-url/message"
    },
    {
      title: "Teacher's Name",
      text: "Another example text",
      imageUrl: teacher,
      subject1: "subject 1",
     subject2: "subject 2",
      profile: "profile-url",
      tutorDm: "profile-url/message"
    }
  ];

  const [cards, setCards] = useState(initialData);

  return (
    <div className="tutor">
      <ul className="tutorcard-list">
        {cards.map((card, index) => (
          <li className="card-item" key={index}>
            <div className="card">
              <img src={card.imageUrl} alt={card.title} />
              <div className="card-body">
                <h5 className="alata-regular">{card.title}</h5>
                <p className="poppins-regular">{card.text}</p>
              </div>
              <div className="subjects-taught">
              <h6 className="lusitana-bold">Subjects Taught</h6>
              <ul className="poppins-regular">
                <li>{card.subject1}</li>
                <li>{card.subject2}</li>
              </ul>
              </div>
              
              <div className="card-body">
                <a href={card.profile}>
                  See Profile
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-square" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
                  </svg>
                </a>
                <a href={card.tutorDm}>
                  Connect with tutor
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat" viewBox="0 0 16 16">
  <path d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105"/>
</svg>
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}