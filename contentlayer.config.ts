import {
    ComputedFields,
    defineDocumentType,
    makeSource
} from 'contentlayer/source-files';

const computedFields: ComputedFields = {
    slug: {
        type: 'string',
        resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, '')
    },
};

const Notes = defineDocumentType(() => ({
    name: 'Note',
    filePathPattern: '*.mdx',
    contentType: 'mdx',
    fields: {
      title: { type: 'string', required: true },
      publishedAt: { type: 'string', required: true },
      summary: { type: 'string', required: true },
    },
    computedFields
}));

const contentLayerConfig = makeSource({
    contentDirPath: 'notes',
    documentTypes: [Notes],
});

export default contentLayerConfig;