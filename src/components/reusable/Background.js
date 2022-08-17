import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const Background = ({ imageData = {}, className = '' }) => {
  const image = getImage(imageData.file.childImageSharp.gatsbyImageData);

  return (
    <GatsbyImage
      image={image}
      alt=""
      layout="fullWidth"
      formats={['auto', 'webp', 'avif']}
      className={`absolute top-0 left-1/2 -translate-x-1/2 max-h-full mx-auto md:w-[768px] lg:w-[1440px] ${className}`}
    />
  );
};

Background.propTypes = {
  imageData: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default Background;
