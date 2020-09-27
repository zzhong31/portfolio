import Education from './MainContent/Education';
import Experience from './MainContent/Experience';
import Portfolio from './Portfolio';

const MainBody = () => {
  return (
    <div
      className="ui text container"
      name="experienceHeader"
      style={{ marginTop: '72px' }}
    >
      <h2>About</h2>
      <Experience />
      <Education />
      <Portfolio />
    </div>
  );
};

export default MainBody;
