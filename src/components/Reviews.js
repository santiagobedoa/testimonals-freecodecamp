import React from 'react';
import '../stylessheets/Reviews.css'

export function Review(props) {
  return (
    <div className='review-container'>
      <img 
        className='review-author-image'
        src={require(`../images/image-${props.image}.png`)}
        alt={`${props.image} image`}/>
      <div className='review-text-container'>
        <p className='review-author-name'>
          <strong>{props.name}</strong> in {props.country}
        </p>
        <p className='author-profesional-position'>
          Software Engineer at <strong>{props.company}</strong>
        </p>
        <p className='text-review'>"{props.review}"</p>
      </div>
    </div>
  );
}
