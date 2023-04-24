import React from 'react';
import images from "../../constants/images";
import icon from '../../constants/icon';
import './Testimony.css';

function Testimony () {

  return (

    <div>

      <div className='testimony'>
        <h1>Testimony</h1>
        <h2>Happy customers</h2>

        <div className='commits-box'>
          <div className='commits'>
            <span>Maria</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisq...</p>
            <div className='icon-bar'>
              <h5><icon.AiOutlineCalendar/><span>06/02/2022</span></h5>
              <h5><icon.AiOutlineClockCircle/><span>11:15</span></h5>
              <h5><icon.AiOutlineEye/><span>222</span></h5>
            </div>
            <span></span>
          </div>

          <div className='commits'>
            <span>Maria</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisq...</p>
            <div className='icon-bar'>
              <h5><icon.AiOutlineCalendar/><span>06/02/2022</span></h5>
              <h5><icon.AiOutlineClockCircle/><span>11:15</span></h5>
              <h5><icon.AiOutlineEye/><span>222</span></h5>
            </div>
            <span></span>
          </div>

          <div className='commits'>
            <span>Maria</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisq...</p>
            <div className='icon-bar'>
              <h5><icon.AiOutlineCalendar/><span>06/02/2022</span></h5>
              <h5><icon.AiOutlineClockCircle/><span>11:15</span></h5>
              <h5><icon.AiOutlineEye/><span>222</span></h5>
            </div>
            <span></span>
          </div>
        </div>

        <div className="icon-page">
          <h3><icon.VscChevronRight/></h3>
          <span>01 - 02 03 04</span>
          <h3><icon.VscChevronLeft/></h3>
        </div>

      </div>

    </div>
  )
}

export default Testimony;
