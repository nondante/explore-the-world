import React from 'react';
import './PhotosContainer.css'
import DisplayImage from '../DisplayImage/DisplayImage'

const PhotosContainer = ({photos}) => {

  return (
    <>
      <div className="col-md-6 PhotosContainer text-center">
        {photos.map(photo => {
          return (
          <DisplayImage
            key={photo.id}
            farm={photo.farm}
            server={photo.server}
            id={photo.id}
            secret={photo.secret}
          />
          )
        })}
    </div>
  </>
  )
}

export default PhotosContainer