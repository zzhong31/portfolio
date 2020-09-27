const Experience = () => {
  return (
    <React.Fragment>
      <h3 className='ui header'>Experience</h3>
      <div className='ui segment'>
        <div className='ui divided items'>
          <div className='item'>
            <div class='ui tiny image'>
              <img
                style={{ border: '1px solid black' }}
                src='/gilead_logo.jpg'
                alt='gilead logo'
              />
            </div>
            <div className='content'>
              <div className='header'>Gilead Sciences</div>
              <div className='meta'>
                <span>R&D Info Systems Analyst III</span>
              </div>
              <div className='meta'>
                <span>May 2015 - Present</span>
              </div>
              <div className='description'>
                At Gilead, I developed single page applications and handled the
                entire stack. I implemented a new training assignments system
                that streamlined the management of training curricula for both
                new hires and existing employees. I also worked on other
                workflow applications that integrated with our operations data.
                Other tasks included reporting and ETL for our data feeds from
                internal systems and provided contractor data.
              </div>
              <div className='extra'>
                <div className='ui label'>React</div>
                <div className='ui label'>Javascript</div>
                <div className='ui label'>Kendo UI</div>
                <div className='ui label'>ASP.NET</div>
                <div className='ui label'>C#</div>
                <div className='ui label'>MS SQL Server</div>
              </div>
            </div>
          </div>
          <div className='item'>
            <div class='ui tiny image'>
              <img
                style={{ border: '1px solid black' }}
                src='/genentech.png'
                alt='genentech'
              />
            </div>
            <div className='content'>
              <div className='header'>Genentech</div>
              <div className='meta'>
                <span>Data Analyst</span>
              </div>
              <div className='meta'>
                <span>September 2014 - May 2015</span>
              </div>
              <div className='description'>
                At Gilead, I developed single page applications and handled the
                entire stack. I implemented a new training assignments system
                that streamlined the management of training curricula for both
                new hires and existing employees. I also worked on other
                workflow applications that integrated with our operations data.
                Other tasks included reporting and ETL for our data feeds from
                internal systems and provided contractor data.
              </div>
              <div className='extra'>
                <div className='ui label'>React</div>
                <div className='ui label'>Javascript</div>
                <div className='ui label'>Kendo UI</div>
                <div className='ui label'>ASP.NET</div>
                <div className='ui label'>C#</div>
                <div className='ui label'>MS SQL Server</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Experience;
