import React from 'react';
const DisplayImage = ({farm, server, id, secret,getImageOnClick}) => {
  const src = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_b.jpg`
  return (
    <div>
      <img src={src} alt="city_photos" />
    </div>
  )
}

export default DisplayImage