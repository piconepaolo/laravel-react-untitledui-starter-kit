import type { ComponentProps, ReactNode } from 'react';

type Props = ComponentProps<'main'> & {
    variant?: 'header' | 'sidebar';
    children?: ReactNode;
};

export function AppContent({ variant = 'header', children, ...props }: Props) {
    if (variant === 'sidebar') {
        return (
            <main
                className="flex min-w-0 flex-1 flex-col overflow-x-hidden"
                {...props}
            >
                {children}
            </main>
        );
    }

    return (
        <main
            className="mx-auto flex h-full w-full max-w-7xl flex-1 flex-col gap-4 rounded-xl"
            {...props}
        >
            {children}
        </main>
    );
}
