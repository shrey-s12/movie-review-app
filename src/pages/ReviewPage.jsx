import React from 'react';
import Review from '../components/Review';
import { useNavigate } from 'react-router-dom';

const ReviewPage = ({ formValues, setFormValue, resetFormValues }) => {
  const navigate = useNavigate();
  const reviewData = localStorage.getItem("review") || "[]";
  const reviews = JSON.parse(reviewData);

  const handleSubmit = (review, index) => {
    if (index !== undefined) {
      reviews[index] = review;
    } else {
      reviews.push(review);
    }
    const updatedReviewString = JSON.stringify(reviews);
    localStorage.setItem("review", updatedReviewString);
    navigate('/view');
    resetFormValues();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        {/* Title */}
        <h2 className="text-3xl font-bold text-blue-600 text-center mb-6">
          Movie Review Form
        </h2>

        {/* Review Form */}
        <Review
          onSaveReview={handleSubmit}
          formValues={formValues}
          setFormValue={setFormValue}
          resetFormValues={resetFormValues}
        />
      </div>
    </div>
  );
};

export default ReviewPage;
