import React from "react";
import { ReviewProps } from "../../Types/type";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
const ReviewCard = ({ review }: ReviewProps) => {
  const { image, name, profession, rating, review: clientReview } = review;
  return (
    <div className="review-card">
      <div className="card-content">
        <Image src="/images/q.png" alt="image" width={50} height={50} />
        <p className="client-review">{clientReview}</p>
        <Image
          src="/images/q.png"
          alt="image"
          width={50}
          height={50}
          className="quote-image "
        />
      </div>
      <div className="rating-section">
        <span>{rating}/5</span>
        <FaStar className="text-yellow-500" />
      </div>
      <div className="reviewer-info">
        <div className="reviewer-details">
          <div>
            <Image
              src={image}
              alt={name}
              width={40}
              height={40}
              className="reviewer-image"
            />
          </div>
          <div>
            <h1 className="reviewer-name">{name}</h1>
            <p className="reviewer-profession">{profession}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
