const Header = () => {
  return (
    <div
      className="ui inverted masthead center aligned"
      style={{
        width: '100%',
        backgroundColor: '#1B1C1D',
        paddingBottom: '20px',
      }}
    >
      <div className="ui container" style={{ paddingTop: '30px' }}>
        <div className="ui inverted segment">
          <div className="ui inverted header ">
            <h1 className="ui inverted header">Hi, I'm Zhenyu</h1>
            <p className="ui inverted">Full Stack Web Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
