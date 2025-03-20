import React from "react";
import { useParams } from "react-router-dom";
import courses from "../../Components/Assets/Courses.json"; 
import "./CourseDetail.css";

import bioinformatics from "../../Components/Assets/bio.jpg";
import computationalBiology from "../../Components/Assets/com.jpg";
import genomicData from "../../Components/Assets/genomic.jpg";
import dataScience from "../../Components/Assets/data.jpg";

const images = {
  "bio.jpg": bioinformatics,
  "com.jpg": computationalBiology,
  "genomic.jpg": genomicData,
  "data.jpg": dataScience,
};

const CourseDetail = () => {
  const { id } = useParams();
  const course = courses.find((course) => course.id.toString() === id);

  if (!course) {
    return <h2 className="error-message">Course not found!</h2>;
  }

  return (
    <div className="course-detail-container">

      <div className="course-content">
        <h1 className="course-title">{course.name}</h1>

        <p className="course-description">
          The Bioinformatics course explores computational techniques for analyzing biological data, focusing on genomics, proteomics, and data interpretation.
        </p>


     
        <div className="course-tags">
          <div className="tag"> Bestseller</div>
          <div className="tag"> Trending</div>
          <div className="tag"> English</div>
        </div>

      
        <div className="course-info-box">
          <div className="info-item"> 10 Modules</div>
          <div className="info-item"> Beginner Level</div>
          <div className="info-item">⭐⭐⭐⭐ Rating</div>
          <div className="info-item"> 100+ Learners</div>
        </div>
      </div>

      <div className="course-image-box">
        <div className="course-image-container">
          <img src={images[course.image]} alt={course.name} className="course-img" />
          <p class="price">
  <span class="old-price">₹2000</span> 
  <span class="new-price">₹1600</span> 
  <span class="discount">80% Off</span>
</p>
          <button className="add-to-cart-btn">🛒 Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;

