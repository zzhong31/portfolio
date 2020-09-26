const TopMenu = (props) => {
  return (
    <div attached="top" style={{ backgroundColor: '#1B1C1D' }}>
      <div
        className="ui borderless main menu inverted"
        style={{
          width: '100%',
          border: 'none',
          marginTop: '0px',
        }}
      >
        <div className="ui container">
          <div className="header item">
            <a className="item" href="#">
              Home
            </a>
          </div>
          <a className="ui right floated item">About</a>
          <a className="ui item"> Portfolio</a>
        </div>
      </div>
    </div>
  );
};

export default TopMenu;
