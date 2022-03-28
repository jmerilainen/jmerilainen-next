import { allNotes } from 'contentlayer/generated';
import App from 'components/App';
import Link from 'next/link';
import type { InferGetStaticPropsType, NextPage } from 'next';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Notes: NextPage<Props> = ({ notes }) => {
  return (
    <App>
      <div className="prose dark:prose-dark">
        <h1>Notes</h1>
        {notes.map(note => (
          <h2 key={note.slug}>
            <Link href={`/notes/${note.slug}`}>
              <a>{note.title}</a>
            </Link>
          </h2>)
        )}
      </div>
    </App>
  );
};

export async function getStaticProps() {
  const notes = allNotes.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  );

  return { props: { notes } };
}

export default Notes;