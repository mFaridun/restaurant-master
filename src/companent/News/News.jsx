import React from 'react';
import images from '../../constants/images';
import icon from '../../constants/icon';
import './News.css';

function News () {
  return (
    <div>

      <div className='news-section'>
        <div className='container'>

          <div className='news-box'>
            <h1>News</h1>
            <span>Gerícht updates</span>

            <div className='news-card-box'>
            <div className='news-card'>
              <img src={images.gosht} alt="gosht" width={410} height={352} />

              <div className='news-card-title'>
                <span>tips for prepping and caring for your grill</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.</p>
              <div className='news-data'>
                <span>Read More</span>
                <p>16 Apr 2021</p>
              </div>
              </div>

            </div>

            <div className='news-card'>
              <img src={images.gosht} alt="gosht" width={410} height={352} />

              <div className='news-card-title'>
                <span>tips for prepping and caring for your grill</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.</p>
              <div className='news-data'>
                <span>Read More</span>
                <p>16 Apr 2021</p>
              </div>
              </div>

            </div>

            <div className='news-card'>
              <img src={images.gosht} alt="gosht" width={410} height={352} />

              <div className='news-card-title'>
                <span>tips for prepping and caring for your grill</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.</p>
              <div className='news-data'>
                <span>Read More</span>
                <p>16 Apr 2021</p>
              </div>
              </div>

            </div>
            </div>

            <div className='news-link'><a href="">View More</a></div>

          </div>

        </div>
      </div>

    </div>
  )
}

export default News;
