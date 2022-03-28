import clsx from 'clsx';

const variantMap = {
    primary: 'bg-blue-700 text-white',
};

const sizeMap = {
    default: 'px-2',
    large: 'px-8',
};

type ButtonProps = {
    children: React.ReactNode
    variant?: keyof typeof variantMap,
    size?: keyof typeof sizeMap,
}

export default function Container({
    variant = 'primary',
    size = 'default',
    children
}: ButtonProps) {
    return (
        <button
            className={clsx(
                variantMap[variant],
                sizeMap[size],
            )}
        >
            {children}
        </button>
    );
}