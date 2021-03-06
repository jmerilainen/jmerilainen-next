import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Container from "components/Container";
import clsx from 'clsx';

function NavItem({ href, children }) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <Link href={href}>
      <a
        className={clsx(
          isActive
            ? 'font-bold text-indigo-500'
            : '',
        )}
      >
        {children}
      </a>
    </Link>
  );
}

export default function App({children}) {
    const menu = [
      {
        url: '/',
        label: '/'
      },
      {
        url: '/about',
        label: '/about'
      },
      {
        url: '/notes',
        label: '/notes'
      },
    ];

    return (
      <div className="w-full min-h-screen py-16 text-gray-500 bg-white dark:bg-gray-900 dark:text-white font-copy">
        <Head>
          <title>jmerilanien.fi</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Karla:wght@700&family=Inconsolata&display=swap"
            rel="stylesheet"
          />
        </Head>

        <div className="grid gap-12">
          <Container margin='large'>
            <div className="text-6xl leading-none font-heading">Hello World!</div>

            <div className="pt-4 space-y-4">
              <h1 className="inline-block px-2 py-1 text-white bg-blue-700">
                I am Joonas Meriläinen.
              </h1>
            </div>

            <div className="flex justify-between gap-4 mt-8">
              <ul className="flex gap-4">
                {menu.map(item => (
                  <li key={item.url}>
                    <NavItem href={item.url}>
                      {item.label}
                    </NavItem>
                  </li>
                ))}
              </ul>
            </div>
          </Container>

          <Container width='large' margin='large'>
            {children}
          </Container>
        </div>
      </div>
    );
}