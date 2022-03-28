import type { NextPage } from 'next';
import App from 'components/App';
import Button from 'components/Button';
import Logo from 'components/Logo';

const Home: NextPage = () => {
  return (
    <App>
      <div className="prose dark:prose-dark">
        <div className="flex gap-8">
          <div className="w-14 shrink-0">
            <Logo />
          </div>
        </div>

        <Button>
          This is button
        </Button>
      </div>
    </App>
  );
};

export default Home;
