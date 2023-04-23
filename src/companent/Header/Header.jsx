import React from 'react';
import images from '../../constants/images';
import './Header.css'

function Header () {
return (
  <div>

    <header className='header'>
      <div className='container'>
        <nav className='navbar'>
          <a href=""><img className='nav-logo' width={135} height={47} src={images.logo} alt="logo" /></a>

          <div className='nav-page'>
              <ul className='list'>
                <li className='list-item'><a href="">Menu</a></li>
                <li className='list-item'><a href="">News</a></li>
                <li className='list-item'><a href="">About Us</a></li>
                <li className='list-item'><a href="">Contact Us</a></li>
                {/* <li className='list-link'><a className='list-login' href="">Log in</a></li> */}
              </ul>

              <div className='list-link'><a className='list-login' href="">Log in</a></div>
          </div>

        </nav>

        <div className='hero'>
          <div className='hero-text'>
            <span>Chase the new Flavour</span>
            <h1>The key to <br /> Fine dining</h1>
            <p>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
            <div className='list-link hero-btn'><a className='list-login' href="">Explore Menu</a></div>
          </div>
          <div className='hero-img'>
            <img className='cabob' src={images.cabob} alt="cabob" width={560}/>
            <img className='circle' src={images.backCircle} alt="backCircle" width={540}/>
          </div>
        </div>
      </div>
    </header>

  </div>
)
}

export default Header;
