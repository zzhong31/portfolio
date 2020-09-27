import { Button, Popup } from 'semantic-ui-react';

const Portfolio = () => {
  return (
    <React.Fragment>
      <h1 className="ui header" name="portfolioHeader">
        Portfolio
      </h1>
      <div className="ui segment">
        <div className="ui divided items">
          <div className="item">
            <div className="ui small image">
              <img
                style={{ border: '1px solid black' }}
                src="/weather.png"
                alt="weather"
              />
            </div>
            <div className="content">
              <div className="header">Gov Weather</div>
              <div className="description">
                <a
                  className="ui button primary mini basic"
                  href="https://github.com/zzhong31/portfolio"
                >
                  <i className="github icon"></i>
                  Github
                </a>
                <a
                  className="ui button positive mini basic"
                  href="https://simplygovweather.herokuapp.com/"
                >
                  <i className="eye icon"></i>
                  Demo
                </a>
              </div>
              <div className="description">
                This is a focused weather app that focused on ease of use and
                simplicity. It is a React frontend using Semantic UI for
                theming. The backend is a Node/Express server and uses the
                public weather API data from the National Oceanic and
                Atmospheric Administration. I also included an API call to
                IPInfo to fetch the user's location without the cumbersome need
                of having to allow for allowing location services. The search is
                handled via Google Places API.
              </div>

              <div className="extra">
                <div className="ui label">React</div>
                <div className="ui label">Javascript</div>
                <div className="ui label">Typescript</div>
                <div className="ui label">Node</div>
                <div className="ui label">Express</div>
                <div className="ui label">Semantic UI</div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="ui small image">
              <img
                style={{ border: '1px solid black' }}
                src="/profiles.png"
                alt="profiles"
              />
            </div>
            <div className="content">
              <div className="header">Profiles.gg</div>
              <div className="description">
                <a
                  className="ui button primary mini basic"
                  href="https://github.com/zzhong31/portfolio"
                >
                  <i className="github icon"></i>
                  Github
                </a>
                <a
                  className="ui button positive mini basic"
                  href="https://profilesgg.herokuapp.com/?userName=undyingfire"
                >
                  <i className="eye icon"></i>
                  Demo
                </a>
              </div>
              <div className="description">
                I made this app as a focused view on profile and match history
                data for League of Legends. All the data comes from the Riot
                Games' API for League of Legends. I plan on adding match data
                saving into MongoDB and caching with Redis.
              </div>

              <div className="extra">
                <div className="ui label">React</div>
                <div className="ui label">Javascript</div>
                <div className="ui label">Typescript</div>
                <div className="ui label">Node</div>
                <div className="ui label">Express</div>
                <div className="ui label">Semantic UI</div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="ui small image">
              <img
                style={{ border: '1px solid black' }}
                src="/portfolio.png"
                alt="portfolio"
              />
            </div>
            <div className="content">
              <div className="header">My Portfolio</div>
              <div className="description">
                <a
                  className="ui button primary mini basic"
                  href="https://github.com/zzhong31/portfolio"
                >
                  <i className="github icon"></i>
                  Github
                </a>
                <Popup
                  content="You are here now!"
                  trigger={
                    <Button basic color="green" size="mini">
                      <i className="eye icon"></i>
                      Demo
                    </Button>
                  }
                />
              </div>
              <div className="description">
                I made this portfolio page to have an easy way of showing what I
                can do and what my experiences are. This was a learning exercise
                in using NextJS compared to having a vanilla React application
                and more of a focus on aesthetics.
              </div>

              <div className="extra">
                <div className="ui label">React</div>
                <div className="ui label">NextJS</div>
                <div className="ui label">Javascript</div>
                <div className="ui label">Semantic UI</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Portfolio;
