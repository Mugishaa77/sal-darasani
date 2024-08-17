import React, { useState } from 'react';


const TutorSearchAndFilter = () => {
  // Sample data for testing
  const tutors = [
    {
      title: "Alice Johnson",
      text: "Experienced math tutor with a passion for teaching.",
      imageUrl: 'path/to/image1.jpg',
      subject1: "Math",
      subject2: "Algebra",
      profile: "#",
      tutorDm: "#"
    },
    {
      title: "Bob Smith",
      text: "Science teacher with 10 years of experience.",
      imageUrl: 'path/to/image2.jpg',
      subject1: "Science",
      subject2: "Physics",
      profile: "#",
      tutorDm: "#"
    },
    {
      title: "Carol Davis",
      text: "Expert in English literature and language.",
      imageUrl: 'path/to/image3.jpg',
      subject1: "English",
      subject2: "Literature",
      profile: "#",
      tutorDm: "#"
    },
    {
      title: "David Wilson",
      text: "Specializes in computer science and programming.",
      imageUrl: 'path/to/image4.jpg',
      subject1: "Computer Science",
      subject2: "Programming",
      profile: "#",
      tutorDm: "#"
    }
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredTutors = tutors.filter((tutor) => {
    const matchesSearchTerm = tutor.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || tutor.subject1 === selectedCategory || tutor.subject2 === selectedCategory;
    return matchesSearchTerm && matchesCategory;
  });

  return (
    <div className="search-filter">
      <div className="search-filter-container">
        <label className="alata-regular">
          <span>Search for Tutor</span>
        </label>
        <div className="input-button-container">
          <input
            type="text"
            placeholder="Search tutors..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="search-bar form-control montserrat"
          />
          <button className="search-button" ><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg></button>
        </div>
      </div>

      <div className="search-filter-container">
        <label className="alata-regular">
          <span>Filter by Subject</span>
        </label>
        <div className="input-button-container">
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="category-filter form-control montserrat"
          >
            <option value="All">All Categories</option>
            <option value="Math">Math</option>
            <option value="Algebra">Algebra</option>
            <option value="Science">Science</option>
            <option value="Physics">Physics</option>
            <option value="English">English</option>
            <option value="Literature">Literature</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Programming">Programming</option>
          </select>
          <button className="filter-button" ><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-funnel" viewBox="0 0 16 16">
  <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2z"/>
</svg></button>
        </div>
      </div>
    </div>
  );
};

export default TutorSearchAndFilter;
