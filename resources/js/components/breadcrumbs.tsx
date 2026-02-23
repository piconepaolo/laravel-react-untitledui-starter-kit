import { Link } from '@inertiajs/react';
import { ChevronRight } from '@untitledui/icons';
import { Fragment } from 'react';

import type { BreadcrumbItem as BreadcrumbItemType } from '@/types';

export function Breadcrumbs({
    breadcrumbs,
}: {
    breadcrumbs: BreadcrumbItemType[];
}) {
    return (
        <>
            {breadcrumbs.length > 0 && (
                <nav aria-label="Breadcrumb">
                    <ol className="flex items-center gap-1.5 text-sm">
                        {breadcrumbs.map((item, index) => {
                            const isLast = index === breadcrumbs.length - 1;
                            return (
                                <Fragment key={index}>
                                    <li>
                                        {isLast ? (
                                            <span className="font-medium text-text-primary">
                                                {item.title}
                                            </span>
                                        ) : (
                                            <Link
                                                href={item.href}
                                                className="text-text-tertiary transition-colors hover:text-text-secondary"
                                            >
                                                {item.title}
                                            </Link>
                                        )}
                                    </li>
                                    {!isLast && (
                                        <ChevronRight className="size-4 text-text-quaternary" />
                                    )}
                                </Fragment>
                            );
                        })}
                    </ol>
                </nav>
            )}
        </>
    );
}
