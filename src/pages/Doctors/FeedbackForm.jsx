import React, { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';

const FeedbackForm = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [reviewText,setReviewText] = useState("");

    const handleSubmitReview = async e=>{
        e.preventDefault()
        // later we will use
    }

    return (
        <form action="">
            <div>
                <h3 className='text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0'>
                    How would you rate the overall experience?*
                </h3>

                <div>
                    {[...Array(5).keys()].map((index) => {
                        const ratingValue = index + 1;

                        return (
                            <button
                                key={index}
                                type="button"
                                className={`${
                                    ratingValue <= ((rating && hover) || hover)
                                        ? "text-yellow-500"
                                        : "text-gray-400"
                                } bg-transparent border-none outline-none text-[22px] cursor-pointer`}
                                onClick={() => setRating(ratingValue)}
                                onMouseEnter={() => setHover(ratingValue)}
                                onMouseLeave={() => setHover(rating)}
                            >
                                <span>
                                    <AiFillStar />
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>

            <div className='mt-[30px]'>
            <h3 className='text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0'>
                    Share your feedback and suggestions*
            </h3>

            <textarea className='border border-solid border-[#0066ff34] focus:outline-primaryColor 
            w-full px-4 py-3 rounded-md' rows="5" placeholder='Write your message'
            onChange={(e)=>setReviewText(e.target.value)}></textarea>
            </div>

            <button type="submit" onClick={handleSubmitReview} className='btn'>Submit Feedback</button>
        </form>
    );
};

export default FeedbackForm;
