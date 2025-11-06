import React from 'react';
import { Link } from 'react-router-dom';
import studyImage from '../assets/study.jpg';


function Home() {
  return (
    <div className="home-page">
      {/* ✅ Paste the image here */}
      <img src={studyImage} alt="Study Planner" className="home-image" />

      <h1 className="home-title">Welcome to Smart Study Planner 📚</h1>
      <p>Organize your study goals, track progress, and stay motivated!</p>
      <Link to="/planner">
        <button className="home-button">Go to Planner</button>
      </Link>
    </div>
  );
}

export default Home;
