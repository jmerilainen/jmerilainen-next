import { useMDXComponent } from 'next-contentlayer/hooks';

import App from "components/App";
import Button from "components/Button";
import { allNotes } from 'contentlayer/generated';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const Note: NextPage<Props> = ({ note }) => {
    const MDXContent = useMDXComponent(note?.body.code ?? '');

    return (
        <App>
          <MDXContent
            components={{
                Button,
                wrapper: ({components, ...rest}) => <div className="prose" {...rest} />
            }}
          />
        </App>
    )
}

export const getStaticProps = async ({ params }) => {
    const note = allNotes.find((post) => post.slug === params?.slug);

    return { props: { note } };
}

export async function getStaticPaths() {
    return {
        paths: allNotes.map((p) => ({ params: { slug: p.slug } })),
        fallback: false,
    };
}

export default Note