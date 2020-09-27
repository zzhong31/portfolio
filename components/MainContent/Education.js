const Education = () => {
  return (
    <React.Fragment>
      <h3 className='ui header'>Education</h3>
      <div className='ui segment'>
        <div className='ui divided items'>
          <div className='item'>
            <div className='ui tiny image'>
              <img alt='berkeley seal' src='/berkeley.jpg'></img>
            </div>
            <div className='content'>
              <div className='header'>University of California, Berkeley</div>
              <div className='meta'>Sept 2010 - May 2014</div>
              <div className='description'>
                Bachelor of Arts, Statistics & Bachelor of Arts, Economics
              </div>
            </div>
          </div>
          <div className='item'>
            <div className='ui tiny image'>
              <img alt='ggu seal' src='/ggu.jpg'></img>
            </div>
            <div className='content'>
              <div className='header'>Golden Gate University</div>
              <div className='meta'>Sept 2016 - Dec 2018</div>
              <div className='description'>
                Master of Business Administration
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Education;
