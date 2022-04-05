/* eslint-disable no-unused-vars */
import React from 'react';
import useReviews from '../../CustomHook/useReviews';
import Reviewcard from '../Reviewcard/Reviewcard';
import { Link } from "react-router-dom";

const Homereview = () => {
    const [reviews, setReview] = useReviews();
    return (
     <h1>three reviews</h1>
    );
};

export default Homereview;