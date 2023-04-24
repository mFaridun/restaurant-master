import React from 'react';
import images from '../../constants/images';
import icon from '../../constants/icon';
import './Main.css';

function Main () {
  return (
    <div>

      <main className="main">
        <div className="container">
          <div className='dishes'>
            <div className='main-title'>
              <h2>Popular Dishes</h2>
              <div className="icon-img">
                <h3><icon.VscChevronRight/></h3>
                <h3><icon.VscChevronLeft/></h3>
              </div>
            </div>

            <div className='main-card'>
              <div className='card-box'>
                <img src={images.klipartz} alt="klipartz" width={220} height={183} />
                <p>Barbecue Shish kebab Shashlik <br /> Skewer</p>
                <img className='box-stars' src={images.stars} alt="stars" width={108} height={20}  />
                <span>$12.00</span>
              </div>

              <div className='card-box'>
                <img src={images.klipartz} alt="klipartz" width={220} height={183} />
                <p>Barbecue Shish kebab Shashlik <br /> Skewer</p>
                <img src={images.stars} alt="stars" width={108} height={20}  />
                <span>$12.00</span>
              </div>

              <div className='card-box'>
                <img src={images.klipartz} alt="klipartz" width={220} height={183} />
                <p>Barbecue Shish kebab Shashlik <br /> Skewer</p>
                <img src={images.stars} alt="stars" width={108} height={20}  />
                <span>$12.00</span>
              </div>

              <div className='card-box'>
                <img src={images.klipartz} alt="klipartz" width={220} height={183} />
                <p>Barbecue Shish kebab Shashlik <br /> Skewer</p>
                <img src={images.stars} alt="stars" width={108} height={20} />
                <span>$12.00</span>
              </div>
            </div>
          </div>
        </div>
    </main>

    <div className='main-center'>
      <div className="container">
      <div className='main-center-box'>
          <h1>Our Regular Menu Pack</h1>

          <div className='menu-panel'>
            <span>All</span><span>Shawarma</span><span>Turk Kebab</span><span>Hamburger Kebab</span><span>Doner kebab</span><span>Shish kebab</span><span>French fries Pizza</span><span>Desserts</span>
          </div>

          <div className='menu-card'>

              <div className='card-box new-catd'>
                <img src={images.klipartz} alt="klipartz" width={220} height={183} />
                <p>Barbecue Shish kebab Shashlik <br /> Skewer</p>
                <span>$12.00</span>
              </div>

              <div className='card-box'>
                <img src={images.klipartz} alt="klipartz" width={220} height={183} />
                <p>Barbecue Shish kebab Shashlik <br /> Skewer</p>
                <span>$12.00</span>
              </div>

              <div className='card-box'>
                <img src={images.klipartz} alt="klipartz" width={220} height={183} />
                <p>Barbecue Shish kebab Shashlik <br /> Skewer</p>
                <span>$12.00</span>
              </div>

              <div className='card-box'>
                <img src={images.klipartz} alt="klipartz" width={220} height={183} />
                <p>Barbecue Shish kebab Shashlik <br /> Skewer</p>
                <span>$12.00</span>
              </div>

              <div className='card-box new-catd'>
                <img src={images.klipartz} alt="klipartz" width={220} height={183} />
                <p>Barbecue Shish kebab Shashlik <br /> Skewer</p>
                <span>$12.00</span>
              </div>

              <div className='card-box'>
                <img src={images.klipartz} alt="klipartz" width={220} height={183} />
                <p>Barbecue Shish kebab Shashlik <br /> Skewer</p>
                <span>$12.00</span>
              </div>

              <div className='card-box'>
                <img src={images.klipartz} alt="klipartz" width={220} height={183} />
                <p>Barbecue Shish kebab Shashlik <br /> Skewer</p>
                <span>$12.00</span>
              </div>

              <div className='card-box'>
                <img src={images.klipartz} alt="klipartz" width={220} height={183} />
                <p>Barbecue Shish kebab Shashlik <br /> Skewer</p>
                <span>$12.00</span>
              </div>

              <div className='card-box new-catd'>
                <img src={images.klipartz} alt="klipartz" width={220} height={183} />
                <p>Barbecue Shish kebab Shashlik <br /> Skewer</p>
                <span>$12.00</span>
              </div>

              <div className='card-box'>
                <img src={images.klipartz} alt="klipartz" width={220} height={183} />
                <p>Barbecue Shish kebab Shashlik <br /> Skewer</p>
                <span>$12.00</span>
              </div>

              <div className='card-box'>
                <img src={images.klipartz} alt="klipartz" width={220} height={183} />
                <p>Barbecue Shish kebab Shashlik <br /> Skewer</p>
                <span>$12.00</span>
              </div>

              <div className='card-box'>
                <img src={images.klipartz} alt="klipartz" width={220} height={183} />
                <p>Barbecue Shish kebab Shashlik <br /> Skewer</p>
                <span>$12.00</span>
              </div>

          </div>
        </div>
      </div>

    </div>

    </div>
  )
}

export default Main;
