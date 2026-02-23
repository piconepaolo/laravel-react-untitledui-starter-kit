import type { HTMLAttributes } from 'react';

import { cx } from '@/lib/utils';

export function Spinner({
    className,
    ...props
}: HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cx(
                'size-4 animate-spin rounded-full border-2 border-current border-t-transparent',
                className,
            )}
            role="status"
            aria-label="Loading"
            {...props}
        />
    );
}
