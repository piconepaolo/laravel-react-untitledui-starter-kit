import { Link } from '@inertiajs/react';
import type { PropsWithChildren } from 'react';

import AppLogoIcon from '@/components/app-logo-icon';
import { home } from '@/routes';

export default function AuthCardLayout({
    children,
    title,
    description,
}: PropsWithChildren<{
    name?: string;
    title?: string;
    description?: string;
}>) {
    return (
        <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-bg-secondary p-6 md:p-10">
            <div className="flex w-full max-w-md flex-col gap-6">
                <Link
                    href={home()}
                    className="flex items-center gap-2 self-center font-medium"
                >
                    <div className="flex h-9 w-9 items-center justify-center">
                        <AppLogoIcon className="size-9 fill-current text-text-primary" />
                    </div>
                </Link>
                <div className="flex flex-col gap-6">
                    <div className="rounded-xl border border-border-secondary bg-bg-primary shadow-xs">
                        <div className="px-10 pt-8 pb-0 text-center">
                            <h1 className="text-xl font-semibold text-text-primary">
                                {title}
                            </h1>
                            {description && (
                                <p className="mt-1 text-sm text-text-tertiary">
                                    {description}
                                </p>
                            )}
                        </div>
                        <div className="px-10 py-8">{children}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
