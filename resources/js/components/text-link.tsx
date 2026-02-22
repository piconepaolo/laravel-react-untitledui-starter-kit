import { Link } from '@inertiajs/react';
import type { ComponentProps } from 'react';
import { cx } from '@/lib/utils';

type Props = ComponentProps<typeof Link>;

export default function TextLink({
    className = '',
    children,
    ...props
}: Props) {
    return (
        <Link
            className={cx(
                'text-text-primary underline decoration-gray-300 underline-offset-4 transition-colors duration-300 ease-out hover:decoration-current! dark:decoration-gray-600',
                className,
            )}
            {...props}
        >
            {children}
        </Link>
    );
}
