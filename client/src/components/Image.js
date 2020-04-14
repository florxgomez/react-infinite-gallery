import React from 'react';

const Image = ({ img }) => {
  return <img className="single-photo" src={img.urls.thumb} alt="" />;
};

export default Image;
