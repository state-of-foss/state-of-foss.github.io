import React from 'react';

function Header() {
  return (
    <>
      <img src={require('../../static/images/front-img-1.png')} alt="nav-logo"  className="front-page-img-1"/>

      <button className={'front-banner-download'} onClick={() => {document.getElementById('download-section').scrollIntoView()}}>
      <p className={'download-text'}>DOWNLOAD</p>
      </button>

      {/* <div className={'front-banner-nav'}>
        <div className={'container-front-banner-button'}>
          <button className={'front-banner-button'} title="hello">
            <Link to="/#section-1" style={{ textDecoration: 'none' , color: "black"}}>01</Link>
          </button>
        </div>
        <div className={'container-front-banner-button'}>
          <button className={'front-banner-button'}>
            <Link to="/#section-2" style={{ textDecoration: 'none' , color: "black"}}>02</Link>
          </button>
        </div>
        <div className={'container-front-banner-button'}>
          <button className={'front-banner-button'}>
            <Link to="/#section-3" style={{ textDecoration: 'none' , color: "black"}}>03</Link>
          </button>
        </div>
        <div className={'container-front-banner-button'}>
          <button className={'front-banner-button'}>
            <Link to="/#section-4" style={{ textDecoration: 'none' , color: "black"}}>04</Link>
          </button>
        </div>
        <div className={'container-front-banner-button'}>
          <button className={'front-banner-button'}>
            <Link to="/#section-5" style={{ textDecoration: 'none' , color: "black"}}>05</Link>
          </button>
        </div>
        <div className={'container-front-banner-button'}>
          <button className={'front-banner-button'}>
            <Link to="/#section-6" style={{ textDecoration: 'none' , color: "black"}}>06</Link>
          </button>
        </div>
        <div className={'container-front-banner-button'}>
          <button className={'front-banner-button'}>
            <Link to="/#section-7" style={{ textDecoration: 'none' , color: "black"}}>07</Link>
          </button>
        </div>
        <div className={'container-front-banner-button'}>
          <button className={'front-banner-button'}>
            <Link to="/#section-8" style={{ textDecoration: 'none' , color: "black"}}>08</Link>
          </button>
        </div>
      </div> */}
    </>
  );
}

export default Header;
