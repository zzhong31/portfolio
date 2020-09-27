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
    <div
      attached='top'
      style={{
        backgroundColor: '#1B1C1D',
        paddingBottom: '12px',
        paddingTop: '12px'
      }}
    >
      <div className='ui center aligned container'>
        <div
          className='ui borderless three item menu inverted'
          style={{
            width: '100%',
            border: 'none',
            marginTop: '0px'
          }}
        >
          <a className='ui item' href='#' onClick={scrollToTop}>
            Home
          </a>

          <a className='ui item' onClick={() => scrollTo('experienceHeader')}>
            Experience
          </a>
          <a className='ui item' onClick={() => scrollTo('portfolioHeader')}>
            Portfolio
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopMenu;
