import App from 'components/App';
import type { NextPage } from 'next';

const About: NextPage = () => {
  return (
    <App>
      <div className="prose dark:prose-dark">
        <h1>About</h1>
        <p>Not much yet...</p>
      </div>
    </App>
  );
};

export default About;
