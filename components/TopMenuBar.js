import { animateScroll as scroll, scroller, Link } from 'react-scroll';

const TopMenu = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const scrollTo = (element) => {
    scroller.scrollTo(element, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  };

  return (
    <div attached='top' style={{ backgroundColor: '#1B1C1D' }}>
      <div className='ui center aligned container'>
        <div
          className='ui borderless three item main menu inverted aligned'
          style={{
            width: '100%',
            border: 'none',
            marginTop: '0px'
          }}
        >
          <div className='ui item'>
            <div className='header item'>
              <a className='item' href='#' onClick={scrollToTop}>
                Home
              </a>
            </div>
            <a className='ui item' onClick={() => scrollTo('experienceHeader')}>
              Experience
            </a>
            <a className='ui item' onClick={() => scrollTo('portfolioHeader')}>
              Portfolio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopMenu;
