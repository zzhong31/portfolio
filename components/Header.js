const Header = () => {
  return (
    <div
      className="ui inverted masthead center aligned"
      style={{
        width: '100%',
        backgroundColor: '#1B1C1D',
      }}
    >
      <div className="ui container" style={{ paddingTop: '30px' }}>
        <div className="ui inverted segment">
          <div className="ui inverted header ">
            <div className="ui container text">
              <h1 className="ui inverted header">Hi, I'm Zhenyu</h1>
              <p>
                I'm a full stack developer specializing in React applications
              </p>
              <div
                className="ui center aligned container"
                style={{ padding: '12px 18px 6px 18px' }}
              >
                <div className="ui three column grid">
                  <div className="column">
                    <a className="item" href="mailto:zhenyuzhong001@gmail.com">
                      <i className="mail icon"></i>
                      Email
                    </a>
                  </div>
                  <div className="column">
                    <a
                      className="item"
                      href="https://www.linkedin.com/in/zhenyu-zhong/"
                    >
                      <i className="linkedin icon"></i>
                      Linkedin
                    </a>
                  </div>
                  <div className="column">
                    <a className="item" href="https://github.com/zzhong31/">
                      <i className="github icon"></i>
                      Github
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
