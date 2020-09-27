const Footer = () => {
  return (
    <div
      className='ui inverted vertical footer segment'
      style={{ marginTop: '35px', paddingTop: '12px', paddingBottom: '12px' }}
    >
      <div className='ui center aligned container'>
        <a className='item' href='mailto:zhenyuzhong001@gmail.com'>
          <i className='mail icon large'></i>
        </a>
        <a
          className='middle algned item'
          href='https://www.linkedin.com/in/zhenyu-zhong/'
        >
          <i className='linkedin icon large' />
        </a>
        <a className='item' href='https://github.com/zzhong31/'>
          <i className='github icon large'></i>
        </a>
        <div
          className='ui horzontal inverted small middle aligned'
          style={{ marginTop: '6px' }}
        >
          Made by Zhenyu Zhong © 2020
        </div>
      </div>
    </div>
  );
};

export default Footer;
