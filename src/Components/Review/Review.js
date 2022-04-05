/* eslint-disable no-unused-vars */
import React from 'react';
import useReviews from "../../CustomHook/useReviews";
import Reviewcard from '../Reviewcard/Reviewcard';


const Review = () => {
    const [reviews, setReview] = useReviews();
    return (
      <div>
        <div className="grid mb-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
          {reviews.map((review) => (
            <Reviewcard review={review} key={review.id}></Reviewcard>
          ))}
        </div>
      </div>
    );
};

export default Review;