import clsx from 'clsx';

const widthMap = {
    large: 'max-w-4xl',
    full: '',
};

const alignMap = {
    left: '',
    center: 'mx-auto',
};

const marginMap = {
    none: '',
    gutter: 'px-8',
    large: 'px-8 sm:px-12',
}

type ContainerProps = {
    children: React.ReactNode
    width?: keyof typeof widthMap,
    align?: keyof typeof alignMap,
    margin?: keyof typeof marginMap,
}

export default function Container({
    width = 'large',
    align = 'center',
    margin = 'none',
    children
}: ContainerProps): JSX.Element {
    return (
        <div
            data-component="containier"
            className={clsx(
                'w-full',
                marginMap[margin]
            )}
        >
            <div
                className={clsx(
                    'w-full',
                    widthMap[width],
                    alignMap[align]
                )}
            >
                {children}
            </div>
        </div>
    );
}
