import React from 'react';

const ImageList = props => {
  const images = props.image.map(({ description, urls, key }) => {
    return <img key={key} src={urls.regular} alt={description} />;
  });

  return <div> {images}</div>;
};

export default ImageList;
