import React from 'react';
import images from '../../constants/images';
import icon from '../../constants/icon';
import './Video.css';

function Video () {

  return (
    <div>
      <div className='video-sectiom'>
        <div className='container'>
          <div className='video-box'>
            <img src={images.video} alt="video" />
            <div></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Video;
